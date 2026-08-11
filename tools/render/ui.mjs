/* Section-level building blocks shared by the five sites.
   Each site composes a different set in a different order and restyles them
   through its own css/site.css — the markup contract stays identical. */

import { icon } from "./icons.mjs";

export function esc(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const list = (items, fn) => items.map(fn).join("\n");

/* ---------- Head of a section ---------- */

function head(data = {}, center = false) {
  if (!data.title && !data.eyebrow) return "";
  return `<div class="section__head${center ? " section__head--center" : ""} reveal">
    ${data.eyebrow ? `<span class="eyebrow">${esc(data.eyebrow)}</span>` : ""}
    ${data.title ? `<h2>${esc(data.title)}</h2>` : ""}
    ${data.text ? `<p class="lead">${esc(data.text)}</p>` : ""}
  </div>`;
}

/**
 * @param {{id?:string, alt?:boolean, tight?:boolean, narrow?:boolean,
 *          center?:boolean, head?:object, body:string}} opts
 */
export function section(opts) {
  const classes = ["section"];
  if (opts.alt) classes.push("section--alt");
  if (opts.tight) classes.push("section--tight");

  return `<section class="${classes.join(" ")}"${opts.id ? ` id="${opts.id}"` : ""}${
    opts.label ? ` aria-labelledby="${opts.id}-title"` : ""
  }>
  <div class="container${opts.narrow ? " container--narrow" : ""}">
    ${head(opts.head, opts.center)}
    ${opts.body}
  </div>
</section>`;
}

/* ---------- Hero ---------- */

/**
 * @param {{eyebrow?:string, title:string, text:string, actions?:Array,
 *          meta?:Array<{icon:string,text:string}>, art?:string}} data
 */
export function hero(data) {
  const actions = (data.actions || [])
    .map(
      (a, i) =>
        `<a class="btn${i > 0 ? " btn--ghost" : ""}" href="${esc(a.href)}">${esc(a.label)}</a>`
    )
    .join("\n");

  const meta = (data.meta || [])
    .map((m) => `<li>${icon(m.icon, { size: 18 })}<span>${esc(m.text)}</span></li>`)
    .join("\n");

  return `<section class="hero">
  ${data.art ? `<div class="hero__art" aria-hidden="true">${data.art}</div>` : ""}
  <div class="container">
    <div class="hero__inner">
      ${data.eyebrow ? `<span class="eyebrow">${esc(data.eyebrow)}</span>` : ""}
      <h1 class="hero__title">${esc(data.title)}</h1>
      <p class="hero__text">${esc(data.text)}</p>
      ${actions ? `<div class="hero__actions">${actions}</div>` : ""}
      ${meta ? `<ul class="hero__meta">${meta}</ul>` : ""}
    </div>
  </div>
</section>`;
}

/* ---------- Card grid ---------- */

/** @param {Array<{icon?:string,title:string,text:string,chips?:string[]}>} items */
export function cards(items, columns = 3) {
  return `<div class="grid grid--${columns}">
  ${list(
    items,
    (item) => `<article class="card reveal">
    ${item.icon ? `<span class="card__icon">${icon(item.icon)}</span>` : ""}
    <h3 class="card__title">${esc(item.title)}</h3>
    <p class="card__text">${esc(item.text)}</p>
    ${
      item.chips && item.chips.length
        ? `<ul class="chips">${list(item.chips, (c) => `<li class="chip">${esc(c)}</li>`)}</ul>`
        : ""
    }
  </article>`
  )}
</div>`;
}

/* ---------- Numbered steps ---------- */

/** @param {Array<{title:string,text:string}>} items */
export function steps(items, columns = 4) {
  return `<div class="grid grid--${columns} steps">
  ${list(
    items,
    (item) => `<div class="step reveal">
    <h3>${esc(item.title)}</h3>
    <p>${esc(item.text)}</p>
  </div>`
  )}
</div>`;
}

/* ---------- Long-form editorial block ---------- */

/** @param {Array<{h3?:string, p?:string[], ul?:string[]}>} blocks */
export function prose(blocks) {
  return `<div class="prose">
  ${list(blocks, (b) => {
    const parts = [];
    if (b.h3) parts.push(`<h3>${esc(b.h3)}</h3>`);
    if (b.p) parts.push(list(b.p, (p) => `<p>${esc(p)}</p>`));
    if (b.ul) parts.push(`<ul>${list(b.ul, (li) => `<li>${esc(li)}</li>`)}</ul>`);
    return parts.join("\n");
  })}
</div>`;
}

/* ---------- Side panel ---------- */

/** @param {{title:string, items:Array<{term:string, detail:string}>}} data */
export function panel(data) {
  return `<aside class="panel reveal">
  <h3 class="panel__title">${esc(data.title)}</h3>
  <ul class="panel__list">
    ${list(data.items, (i) => `<li><b>${esc(i.term)}</b><span>${esc(i.detail)}</span></li>`)}
  </ul>
</aside>`;
}

export function split(main, aside) {
  return `<div class="split">
  <div>${main}</div>
  ${aside}
</div>`;
}

/* ---------- Data table ---------- */

/** @param {{head:string[], rows:string[][], note?:string, caption?:string}} data */
export function table(data) {
  return `<div class="table-wrap reveal">
  <table class="table">
    ${data.caption ? `<caption class="visually-hidden">${esc(data.caption)}</caption>` : ""}
    <thead><tr>${list(data.head, (h) => `<th scope="col">${esc(h)}</th>`)}</tr></thead>
    <tbody>
      ${list(
        data.rows,
        (row) =>
          `<tr>${row
            .map((cell, i) => (i === 0 ? `<th scope="row">${esc(cell)}</th>` : `<td>${esc(cell)}</td>`))
            .join("")}</tr>`
      )}
    </tbody>
  </table>
</div>
${data.note ? `<p class="table-note">${esc(data.note)}</p>` : ""}`;
}

/* ---------- FAQ ---------- */

/** @param {Array<{q:string,a:string|string[]}>} items */
export function faq(items) {
  return `<div class="faq">
  ${list(items, (item) => {
    const answers = Array.isArray(item.a) ? item.a : [item.a];
    return `<details class="faq__item reveal">
    <summary class="faq__q">${esc(item.q)}</summary>
    <div class="faq__a">${list(answers, (a) => `<p>${esc(a)}</p>`)}</div>
  </details>`;
  })}
</div>`;
}

/* ---------- Acquisition / contact ---------- */

/**
 * Deliberately understated: a business-development note, not a for-sale banner.
 * @param {{id:string, eyebrow:string, title:string, text:string, note:string,
 *          cta:string, subject:string, email:string}} data
 */
export function acquisition(data) {
  const mailto = `mailto:${data.email}?subject=${encodeURIComponent(data.subject)}`;
  return `<section class="section" id="${data.id}">
  <div class="container">
    <div class="acquire reveal">
      <div class="acquire__grid">
        <div>
          <span class="eyebrow">${esc(data.eyebrow)}</span>
          <h2>${esc(data.title)}</h2>
          <p>${esc(data.text)}</p>
          <p class="small muted">${esc(data.note)}</p>
        </div>
        <div class="acquire__actions">
          <a class="btn" href="${esc(mailto)}">${icon("mail", { size: 18 })}<span>${esc(data.cta)}</span></a>
          <a class="acquire__mail btn btn--ghost" href="mailto:${esc(data.email)}">${esc(data.email)}</a>
        </div>
      </div>
    </div>
  </div>
</section>`;
}
