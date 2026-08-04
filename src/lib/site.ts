/**
 * Central site configuration.
 *
 * Domain / email still placeholders until launch — phone, TikTok, Telegram,
 * and map pin are live Vortex Visual contacts.
 */

/** PLACEHOLDER: set the production domain once it exists. */
export const SITE_URL = "https://vortexvisual.com";

export const SITE_NAME = "Vortex Visual";
export const SITE_TAGLINE = "Big screens. Bigger moments.";

export const CONTACT = {
  phone: "+251988185863",
  phoneDisplay: "+251 98 818 5863",
  /** PLACEHOLDER email address. */
  email: "hello@vortexvisual.com",
  address: "Addis Ababa, Ethiopia",
  mapsUrl: "https://maps.app.goo.gl/cDNmsWDgTDcD8z3t8",
  /** Embed uses the resolved pin from CONTACT.mapsUrl. */
  mapsEmbed:
    "https://www.google.com/maps?q=9.016329,38.7860242&z=16&output=embed",
} as const;

export const SOCIALS = {
  /** PLACEHOLDER until official handles are confirmed. */
  instagram: "https://instagram.com/vortexvisual",
  facebook: "https://facebook.com/vortexvisual",
  tiktok: "https://www.tiktok.com/@vortex.visual.et",
  youtube: "https://youtube.com/@vortexvisual",
  telegram: "https://t.me/vortex_visual_et",
} as const;

/** Builds a WhatsApp deep link with a URL-encoded prefilled message. */
export function whatsAppLink(message: string): string {
  const number = CONTACT.phone.replace(/[^0-9]/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

/** Absolute canonical URL for a route path. */
export function canonicalUrl(path: string): string {
  return `${SITE_URL}${path === "/" ? "" : path}`;
}

/** Shared meta-tag builder so every route gets consistent SEO tags. */
export function pageMeta(opts: {
  title: string;
  description: string;
  path: string;
}) {
  const url = canonicalUrl(opts.path);
  return {
    meta: [
      { title: opts.title },
      { name: "description", content: opts.description },
      { property: "og:title", content: opts.title },
      { property: "og:description", content: opts.description },
      { property: "og:url", content: url },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:image", content: `${SITE_URL}/logo-dark.png` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
