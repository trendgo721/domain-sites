/* Document shell: <head> SEO, header with the crawlable language switcher,
   footer, the quiet TRENDGO studio credit, and the JSON-LD graph.
   Also renders robots.txt and sitemap.xml for a site. */

import { icon } from "./icons.mjs";
import { esc } from "./ui.mjs";

export const LANGS = ["tr", "en", "ar"];

export const LANG_PATH = { tr: "/", en: "/en/", ar: "/ar/" };
export const LANG_LABEL = { tr: "TR", en: "EN", ar: "AR" };
export const LANG_NAME = { tr: "Türkçe", en: "English", ar: "العربية" };
export const HREFLANG = { tr: "tr-TR", en: "en", ar: "ar" };
export const OG_LOCALE = { tr: "tr_TR", en: "en_US", ar: "ar_AR" };

/* Interface chrome that is not part of any site's editorial content. */
const UI = {
  tr: {
    skip: "İçeriğe geç",
    menu: "Menü",
    langLabel: "Dil seçimi",
    nav: "Ana menü",
    sections: "Bölümler",
    languages: "Diller",
    contact: "İletişim",
    legal: "Bu site, geliştirilmekte olan bir dijital marka konsepti olarak yayımlanmaktadır.",
    studioQ: "İnternet sitesine mi ihtiyacınız var?",
    studioT: "Hızlı, modern ve SEO odaklı web projeleri.",
    studioCta: "Teklif alın",
    studioSubject: "Web projesi talebi"
  },
  en: {
    skip: "Skip to content",
    menu: "Menu",
    langLabel: "Language",
    nav: "Main menu",
    sections: "Sections",
    languages: "Languages",
    contact: "Contact",
    legal: "This site is published as a digital brand concept currently in development.",
    studioQ: "Need a website?",
    studioT: "Fast, modern and SEO-focused web projects.",
    studioCta: "Request a quote",
    studioSubject: "Web project enquiry"
  },
  ar: {
    skip: "انتقل إلى المحتوى",
    menu: "القائمة",
    langLabel: "اللغة",
    nav: "القائمة الرئيسية",
    sections: "الأقسام",
    languages: "اللغات",
    contact: "تواصل معنا",
    legal: "يُنشر هذا الموقع بوصفه مفهوم علامة رقمية قيد التطوير.",
    studioQ: "هل تحتاج إلى موقع إلكتروني؟",
    studioT: "مشاريع ويب سريعة وحديثة ومهيّأة لمحركات البحث.",
    studioCta: "اطلب عرض سعر",
    studioSubject: "طلب مشروع ويب"
  }
};

const STUDIO_EMAIL = "seller.trends1@gmail.com";

export function canonical(site, lang) {
  return `https://${site.domain}${LANG_PATH[lang]}`;
}

/* ---------- Header ---------- */

function header(site, lang, t) {
  const ui = UI[lang];
  const base = LANG_PATH[lang];

  const navLinks = t.nav
    .map((item) => `<li><a class="nav__link" href="${esc(item.href)}">${esc(item.label)}</a></li>`)
    .join("\n");

  const langLinks = LANGS.map((code) => {
    const isCurrent = code === lang;
    return `<a class="langs__link" href="${LANG_PATH[code]}" hreflang="${HREFLANG[code]}" lang="${code}"
      data-lang-link="${code}"${isCurrent ? ' aria-current="true"' : ""}
      title="${esc(LANG_NAME[code])}">${LANG_LABEL[code]}</a>`;
  }).join("\n");

  return `<header class="site-header" data-header>
  <div class="container">
    <a class="brand" href="${base}" aria-label="${esc(site.brand)}">
      <span class="brand__mark" aria-hidden="true">${site.mark}</span>
      <span class="brand__name">${esc(site.brand)}</span>
    </a>

    <button class="nav-toggle" type="button" aria-label="${esc(ui.menu)}" aria-expanded="false"
      aria-controls="primary-nav" data-nav-toggle>
      <span class="nav-toggle__bar"></span><span class="nav-toggle__bar"></span><span class="nav-toggle__bar"></span>
    </button>

    <nav class="nav" id="primary-nav" aria-label="${esc(ui.nav)}" data-nav>
      <ul class="nav__list">${navLinks}</ul>
      <a class="btn" href="${esc(t.headerCta.href)}">${esc(t.headerCta.label)}</a>
    </nav>

    <div class="header__side">
      <nav class="langs" aria-label="${esc(ui.langLabel)}">${langLinks}</nav>
    </div>
  </div>
</header>`;
}

/* ---------- Footer ---------- */

