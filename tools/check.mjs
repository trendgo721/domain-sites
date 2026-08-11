/* Quality gate for the built output.
 *
 *   node tools/build.mjs && node tools/check.mjs
 *
 * Validates structure and SEO metadata of every page in dist/ without any
 * dependency: one H1 per page, no heading-level skips, canonical and hreflang
 * correctness, unique titles and descriptions across all 15 pages, resolvable
 * internal anchors, existing local assets, valid JSON-LD, and the presence of
 * robots.txt and sitemap.xml per domain.
 */

import fs from "node:fs";
import path from "node:path";
import { DIST_DIR, readRegistry } from "./lib.mjs";
import { HREFLANG, LANG_PATH, LANGS } from "./render/page.mjs";

const errors = [];
const warnings = [];
const seenTitles = new Map();
const seenDescriptions = new Map();

const fail = (where, message) => errors.push(`${where}: ${message}`);
const warn = (where, message) => warnings.push(`${where}: ${message}`);

const attr = (tag, name) => {
  const match = tag.match(new RegExp(`${name}="([^"]*)"`, "i"));
  return match ? match[1] : null;
};

const { sites } = readRegistry();

if (!fs.existsSync(DIST_DIR)) {
  console.error("dist/ not found — run: node tools/build.mjs");
  process.exit(1);
}

let pages = 0;

