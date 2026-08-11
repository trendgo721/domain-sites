import { section, cards, prose, panel, split, steps, faq, hero, acquisition } from "../../tools/render/ui.mjs";
import { content } from "./content.mjs";

export const site = {
  name: "isinhazir",
  domain: "isinhazir.com.tr",
  brand: "İŞİN HAZIR",
  themeColor: "#2f52c8",
  /* Brand mark: a check inside a bracket — "ready" */
  mark: `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2.4"
    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
    <path d="M11 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h5"/>
    <path d="M21 4h5a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2h-5"/>
    <path d="m11 16 4 4 7-8"/>
  </svg>`
};

const art = `<svg viewBox="0 0 400 400" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
  <rect x="60" y="90" width="130" height="90" rx="10"/>
  <rect x="210" y="90" width="130" height="90" rx="10"/>
  <rect x="135" y="230" width="130" height="90" rx="10"/>
  <path d="M125 180v25h150v-25"/>
  <path d="M200 205v25"/>
  <path d="m92 130 18 18 30-32" stroke-width="3"/>
  <path d="M242 122h66M242 140h44M167 262h66M167 280h44"/>
</svg>`;

export { content };

export function body(t) {
  return [
    hero({ ...t.hero, art }),

    section({ id: "adaylar", head: t.candidates.head, body: cards(t.candidates.items, 4) }),

    section({ id: "isverenler", alt: true, head: t.employers.head, body: cards(t.employers.items, 4) }),

    section({ id: "nasil", head: t.how.head, body: steps(t.how.steps, 4) }),

    section({ id: "sektorler", alt: true, head: t.sectors.head, body: cards(t.sectors.items, 3) }),

    section({
      id: "rehber",
      head: t.guide.head,
      body: split(prose(t.guide.blocks), panel(t.guide.panel))
    }),

    section({ id: "sss", alt: true, narrow: true, head: t.faqHead, body: faq(t.faq) }),

    acquisition({ id: "proje", email: "seller.trends1@gmail.com", ...t.acquire })
  ].join("\n");
}