function footer(site, lang, t) {
  const ui = UI[lang];

  /* Sections that do not fit the header still deserve an internal link. */
  const sectionLinks = [...t.nav, ...(t.navFooter || [])]
    .map((item) => `<li><a href="${esc(item.href)}">${esc(item.label)}</a></li>`)
    .join("\n");

  const langLinks = LANGS.map(
    (code) =>
      `<li><a href="${LANG_PATH[code]}" hreflang="${HREFLANG[code]}" lang="${code}"
        data-lang-link="${code}">${esc(LANG_NAME[code])}</a></li>`
  ).join("\n");

  return `<footer class="site-footer">
  <div class="container">
    <div class="footer__top">
      <div>
        <a class="brand" href="${LANG_PATH[lang]}">
          <span class="brand__mark" aria-hidden="true">${site.mark}</span>
          <span class="brand__name">${esc(site.brand)}</span>
        </a>
        <p class="small" style="margin-block-start:var(--space-3);max-width:32ch">${esc(t.footerTagline)}</p>
      </div>

      <nav aria-label="${esc(ui.sections)}">
        <h2 class="footer__title">${esc(ui.sections)}</h2>
        <ul class="footer__list">${sectionLinks}</ul>
      </nav>

      <div>
        <h2 class="footer__title">${esc(ui.languages)}</h2>
        <ul class="footer__list">${langLinks}</ul>
        <h2 class="footer__title" style="margin-block-start:var(--space-5)">${esc(ui.contact)}</h2>
        <ul class="footer__list">
          <li><a href="mailto:${STUDIO_EMAIL}">${STUDIO_EMAIL}</a></li>
        </ul>
      </div>
    </div>

    <div class="footer__bottom">
      <p>© <span data-year>2026</span> ${esc(site.brand)} · ${esc(site.domain)}</p>
      <p>${esc(ui.legal)}</p>
    </div>

    <aside class="studio">
      <span class="studio__brand">${icon("spark", { size: 16 })}TRENDGO Digital</span>
      <span class="studio__text"><b>${esc(ui.studioQ)}</b> ${esc(ui.studioT)}</span>
      <a href="mailto:${STUDIO_EMAIL}?subject=${encodeURIComponent(ui.studioSubject)}"
        rel="nofollow">${esc(ui.studioCta)}</a>
    </aside>
  </div>
</footer>`;
}

/* ---------- Structured data ---------- */

function jsonLd(site, lang, t) {
  const url = canonical(site, lang);
  const graph = [
    {
      "@type": "WebSite",
      "@id": `https://${site.domain}/#website`,
      url: `https://${site.domain}/`,
      name: site.brand,
      inLanguage: HREFLANG[lang],
      publisher: { "@id": `https://${site.domain}/#organization` }
    },
    {
      "@type": "Organization",
      "@id": `https://${site.domain}/#organization`,
      name: site.brand,
      url: `https://${site.domain}/`,
      description: t.meta.description,
      email: STUDIO_EMAIL,
      areaServed: "TR",
      knowsLanguage: ["tr", "en", "ar"]
    },
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: t.meta.title,
      description: t.meta.description,
      inLanguage: HREFLANG[lang],
      isPartOf: { "@id": `https://${site.domain}/#website` },
      about: { "@id": `https://${site.domain}/#organization` }
    }
  ];

  if (t.faq && t.faq.length) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      inLanguage: HREFLANG[lang],
      isPartOf: { "@id": `${url}#webpage` },
      mainEntity: t.faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: Array.isArray(item.a) ? item.a.join(" ") : item.a
        }
      }))
    });
  }

  return JSON.stringify({ "@context": "https://schema.org", "@graph": graph });
}

/* ---------- Document ---------- */

/**
 * @param {{site:object, lang:string, content:object, body:string}} args
 */
export function renderDocument({ site, lang, content, body }) {
  const t = content;
  const ui = UI[lang];
  const dir = lang === "ar" ? "rtl" : "ltr";
  const url = canonical(site, lang);

  const alternates = LANGS.map(
    (code) =>
      `<link rel="alternate" hreflang="${HREFLANG[code]}" href="https://${site.domain}${LANG_PATH[code]}">`
  ).join("\n  ");

  return `<!doctype html>
<html lang="${lang}" dir="${dir}" data-lang="${lang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(t.meta.title)}</title>
  <meta name="description" content="${esc(t.meta.description)}">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">
  <meta name="theme-color" content="${site.themeColor}">
  <link rel="canonical" href="${url}">
  ${alternates}
  <link rel="alternate" hreflang="x-default" href="https://${site.domain}/">

  <meta property="og:type" content="website">
  <meta property="og:site_name" content="${esc(site.brand)}">
  <meta property="og:locale" content="${OG_LOCALE[lang]}">
  <meta property="og:url" content="${url}">
  <meta property="og:title" content="${esc(t.meta.ogTitle || t.meta.title)}">
  <meta property="og:description" content="${esc(t.meta.description)}">
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="${esc(t.meta.ogTitle || t.meta.title)}">
  <meta name="twitter:description" content="${esc(t.meta.description)}">

  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="/css/tokens.css">
  <link rel="stylesheet" href="/css/base.css">
  <link rel="stylesheet" href="/css/site.css">
  <script type="application/ld+json">${jsonLd(site, lang, t)}</script>
  <script src="/js/site.js" defer></script>
</head>
<body>
  <a class="skip-link" href="#main">${esc(ui.skip)}</a>
  ${header(site, lang, t)}
  <main id="main">
${body}
  </main>
  ${footer(site, lang, t)}
</body>
</html>
`;
}

/* ---------- robots.txt / sitemap.xml ---------- */

export function renderRobots(site) {
  return `User-agent: *
Allow: /

Sitemap: https://${site.domain}/sitemap.xml
`;
}

export function renderSitemap(site) {
  const today = new Date().toISOString().slice(0, 10);

  const urls = LANGS.map((lang) => {
    const alternates = LANGS.map(
      (code) =>
        `    <xhtml:link rel="alternate" hreflang="${HREFLANG[code]}" href="https://${site.domain}${LANG_PATH[code]}"/>`
    ).join("\n");

    return `  <url>
    <loc>https://${site.domain}${LANG_PATH[lang]}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${lang === "tr" ? "1.0" : "0.8"}</priority>
${alternates}
    <xhtml:link rel="alternate" hreflang="x-default" href="https://${site.domain}/"/>
  </url>`;
  }).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;
}
