/* Development server.
 *
 *   node tools/serve.mjs                → http://localhost:4173 lists the sites
 *   node tools/serve.mjs --site qrabiye → pin one site to localhost:4173
 *   node tools/serve.mjs --port 5000
 *
 * Each site is reachable on its own hostname so root-relative paths and the
 * /, /en/, /ar/ language URLs behave exactly as in production:
 *
 *   http://qrabiye.localhost:4173/       http://qrabiye.localhost:4173/en/
 *
 * *.localhost resolves to 127.0.0.1 in modern browsers — no hosts file needed.
 * Pages are rendered per request by the same code the build uses.
 */

import fs from "node:fs";
import http from "node:http";
import path from "node:path";
import { MIME, SHARED_DIR, findSite, parseArgs, readRegistry, siteDir } from "./lib.mjs";
import { LANGS, LANG_PATH, renderRobots, renderSitemap, renderSitePage, siteMeta } from "./render/index.mjs";

const { flags } = parseArgs(process.argv.slice(2));
const port = Number(flags.port || process.env.PORT || 4173);
const pinned = typeof flags.site === "string" ? flags.site : null;

const { sites } = readRegistry();

if (pinned && !findSite(sites, pinned)) {
  console.error(`Unknown site "${pinned}". Known: ${sites.map((s) => s.name).join(", ")}`);
  process.exit(1);
}

function resolveSite(hostHeader) {
  if (pinned) return findSite(sites, pinned);

  const host = String(hostHeader || "").split(":")[0].toLowerCase();
  const labels = host.split(".");

  if (labels.length > 1) {
    const bySubdomain = findSite(sites, labels[0]);
    if (bySubdomain) return bySubdomain;
  }

  return findSite(sites, host);
}

/** Static asset lookup: the site folder shadows shared/, same as the build. */
function resolveFile(siteName, urlPath) {
  let rel = decodeURIComponent(urlPath);
  rel = path.normalize(rel).replace(/^[\\/]+/, "");
  if (!rel || rel.startsWith("..")) return null;

  for (const base of [siteDir({ name: siteName }), SHARED_DIR]) {
    const candidate = path.join(base, rel);
    if (!candidate.startsWith(base)) continue;
    if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) return candidate;
  }

  return null;
}

function send(res, status, body, type = "text/html; charset=utf-8") {
  res.writeHead(status, { "Content-Type": type, "Cache-Control": "no-store" });
  res.end(body);
}

function hubPage() {
  const rows = sites
    .map(
      (s) => `<li>
        <a href="http://${s.name}.localhost:${port}/">${s.name}.localhost:${port}</a>
        <span>${s.domain}</span>
        <span class="langs">${LANGS.map(
          (l) => `<a href="http://${s.name}.localhost:${port}${LANG_PATH[l]}">${l.toUpperCase()}</a>`
        ).join(" · ")}</span>
      </li>`
    )
    .join("\n");

  return `<!doctype html><html lang="tr"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1"><title>DOMAIN-SITES — dev</title>
<style>
 body{margin:0;padding:3rem 1.5rem;background:#0f1115;color:#eef1f5;font:16px/1.6 system-ui,sans-serif}
 main{max-width:46rem;margin:0 auto}h1{font-size:1.4rem;margin:0 0 .25rem}
 p{color:#98a2b3;margin:0 0 2rem}ul{list-style:none;padding:0;display:grid;gap:.6rem}
 li{display:flex;flex-wrap:wrap;gap:.4rem 1rem;align-items:baseline;padding:.9rem 1.1rem;
    background:#171a21;border:1px solid #262b35;border-radius:12px}
 a{color:#7cc6ff;text-decoration:none;font-weight:600}a:hover{text-decoration:underline}
 span{color:#98a2b3;font-size:.85rem}.langs a{font-weight:500;font-size:.8rem}
</style></head><body><main>
<h1>DOMAIN-SITES</h1><p>${sites.length} sites. Each one runs on its own hostname.</p>
<ul>${rows}</ul></main></body></html>`;
}

const server = http.createServer(async (req, res) => {
  const site = resolveSite(req.headers.host);
  const urlPath = (req.url || "/").split("?")[0];

  if (!site) {
    send(res, 200, hubPage());
    return;
  }

  try {
    const meta = await siteMeta(site.name);

    /* Language pages */
    const langEntry = LANGS.find(
      (lang) => urlPath === LANG_PATH[lang] || urlPath === LANG_PATH[lang].replace(/\/$/, "") + "/index.html"
    );

    if (langEntry) {
      send(res, 200, await renderSitePage(site.name, langEntry));
      return;
    }

    /* /en and /ar without the trailing slash */
    const bare = LANGS.find((lang) => lang !== "tr" && urlPath === `/${lang}`);
    if (bare) {
      res.writeHead(308, { Location: `/${bare}/` });
      res.end();
      return;
    }

    if (urlPath === "/robots.txt") {
      send(res, 200, renderRobots(meta), "text/plain; charset=utf-8");
      return;
    }

    if (urlPath === "/sitemap.xml") {
      send(res, 200, renderSitemap(meta), "application/xml; charset=utf-8");
      return;
    }

    /* Static assets */
    const file = resolveFile(site.name, urlPath);

    if (!file) {
      send(res, 404, `<!doctype html><meta charset="utf-8"><title>404</title>
        <body style="font-family:system-ui;padding:3rem"><h1>404</h1>
        <p><code>${urlPath}</code> not found in sites/${site.name} or shared/.</p>`);
      return;
    }

    const type = MIME[path.extname(file).toLowerCase()] || "application/octet-stream";
    res.writeHead(200, { "Content-Type": type, "Cache-Control": "no-store" });
    fs.createReadStream(file).pipe(res);
  } catch (error) {
    console.error(error);
    send(res, 500, `<!doctype html><meta charset="utf-8"><title>500</title>
      <body style="font-family:system-ui;padding:3rem"><h1>500</h1><pre>${String(error.stack || error)
        .replace(/</g, "&lt;")}</pre>`);
  }
});

server.listen(port, () => {
  console.log(`DOMAIN-SITES dev server → http://localhost:${port}`);
  if (pinned) {
    console.log(`  pinned: ${findSite(sites, pinned).name}`);
  } else {
    for (const s of sites) {
      console.log(`  ${s.domain.padEnd(22)} http://${s.name}.localhost:${port}/`);
    }
  }
});
