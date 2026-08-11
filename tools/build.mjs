/* Build every site into dist/ as plain static files.
 *
 *   node tools/build.mjs             → all sites
 *   node tools/build.mjs qrabiye     → one site
 *
 * Output layout (dist/<site>/ is the deploy root for that domain):
 *
 *   dist/<site>/index.html      Turkish
 *   dist/<site>/en/index.html   English
 *   dist/<site>/ar/index.html   Arabic (dir="rtl")
 *   dist/<site>/robots.txt  sitemap.xml  favicon.svg  css/  js/
 *
 * vercel.json maps each production hostname onto its dist/<site>/ folder,
 * so one repository and one Vercel project serve all five domains.
 */

import fs from "node:fs";
import path from "node:path";
import { DIST_DIR, SHARED_DIR, copyDir, findSite, parseArgs, readRegistry, siteDir } from "./lib.mjs";
import { LANGS, LANG_PATH, renderRobots, renderSitemap, renderSitePage, siteMeta } from "./render/index.mjs";

const { positional } = parseArgs(process.argv.slice(2));
const { sites } = readRegistry();

const targets = positional.length
  ? positional.map((key) => {
      const site = findSite(sites, key);
      if (!site) {
        console.error(`Unknown site "${key}". Known: ${sites.map((s) => s.name).join(", ")}`);
        process.exit(1);
      }
      return site;
    })
  : sites;

const write = (file, contents) => {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, contents, "utf8");
};

/* Skip build-time modules — only assets belong in the output. */
const assetsOnly = (src, entry) => !(entry.isFile() && src.endsWith(".mjs"));

if (positional.length === 0) fs.rmSync(DIST_DIR, { recursive: true, force: true });

for (const entry of targets) {
  const out = path.join(DIST_DIR, entry.name);
  const meta = await siteMeta(entry.name);

  if (meta.domain !== entry.domain) {
    console.error(`${entry.name}: domain mismatch — sites.json says ${entry.domain}, site.mjs says ${meta.domain}`);
    process.exit(1);
  }

  fs.rmSync(out, { recursive: true, force: true });

  let files = copyDir(SHARED_DIR, out);
  files += copyDir(siteDir(entry), out, assetsOnly);

  for (const lang of LANGS) {
    write(path.join(out, LANG_PATH[lang], "index.html"), await renderSitePage(entry.name, lang));
    files += 1;
  }

  write(path.join(out, "robots.txt"), renderRobots(meta));
  write(path.join(out, "sitemap.xml"), renderSitemap(meta));
  files += 2;

  console.log(`built ${entry.name.padEnd(12)} ${entry.domain.padEnd(22)} ${files} files → dist/${entry.name}/`);
}

/* A private index for Vercel preview URLs, which have no matching hostname. */
if (positional.length === 0) {
  const rows = sites
    .map(
      (s) =>
        `<li><a href="/${s.name}/">${s.domain}</a> <span>${LANGS.map(
          (l) => `<a href="/${s.name}${LANG_PATH[l]}">${l.toUpperCase()}</a>`
        ).join(" · ")}</span></li>`
    )
    .join("\n");

  write(
    path.join(DIST_DIR, "index.html"),
    `<!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex, nofollow"><title>DOMAIN-SITES</title>
<style>body{margin:0;padding:3rem 1.5rem;background:#0f1115;color:#eef1f5;
font:16px/1.6 system-ui,sans-serif}main{max-width:40rem;margin:0 auto}
h1{font-size:1.3rem}ul{list-style:none;padding:0;display:grid;gap:.6rem}
li{padding:.9rem 1.1rem;background:#171a21;border:1px solid #262b35;border-radius:12px;
display:flex;flex-wrap:wrap;gap:.5rem 1rem;justify-content:space-between}
a{color:#7cc6ff;text-decoration:none}a:hover{text-decoration:underline}
span a{font-size:.85rem;color:#98a2b3}</style></head><body><main>
<h1>DOMAIN-SITES</h1><p>Preview index — each domain is served by hostname in production.</p>
<ul>${rows}</ul></main></body></html>
`
  );

  write(path.join(DIST_DIR, "robots.txt"), "User-agent: *\nDisallow: /\n");
  console.log(`built preview index → dist/index.html`);
}
