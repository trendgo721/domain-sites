import { section, cards, prose, panel, split, table, steps, faq, hero, acquisition } from "../../tools/render/ui.mjs";
import { content } from "./content.mjs";

export const site = {
  name: "onlinefidan",
  domain: "onlinefidan.com.tr",
  brand: "ONLINE FİDAN",
  themeColor: "#137a4a",
  /* Brand mark: a young sapling */
  mark: `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2.2"
    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
    <path d="M16 29V13"/>
    <path d="M16 17c0-6-3.8-10-10-10 0 6 3.8 10 10 10z"/>
    <path d="M16 15c0-5.2 3.4-8.8 9-8.8 0 5.2-3.4 8.8-9 8.8z"/>
  </svg>`
};

const art = `<svg viewBox="0 0 400 400" fill="none" stroke="currentColor" stroke-width="2.5"
  stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <path d="M200 360V150"/>
  <path d="M200 230c0-70-44-116-116-116 0 70 44 116 116 116z"/>
  <path d="M200 200c0-60 40-102 104-102 0 60-40 102-104 102z"/>
  <path d="M120 360h160" stroke-dasharray="3 14"/>
  <circle cx="200" cy="150" r="6" fill="currentColor" stroke="none"/>
</svg>`;

export { content };

export function body(t) {
  return [
    hero({ ...t.hero, art }),

    section({ id: "kategoriler", head: t.categories.head, body: cards(t.categories.items, 3) }),

    section({ id: "takvim", alt: true, head: t.calendar.head, body: table(t.calendar.table) }),

    section({
      id: "rehber",
      head: t.guide.head,
      body: split(prose(t.guide.blocks), panel(t.guide.panel))
    }),

    section({ id: "bakim", alt: true, head: t.care.head, body: steps(t.care.steps, 3) }),

    section({ id: "fiyat", narrow: true, head: t.pricing.head, body: prose(t.pricing.blocks) }),

    section({ id: "sss", alt: true, narrow: true, head: t.faqHead, body: faq(t.faq) }),

    acquisition({ id: "proje", email: "seller.trends1@gmail.com", ...t.acquire })
  ].join("\n");
}
