# DOMAIN-SITES

Five static, trilingual (TR / EN / AR) brand sites in one repository, built to
be served from one Vercel project by hostname.

| Folder              | Domain               | Concept                                        |
| ------------------- | -------------------- | ---------------------------------------------- |
| `sites/qrabiye`     | qrabiye.com.tr       | QRABİYE — artisan cookies and gift boxes       |
| `sites/agrolives`   | agrolives.com.tr     | AGROLIVES — modern agriculture and olives      |
| `sites/onlinefidan` | onlinefidan.com.tr   | ONLINE FİDAN — online nursery and plant guide  |
| `sites/isinhazir`   | isinhazir.com.tr     | İŞİN HAZIR — jobs and recruitment platform     |
| `sites/bizetciyiz`  | bizetciyiz.com.tr    | BİZ ETÇİYİZ — premium butcher and meat guide   |

No framework, no dependencies, no build tooling to install. Node is used only
to run three small scripts: a dev server, a static build, and a quality check.
The output is plain HTML, CSS and one 2 KB script.

## Content policy

These sites present early-stage brand concepts. Nothing on them claims a
capability that does not exist: no prices, stock, availability, delivery,
counters, statistics, awards, testimonials, certifications, addresses or
company history. Where a visitor might reasonably assume otherwise, the FAQ
says plainly that the project is a concept and not yet transacting. Structured
data follows the same rule — `WebSite`, `Organization`, `WebPage` and `FAQPage`
only, never `Product`, `Offer`, `Review`, `AggregateRating` or `JobPosting`.
`tools/check.mjs` fails the build if those types appear.

Keep that rule when editing content.

## Layout

```
sites.json              the five sites, in order (name + domain)
vercel.json             hostname routing, www redirects, headers
shared/                 assets every site inherits, copied into each build
  css/tokens.css          design tokens — every site overrides these
  css/base.css            layout + components, written in logical properties
  js/site.js              language memory, mobile nav, header state, year
sites/<name>/
  site.mjs                site config, brand mark, page composition
  content.mjs             all three languages of copy for that site
  css/site.css            the site's visual identity (token overrides)
  favicon.svg
tools/
  serve.mjs               dev server, renders pages per request
  build.mjs               writes dist/
  check.mjs               quality gate over the built output
  render/                 page shell, section components, icon set
dist/                   build output, git-ignored
```

`shared/` is copied into every build first, then the site folder on top, so a
site can shadow any shared file by placing one at the same path. Pages use
root-relative asset paths (`/css/base.css`), which resolve identically at
`http://qrabiye.localhost:4173/` and at `https://qrabiye.com.tr/`.

## Multilingual routing

Each site builds three real, crawlable pages — no language is hidden behind
JavaScript:

| URL     | Language | `<html>`                       |
| ------- | -------- | ------------------------------ |
| `/`     | Türkçe   | `lang="tr" dir="ltr"`          |
| `/en/`  | English  | `lang="en" dir="ltr"`          |
| `/ar/`  | العربية  | `lang="ar" dir="rtl"`          |

- The header switcher is three plain `<a>` links, always crawlable.
- Every page carries `hreflang` for `tr-TR`, `en`, `ar` and `x-default` (→ `/`),
  plus a canonical on its own URL. The sitemap repeats the same alternates.
- Arabic flips to RTL through `dir="rtl"` alone: `shared/css/base.css` uses
  logical properties (`padding-inline-start`, `inset-inline-end`, `text-align:
  start`) throughout, so there is no separate RTL stylesheet.
- Clicking a language stores the choice in `localStorage`. A returning visitor
  who chose EN or AR is redirected **only from `/`**, never from `/en/` or
  `/ar/`. A crawler has nothing stored, so it is never redirected.

## Hostname routing

Locally, each site answers on its own hostname — `*.localhost` resolves to
127.0.0.1 in every modern browser, so nothing needs to be added to the hosts
file:

```bash
node tools/serve.mjs
```

- `http://localhost:4173` — index of all five sites
- `http://qrabiye.localhost:4173/` — that site's Turkish page
- `http://qrabiye.localhost:4173/en/`, `/ar/` — its other languages
- `node tools/serve.mjs --site qrabiye` pins one site to `localhost:4173`

In production, `vercel.json` maps hostnames onto the built folders:

- `www.<domain>` → 308 redirect to the apex (non-www is canonical everywhere)
- `<domain>/:path*` → rewrite to `/<site>/:path*`

One repository, one Vercel project, five custom domains. DNS is configured
outside this repository.

## Commands

```bash
node tools/serve.mjs
```

```bash
node tools/build.mjs
```

```bash
node tools/check.mjs
```

`build.mjs` writes `dist/<site>/` — the deploy root for that domain: three
language pages plus `robots.txt`, `sitemap.xml`, `favicon.svg`, `css/` and
`js/`. It also writes a `noindex` preview index at `dist/index.html` for Vercel
preview URLs, which have no matching hostname.

`check.mjs` validates the built output: exactly one `<h1>` per page, no heading
level skips, canonical and hreflang correctness, titles and descriptions unique
across all fifteen pages, resolvable internal anchors, existing local assets,
valid and truthful JSON-LD, and per-domain `robots.txt` and `sitemap.xml`.

## Editing

- **Copy** lives in `sites/<name>/content.mjs`, with `tr`, `en` and `ar`
  branches of the same shape. Keep the three in step.
- **Structure** lives in `sites/<name>/site.mjs`, which composes section
  components from `tools/render/ui.mjs` (`hero`, `cards`, `steps`, `table`,
  `prose`, `panel`, `split`, `faq`, `acquisition`). Sites deliberately use
  different components in a different order.
- **Identity** lives in `sites/<name>/css/site.css`. Prefer overriding tokens
  over writing new rules.
- The dev server caches site modules; restart it after editing `content.mjs`,
  `site.mjs` or anything in `tools/render/`. CSS and JS are read per request.

## Performance and accessibility notes

- No web fonts, no external requests, no images — brand marks, icons and hero
  artwork are inline SVG, so first paint waits on nothing over the network.
- The entrance animation is CSS-only. Nothing depends on JavaScript to become
  visible, and it is disabled under `prefers-reduced-motion`.
- The one script is deferred and does not touch layout, so it cannot shift it.
- Text meets WCAG AA contrast on all five palettes; the compact nav starts at
  900px; layouts hold from 320px up with no horizontal overflow.
