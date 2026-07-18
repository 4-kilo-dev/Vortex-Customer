/**
 * Central site configuration.
 *
 * PLACEHOLDER VALUES — everything marked "PLACEHOLDER" below must be swapped
 * for real values (domain, phone, email, address, social handles) before
 * launch. They are collected here so there is exactly one place to edit.
 */

/** PLACEHOLDER: set the production domain once it exists. */
export const SITE_URL = "https://vortexvisual.com";

export const SITE_NAME = "Vortex Visual";
export const SITE_TAGLINE = "Big screens. Bigger moments.";

export const CONTACT = {
  /** PLACEHOLDER phone number (E.164, no spaces) — also used for WhatsApp. */
  phone: "+251900000000",
  phoneDisplay: "+251 900 000 000", // PLACEHOLDER
  /** PLACEHOLDER email address. */
  email: "hello@vortexvisual.com",
  /** PLACEHOLDER street address. */
  address: "Bole Road, Addis Ababa, Ethiopia",
} as const;

/** PLACEHOLDER social profile URLs. */
export const SOCIALS = {
  instagram: "https://instagram.com/vortexvisual",
  facebook: "https://facebook.com/vortexvisual",
  tiktok: "https://tiktok.com/@vortexvisual",
  youtube: "https://youtube.com/@vortexvisual",
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