for (const site of sites) {
  const root = path.join(DIST_DIR, site.name);

  if (!fs.existsSync(root)) {
    fail(site.name, "missing dist folder");
    continue;
  }

  /* ---- robots.txt and sitemap.xml ---- */
  const robots = path.join(root, "robots.txt");
  const sitemap = path.join(root, "sitemap.xml");

  if (!fs.existsSync(robots)) fail(site.name, "robots.txt missing");
  else if (!fs.readFileSync(robots, "utf8").includes(`https://${site.domain}/sitemap.xml`)) {
    fail(site.name, "robots.txt does not point at the site's sitemap");
  }

  if (!fs.existsSync(sitemap)) fail(site.name, "sitemap.xml missing");
  else {
    const xml = fs.readFileSync(sitemap, "utf8");
    for (const lang of LANGS) {
      if (!xml.includes(`<loc>https://${site.domain}${LANG_PATH[lang]}</loc>`)) {
        fail(site.name, `sitemap.xml missing <loc> for ${lang}`);
      }
    }
    if (!xml.includes('hreflang="x-default"')) fail(site.name, "sitemap.xml missing x-default");
  }

  /* ---- pages ---- */
  for (const lang of LANGS) {
    const file = path.join(root, LANG_PATH[lang], "index.html");
    const where = `${site.name}${LANG_PATH[lang]}`;

    if (!fs.existsSync(file)) {
      fail(where, "page missing");
      continue;
    }

    pages += 1;
    const html = fs.readFileSync(file, "utf8");

    /* html element */
    const htmlTag = html.match(/<html[^>]*>/i)?.[0] || "";
    if (attr(htmlTag, "lang") !== lang) fail(where, `<html lang> should be "${lang}"`);
    const expectedDir = lang === "ar" ? "rtl" : "ltr";
    if (attr(htmlTag, "dir") !== expectedDir) fail(where, `<html dir> should be "${expectedDir}"`);

    /* headings */
    const headings = [...html.matchAll(/<h([1-4])[\s>]/gi)].map((m) => Number(m[1]));
    const h1Count = headings.filter((level) => level === 1).length;
    if (h1Count !== 1) fail(where, `expected exactly one <h1>, found ${h1Count}`);

    for (let i = 1; i < headings.length; i += 1) {
      if (headings[i] - headings[i - 1] > 1) {
        fail(where, `heading level skips from h${headings[i - 1]} to h${headings[i]}`);
        break;
      }
    }

    /* title and description */
    const title = html.match(/<title>([^<]*)<\/title>/i)?.[1] || "";
    if (!title) fail(where, "empty <title>");
    if (title.length > 70) warn(where, `title is ${title.length} chars`);
    if (seenTitles.has(title)) fail(where, `duplicate title, also in ${seenTitles.get(title)}`);
    seenTitles.set(title, where);

    const descTag = html.match(/<meta name="description"[^>]*>/i)?.[0] || "";
    const description = attr(descTag, "content") || "";
    if (!description) fail(where, "missing meta description");
    if (description.length > 185) warn(where, `description is ${description.length} chars`);
    if (description.length < 70) warn(where, `description is only ${description.length} chars`);
    if (seenDescriptions.has(description)) {
      fail(where, `duplicate description, also in ${seenDescriptions.get(description)}`);
    }
    seenDescriptions.set(description, where);

    /* canonical + hreflang */
    const canonicalTag = html.match(/<link rel="canonical"[^>]*>/i)?.[0] || "";
    const expectedCanonical = `https://${site.domain}${LANG_PATH[lang]}`;
    if (attr(canonicalTag, "href") !== expectedCanonical) {
      fail(where, `canonical should be ${expectedCanonical}`);
    }

    const alternates = [...html.matchAll(/<link rel="alternate"[^>]*>/gi)].map((m) => m[0]);
    for (const code of LANGS) {
      const expected = `https://${site.domain}${LANG_PATH[code]}`;
      const found = alternates.find((tag) => attr(tag, "hreflang") === HREFLANG[code]);
      if (!found) fail(where, `missing hreflang ${HREFLANG[code]}`);
      else if (attr(found, "href") !== expected) fail(where, `hreflang ${HREFLANG[code]} → wrong URL`);
    }
    if (!alternates.some((tag) => attr(tag, "hreflang") === "x-default")) {
      fail(where, "missing hreflang x-default");
    }

    /* social metadata */
    for (const property of ["og:title", "og:description", "og:url", "og:locale", "og:type"]) {
      if (!html.includes(`property="${property}"`)) fail(where, `missing ${property}`);
    }
    for (const name of ["twitter:card", "twitter:title", "twitter:description"]) {
      if (!html.includes(`name="${name}"`)) fail(where, `missing ${name}`);
    }

    /* structured data */
    const ld = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/i)?.[1];
    if (!ld) fail(where, "missing JSON-LD");
    else {
      try {
        const data = JSON.parse(ld);
        const types = (data["@graph"] || []).map((node) => node["@type"]);
        for (const required of ["WebSite", "Organization", "WebPage"]) {
          if (!types.includes(required)) fail(where, `JSON-LD missing ${required}`);
        }
        for (const banned of ["Product", "Offer", "Review", "AggregateRating", "JobPosting"]) {
          if (JSON.stringify(data).includes(`"${banned}"`)) {
            fail(where, `JSON-LD contains ${banned}, which would not be truthful here`);
          }
        }
      } catch (error) {
        fail(where, `JSON-LD does not parse: ${error.message}`);
      }
    }

    /* internal anchors resolve */
    const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
    for (const match of html.matchAll(/href="#([^"]+)"/g)) {
      if (!ids.has(match[1])) fail(where, `anchor #${match[1]} has no target`);
    }

    /* local assets exist */
    for (const match of html.matchAll(/(?:href|src)="(\/[^"#]*)"/g)) {
      const target = match[1];
      if (LANGS.some((code) => target === LANG_PATH[code])) continue;
      const asset = path.join(root, target);
      if (!fs.existsSync(asset)) fail(where, `references missing file ${target}`);
    }

    /* contact + hygiene */
    if (!html.includes("mailto:seller.trends1@gmail.com")) fail(where, "no contact mailto link");
    if (html.includes("localhost")) fail(where, "build output contains localhost");
    if (/\{\{[A-Z_]+\}\}/.test(html)) fail(where, "unreplaced template placeholder");
    if (/lorem ipsum/i.test(html)) fail(where, "placeholder copy left in page");
  }
}

/* ---- report ---- */

console.log(`checked ${pages} pages across ${sites.length} sites`);

for (const message of warnings) console.log(`  warn  ${message}`);
for (const message of errors) console.log(`  FAIL  ${message}`);

if (errors.length) {
  console.error(`\n${errors.length} error(s)`);
  process.exit(1);
}

console.log(`\nall checks passed${warnings.length ? ` (${warnings.length} warning(s))` : ""}`);
