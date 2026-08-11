/* Build every site into dist/ as plain static files.
 *
 * node tools/build.mjs             -> all sites
 * node tools/build.mjs qrabiye     -> one site
 */

import fs from "node:fs";
import path from "node:path";
import {
  DIST_DIR,
  SHARED_DIR,
  copyDir,
  findSite,
  parseArgs,
  readRegistry,
  siteDir
} from "./lib.mjs";

import {
  LANGS,
  LANG_PATH,
  renderRobots,
  renderSitemap,
  renderSitePage,
  siteMeta
} from "./render/index.mjs";

const { positional } = parseArgs(process.argv.slice(2));
const { sites } = readRegistry();

const targets = positional.length
  ? positional.map((key) => {
      const site = findSite(sites, key);

      if (!site) {
        console.error(
          `Unknown site "${key}". Known: ${sites.map((s) => s.name).join(", ")}`
        );
        process.exit(1);
      }

      return site;
    })
  : sites;

const write = (file, contents) => {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, contents, "utf8");
};

/* Skip build-time modules - only assets belong in output. */
const assetsOnly = (src, entry) =>
  !(entry.isFile() && src.endsWith(".mjs"));

/* Full build starts with a completely clean dist directory. */
if (positional.length === 0) {
  fs.rmSync(DIST_DIR, { recursive: true, force: true });
}

for (const entry of targets) {
  const out = path.join(DIST_DIR, entry.name);
  const meta = await siteMeta(entry.name);

  if (meta.domain !== entry.domain) {
    console.error(
      `${entry.name}: domain mismatch - sites.json says ${entry.domain}, site.mjs says ${meta.domain}`
    );
    process.exit(1);
  }

  fs.rmSync(out, { recursive: true, force: true });

  let files = copyDir(SHARED_DIR, out);
  files += copyDir(siteDir(entry), out, assetsOnly);

  for (const lang of LANGS) {
    write(
      path.join(out, LANG_PATH[lang], "index.html"),
      await renderSitePage(entry.name, lang)
    );
    files += 1;
  }

  write(path.join(out, "robots.txt"), renderRobots(meta));
  write(path.join(out, "sitemap.xml"), renderSitemap(meta));
  files += 2;

  console.log(
    `built ${entry.name.padEnd(12)} ${entry.domain.padEnd(22)} ${files} files -> dist/${entry.name}/`
  );
}