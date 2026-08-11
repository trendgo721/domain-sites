import { section, cards, prose, panel, split, table, faq, hero, acquisition } from "../../tools/render/ui.mjs";
import { content } from "./content.mjs";

export const site = {
  name: "qrabiye",
  domain: "qrabiye.com.tr",
  brand: "QRABİYE",
  themeColor: "#9a5b23",
  /* Brand mark: a stamped cookie */
  mark: `<svg viewBox="0 0 32 32" fill="none" aria-hidden="true" focusable="false">
    <circle cx="16" cy="16" r="13" stroke="currentColor" stroke-width="2"/>
    <circle cx="12" cy="13" r="1.8" fill="currentColor"/>
    <circle cx="20" cy="12" r="1.4" fill="currentColor"/>
    <circle cx="15" cy="20" r="1.5" fill="currentColor"/>
    <circle cx="21" cy="19" r="1.2" fill="currentColor"/>
  </svg>`
};

const art = `<svg viewBox="0 0 400 400" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
  <circle cx="200" cy="200" r="150"/>
  <circle cx="200" cy="200" r="118" stroke-dasharray="6 10"/>
  <circle cx="200" cy="200" r="86"/>
  <circle cx="160" cy="170" r="12" fill="currentColor" stroke="none"/>
  <circle cx="238" cy="158" r="8" fill="currentColor" stroke="none"/>
  <circle cx="186" cy="240" r="10" fill="currentColor" stroke="none"/>
  <circle cx="246" cy="228" r="7" fill="currentColor" stroke="none"/>
</svg>`;

export { content };

export function body(t) {
  return [
    hero({ ...t.hero, art }),

    section({
      id: "koleksiyon",
      head: t.collection.head,
      body: cards(t.collection.items, 3)
    }),

    section({
      id: "kutular",
      alt: true,
      head: t.boxes.head,
      body: cards(t.boxes.items, 3)
    }),

    section({
      id: "kurumsal",
      head: t.corporate.head,
      body: split(prose(t.corporate.blocks), panel(t.corporate.panel))
    }),

    section({
      id: "rehber",
      alt: true,
      head: t.guide.head,
      body: `${prose(t.guide.blocks)}<div style="margin-block-start:var(--space-6)">${table(t.guide.table)}</div>`
    }),

    section({
      id: "sss",
      narrow: true,
      head: t.faqHead,
      body: faq(t.faq)
    }),

    acquisition({
      id: "proje",
      email: "seller.trends1@gmail.com",
      ...t.acquire
    })
  ].join("\n");
}
