import { section, cards, prose, panel, split, table, faq, hero, acquisition } from "../../tools/render/ui.mjs";
import { content } from "./content.mjs";

export const site = {
  name: "bizetciyiz",
  domain: "bizetciyiz.com.tr",
  brand: "BİZ ETÇİYİZ",
  themeColor: "#14100f",
  /* Brand mark: a cleaver */
  mark: `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2.2"
    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
    <path d="M6 20 18 8"/>
    <path d="M18 8c2.6-3.2 5.2-5.6 7.6-6.6.8 2.6-.6 6-3.4 9.4L18 8z"/>
    <path d="M4 22.5 9.5 28"/>
  </svg>`
};

const art = `<svg viewBox="0 0 400 400" fill="none" stroke="currentColor" stroke-width="2.5"
  stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <circle cx="200" cy="200" r="140" stroke-dasharray="2 16"/>
  <path d="M110 250 240 120"/>
  <path d="M240 120c26-32 52-56 76-66 8 26-6 60-34 94l-42-28z"/>
  <path d="M96 268l38 38"/>
</svg>`;

export { content };

export function body(t) {
  return [
    hero({ ...t.hero, art }),

    section({ id: "etler", head: t.categories.head, body: cards(t.categories.items, 3) }),

    section({ id: "parcalar", alt: true, head: t.cuts.head, body: table(t.cuts.table) }),

    section({
      id: "pisirme",
      head: t.cooking.head,
      body: `${table(t.cooking.table)}<div style="margin-block-start:var(--space-7)">${prose(
        t.cooking.blocks
      )}</div>`
    }),

    section({
      id: "kalite",
      alt: true,
      head: t.quality.head,
      body: split(prose(t.quality.blocks), panel(t.quality.panel))
    }),

    section({ id: "sss", narrow: true, head: t.faqHead, body: faq(t.faq) }),

    acquisition({ id: "proje", email: "seller.trends1@gmail.com", ...t.acquire })
  ].join("\n");
}
