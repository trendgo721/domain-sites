import { section, cards, prose, panel, split, table, steps, faq, hero, acquisition } from "../../tools/render/ui.mjs";
import { content } from "./content.mjs";

export const site = {
  name: "agrolives",
  domain: "agrolives.com.tr",
  brand: "AGROLIVES",
  themeColor: "#3d6b2c",
  /* Brand mark: an olive with a leaf */
  mark: `<svg viewBox="0 0 32 32" fill="none" aria-hidden="true" focusable="false">
    <ellipse cx="15" cy="19" rx="8.5" ry="10.5" transform="rotate(-24 15 19)"
      stroke="currentColor" stroke-width="2"/>
    <path d="M17 9c1.6-3.4 4.6-5.4 8-5.4-.2 3.6-2.4 6.4-6 7.4" stroke="currentColor"
      stroke-width="2" stroke-linejoin="round"/>
  </svg>`
};

const art = `<svg viewBox="0 0 400 400" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
  <path d="M200 350V150"/>
  <path d="M200 250c-52 0-86-30-92-84 56-4 88 22 92 84z"/>
  <path d="M200 210c46-6 74-36 78-86-50 2-76 30-78 86z"/>
  <path d="M200 160c-34-8-54-34-56-72 38 4 56 30 56 72z"/>
  <path d="M120 350h160" stroke-dasharray="4 12"/>
</svg>`;

export { content };

export function body(t) {
  return [
    hero({ ...t.hero, art }),

    section({
      id: "faaliyet",
      head: t.areas.head,
      body: cards(t.areas.items, 4)
    }),

    section({
      id: "zeytin",
      alt: true,
      head: t.varieties.head,
      body: `${table(t.varieties.table)}<div style="margin-block-start:var(--space-6)">${prose(
        t.varieties.blocks
      )}</div>`
    }),

    section({
      id: "uretim",
      head: t.process.head,
      body: steps(t.process.steps, 3)
    }),

    section({
      id: "surdurulebilir",
      alt: true,
      head: t.sustainability.head,
      body: split(prose(t.sustainability.blocks), panel(t.sustainability.panel))
    }),

    section({
      id: "sss",
      narrow: true,
      head: t.faqHead,
      body: faq(t.faq)
    }),

    acquisition({ id: "proje", email: "seller.trends1@gmail.com", ...t.acquire })
  ].join("\n");
}
