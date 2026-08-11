/* Inline stroke icons. Kept in one place so no site pulls an icon font or an
   external SVG sprite over the network. */

const PATHS = {
  check: '<path d="M4 12.5l5 5L20 6.5"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 7 8.5 6 8.5-6"/>',
  shield: '<path d="M12 3l7 3v6c0 4.2-2.9 7.6-7 9-4.1-1.4-7-4.8-7-9V6z"/><path d="m9 12 2 2 4-4"/>',
  clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5v5l3 1.8"/>',
  leaf: '<path d="M20 4C10 4 5 8.5 5 15a5 5 0 0 0 5 5c6.5 0 10-5 10-16z"/><path d="M9.5 19c1.3-5 4-8.2 8-10.4"/>',
  sprout: '<path d="M12 21v-7"/><path d="M12 14C12 9.6 9.2 6.6 4.5 6.6c0 4.4 2.8 7.4 7.5 7.4z"/><path d="M12 14c0-3.8 2.4-6.6 6.6-6.6 0 3.8-2.4 6.6-6.6 6.6z"/>',
  tree: '<path d="M12 21v-4.5"/><path d="M12 3.5 17.5 11h-2.8L18 16H6l3.3-5H6.5z"/>',
  droplet: '<path d="M12 3.5s6 6.4 6 10.2a6 6 0 1 1-12 0C6 9.9 12 3.5 12 3.5z"/>',
  gift: '<rect x="3" y="7.5" width="18" height="4" rx="1"/><path d="M4.8 11.5V20a1 1 0 0 0 1 1h12.4a1 1 0 0 0 1-1v-8.5"/><path d="M12 7.5V21"/><path d="M12 7.5C9.2 7.5 7 6.7 7 5.4S9.4 3 12 7.5zm0 0c2.8 0 5-.8 5-2.1S14.6 3 12 7.5z"/>',
  cookie: '<circle cx="12" cy="12" r="8.6"/><circle cx="9.4" cy="10" r="1"/><circle cx="14.4" cy="9.2" r="1"/><circle cx="11.2" cy="15" r="1"/><circle cx="15.2" cy="14.2" r="1"/>',
  box: '<path d="m3.5 8 8.5-4 8.5 4-8.5 4z"/><path d="M3.5 8v8l8.5 4 8.5-4V8"/><path d="M12 12v8"/>',
  truck: '<rect x="2.5" y="6.5" width="11.5" height="9.5" rx="1"/><path d="M14 9.5h3.6l3 3.2V16H14z"/><circle cx="7" cy="18" r="1.9"/><circle cx="17.4" cy="18" r="1.9"/>',
  calendar: '<rect x="3.5" y="5" width="17" height="15.5" rx="2"/><path d="M3.5 10h17M8.5 3v4M15.5 3v4"/>',
  thermometer: '<path d="M14 13.6V5.4a2 2 0 1 0-4 0v8.2a4 4 0 1 0 4 0z"/><path d="M12 8.5v6.6"/>',
  knife: '<path d="M3.5 20.5 12 12"/><path d="M12 12c1.8-2.4 3.6-4.6 5.6-6.2 1.4-1.1 2.6-1.6 2.9-1.3.3.3-.2 1.5-1.3 2.9-1.6 2-3.8 3.8-6.2 5.6z"/>',
  flame: '<path d="M12 21c3.7 0 6-2.4 6-5.6 0-4.4-6-9.4-6-12.4-1 3-2.9 4.4-4.4 6.4A7.7 7.7 0 0 0 6 15.4C6 18.6 8.3 21 12 21z"/><path d="M12 21c1.7 0 2.9-1.1 2.9-2.7 0-2-2.9-3.6-2.9-5.6-1.4 2-2.9 3.1-2.9 5.6C9.1 19.9 10.3 21 12 21z"/>',
  award: '<circle cx="12" cy="9" r="5.2"/><path d="M8.9 13.6 8 21l4-2.1L16 21l-.9-7.4"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m16.2 16.2 4.6 4.6"/>',
  briefcase: '<rect x="3" y="7" width="18" height="13.5" rx="2"/><path d="M8.5 7V5.6A1.6 1.6 0 0 1 10.1 4h3.8a1.6 1.6 0 0 1 1.6 1.6V7"/><path d="M3 12.5h18"/>',
  users: '<circle cx="9.2" cy="8" r="3.2"/><path d="M3.4 20c0-3.4 2.6-5.2 5.8-5.2s5.8 1.8 5.8 5.2"/><path d="M16.2 5.4a3 3 0 0 1 0 5.4"/><path d="M17.6 14.9c2 .6 3 2.2 3 5.1"/>',
  globe: '<circle cx="12" cy="12" r="8.6"/><path d="M3.4 12h17.2"/><path d="M12 3.4c2.8 3.4 2.8 13.8 0 17.2-2.8-3.4-2.8-13.8 0-17.2z"/>',
  chart: '<path d="M3.5 20.5h17"/><path d="M6.5 20.5v-7M11 20.5V6M15.5 20.5v-4.5M20 20.5V9.5"/>',
  sun: '<circle cx="12" cy="12" r="4.2"/><path d="M12 3v2.2M12 18.8V21M3 12h2.2M18.8 12H21M5.6 5.6l1.6 1.6M16.8 16.8l1.6 1.6M18.4 5.6l-1.6 1.6M7.2 16.8l-1.6 1.6"/>',
  olive: '<path d="M16.4 4.2c3 3 2.8 8.2-1.2 12.2s-9.2 4.2-12.2 1.2c3 .6 6.4-.8 9.2-3.6s4.6-6.8 4.2-9.8z"/><path d="M17.8 3.4c1.6 0 2.8 1.2 2.8 2.8"/>',
  scale: '<path d="M12 4.5V20"/><path d="M7 20h10"/><path d="M4 10h6l-3 5.2A3 3 0 0 0 13 15L10 10"/><path d="M14 9h6l-3 5.2A3 3 0 0 0 23 14"/>',
  note: '<rect x="4.5" y="3.5" width="15" height="17" rx="2"/><path d="M8.5 8.5h7M8.5 12h7M8.5 15.5h4"/>',
  link: '<path d="M10.5 13.5a4 4 0 0 0 5.7 0l2.6-2.6a4 4 0 1 0-5.7-5.7l-1.3 1.3"/><path d="M13.5 10.5a4 4 0 0 0-5.7 0l-2.6 2.6a4 4 0 1 0 5.7 5.7l1.3-1.3"/>',
  spark: '<path d="M12 3.5 13.7 9l5.5 1.7-5.5 1.7L12 18l-1.7-5.6L4.8 10.7 10.3 9z"/><path d="M18.5 16.5 19.3 19l2.5.8-2.5.8-.8 2.4"/>'
};

/** @param {string} name @param {{size?:number, extraClass?:string}} [opts] */
export function icon(name, opts = {}) {
  const body = PATHS[name];
  if (!body) throw new Error(`Unknown icon: ${name}`);
  const size = opts.size || 24;
  const cls = opts.extraClass ? ` class="${opts.extraClass}"` : "";
  return (
    `<svg${cls} viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" ` +
    `stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" ` +
    `aria-hidden="true" focusable="false">${body}</svg>`
  );
}

export const iconNames = Object.keys(PATHS);
