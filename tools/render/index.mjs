/* Loads a site module and renders its pages. Used by both the dev server and
   the production build, so what you see locally is byte-for-byte what ships. */

import path from "node:path";
import { pathToFileURL } from "node:url";
import { SITES_DIR } from "../lib.mjs";
import { LANGS, renderDocument, renderRobots, renderSitemap } from "./page.mjs";

export { LANGS, LANG_PATH, renderRobots, renderSitemap } from "./page.mjs";

const cache = new Map();

export async function loadSite(name) {
  if (cache.has(name)) return cache.get(name);

  const entry = path.join(SITES_DIR, name, "site.mjs");
  const mod = await import(pathToFileURL(entry).href);

  if (!mod.site || !mod.content || typeof mod.body !== "function") {
    throw new Error(`${name}/site.mjs must export "site", "content" and "body"`);
  }

  for (const lang of LANGS) {
    if (!mod.content[lang]) throw new Error(`${name}: missing "${lang}" content`);
  }

  cache.set(name, mod);
  return mod;
}

export async function renderSitePage(name, lang) {
  const mod = await loadSite(name);
  const content = mod.content[lang];
  return renderDocument({
    site: mod.site,
    lang,
    content,
    body: mod.body(content, lang)
  });
}

export async function siteMeta(name) {
  const mod = await loadSite(name);
  return mod.site;
}
