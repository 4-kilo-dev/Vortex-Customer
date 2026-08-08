/**
 * Central site configuration for vortexvisual.et
 */

export const SITE_URL = "https://vortexvisual.et";
export const SITE_HOST = "vortexvisual.et";

export const SITE_NAME = "Vortex Visual";
export const SITE_TAGLINE = "Big screens. Bigger moments.";
export const SITE_LOCALE = "en_ET";

/** Default social share image (absolute). Prefer a real deployment still. */
export const DEFAULT_OG_IMAGE = `${SITE_URL}/portfolio/twilight-outdoor-concert.jpg`;
export const DEFAULT_OG_IMAGE_ALT =
  "Vortex Visual LED screen and stage setup at an outdoor event in Addis Ababa";

export const CONTACT = {
  phone: "+251988185863",
  phoneDisplay: "+251 98 818 5863",
  email: "vortexvisualinfo@gmail.com",
  address: "Addis Ababa, Ethiopia",
  addressLocality: "Addis Ababa",
  addressCountry: "ET",
  geo: {
    latitude: 9.016329,
    longitude: 38.7860242,
  },
  mapsUrl: "https://maps.app.goo.gl/cDNmsWDgTDcD8z3t8",
  mapsEmbed:
    "https://www.google.com/maps?q=9.016329,38.7860242&z=16&output=embed",
} as const;

export const SOCIALS = {
  tiktok: "https://www.tiktok.com/@vortex.visual.et",
  instagram: "https://www.instagram.com/vortexvisual.et",
  telegram: "https://t.me/vortex_visual_et",
} as const;

/** Site credit — shown in the footer. */
export const POWERED_BY = {
  name: "4kilodev",
  url: "https://4kilodev.com",
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

type PageMetaOpts = {
  title: string;
  description: string;
  path: string;
  /** Optional override for Open Graph / Twitter image (absolute or site path). */
  image?: string;
  imageAlt?: string;
  /** Open Graph type — default website. */
  type?: "website" | "article";
  noIndex?: boolean;
};

/** Shared meta-tag builder so every route gets consistent SEO tags. */
export function pageMeta(opts: PageMetaOpts) {
  const url = canonicalUrl(opts.path);
  const image = opts.image
    ? opts.image.startsWith("http")
      ? opts.image
      : `${SITE_URL}${opts.image}`
    : DEFAULT_OG_IMAGE;
  const imageAlt = opts.imageAlt ?? DEFAULT_OG_IMAGE_ALT;
  const type = opts.type ?? "website";

  return {
    meta: [
      { title: opts.title },
      { name: "description", content: opts.description },
      { name: "author", content: SITE_NAME },
      {
        name: "keywords",
        content:
          "LED screen rental Addis Ababa, LED display sales Ethiopia, event LED wall, Vortex Visual, LED installation Addis, stage screen rental, digital billboard Ethiopia, white-label LED production",
      },
      {
        name: "robots",
        content: opts.noIndex
          ? "noindex, nofollow"
          : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { name: "googlebot", content: opts.noIndex ? "noindex, nofollow" : "index, follow" },
      { property: "og:title", content: opts.title },
      { property: "og:description", content: opts.description },
      { property: "og:url", content: url },
      { property: "og:type", content: type },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:locale", content: SITE_LOCALE },
      { property: "og:image", content: image },
      { property: "og:image:alt", content: imageAlt },
      { property: "og:image:secure_url", content: image },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: opts.title },
      { name: "twitter:description", content: opts.description },
      { name: "twitter:image", content: image },
      { name: "twitter:image:alt", content: imageAlt },
    ],
    links: [
      { rel: "canonical", href: url },
      { rel: "alternate", hrefLang: "en", href: url },
      { rel: "alternate", hrefLang: "x-default", href: url },
    ],
  };
}

/** BreadcrumbList JSON-LD for inner pages. */
export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: canonicalUrl(item.path),
    })),
  };
}
