export const PORTFOLIO_CATEGORIES = [
  "Concerts",
  "Weddings",
  "Conferences",
  "Churches",
  "Sports & Screenings",
  "Outdoor Advertising",
  "Installations",
] as const;

export type PortfolioCategory = (typeof PORTFOLIO_CATEGORIES)[number];

export type PortfolioItem = {
  id: string;
  title: string;
  caption: string;
  category: PortfolioCategory;
  /** Aspect ratio hint for the grid; keeps the masonry feel deliberate. */
  aspect: "landscape" | "portrait" | "square";
  /**
   * PLACEHOLDER imagery via picsum.photos, seeded for stable URLs.
   * Swap `seed` for real deployment photos when media is provided.
   */
  seed: string;
  /** Installations with before/after pairs get the comparison slider. */
  beforeAfter?: boolean;
};

export const PORTFOLIO_ITEMS: Array<PortfolioItem> = [
  { id: "co1", title: "Riverside Music Festival", caption: "12m × 6m main-stage wall plus two side screens", category: "Concerts", aspect: "landscape", seed: "vortex-con-1" },
  { id: "co2", title: "Arena Album Launch", caption: "Curved LED backdrop with live camera switching", category: "Concerts", aspect: "landscape", seed: "vortex-con-2" },
  { id: "w1", title: "Hana & Dawit's Reception", caption: "4m × 3m backdrop screen with live photo feed", category: "Weddings", aspect: "portrait", seed: "vortex-wed-1" },
  { id: "w2", title: "Kuriftu Lakeside Wedding", caption: "Outdoor-rated screen for a 600-guest ceremony", category: "Weddings", aspect: "landscape", seed: "vortex-wed-2" },
  { id: "cf1", title: "National Investment Summit", caption: "Main screen, relay screens, and speaker timers", category: "Conferences", aspect: "landscape", seed: "vortex-conf-1" },
  { id: "cf2", title: "Tech Expo Booth Walls", caption: "Six vendor booths fitted with 2m × 2m displays", category: "Conferences", aspect: "square", seed: "vortex-conf-2" },
  { id: "ch1", title: "Grace Cathedral Sanctuary", caption: "Permanent dual side screens with lyrics feed", category: "Churches", aspect: "portrait", seed: "vortex-chu-1", beforeAfter: true },
  { id: "ch2", title: "Easter Convention", caption: "Rental wall serving a 10,000-seat open-air service", category: "Churches", aspect: "landscape", seed: "vortex-chu-2" },
  { id: "sp1", title: "Champions League Night", caption: "Public screening for 3,000 fans, dual 8m screens", category: "Sports & Screenings", aspect: "landscape", seed: "vortex-spo-1" },
  { id: "sp2", title: "Marathon Finish Line", caption: "Live timing and sponsor loops on mobile LED trailer", category: "Sports & Screenings", aspect: "square", seed: "vortex-spo-2" },
  { id: "oa1", title: "Bole Road Digital Billboard", caption: "P8 outdoor billboard, supplied and installed", category: "Outdoor Advertising", aspect: "landscape", seed: "vortex-adv-1", beforeAfter: true },
  { id: "oa2", title: "Mall Entrance Display", caption: "Storefront LED drawing footfall around the clock", category: "Outdoor Advertising", aspect: "portrait", seed: "vortex-adv-2" },
  { id: "in1", title: "Hotel Lobby Video Wall", caption: "Seamless 3m × 2m indoor wall, calibrated on-site", category: "Installations", aspect: "square", seed: "vortex-ins-1", beforeAfter: true },
  { id: "in2", title: "Corporate HQ Control Room", caption: "24/7-rated display wall with redundant processing", category: "Installations", aspect: "landscape", seed: "vortex-ins-2" },
  { id: "co3", title: "New Year Countdown Stage", caption: "City-square stage wall with broadcast feed", category: "Concerts", aspect: "square", seed: "vortex-con-3" },
  { id: "in3", title: "Showroom Pillar Wraps", caption: "Four-sided LED pillars for a car showroom", category: "Installations", aspect: "portrait", seed: "vortex-ins-3" },
];

const ASPECT_DIMENSIONS = {
  landscape: { w: 1200, h: 800 },
  portrait: { w: 800, h: 1067 },
  square: { w: 1000, h: 1000 },
} as const;

/** PLACEHOLDER image URL builder (picsum.photos). */
export function portfolioImageUrl(item: PortfolioItem, width: number): string {
  const { w, h } = ASPECT_DIMENSIONS[item.aspect];
  const height = Math.round((h / w) * width);
  return `https://picsum.photos/seed/${item.seed}/${width}/${height}`;
}

/** Alternate seed used as the "before" frame in comparison sliders. */
export function portfolioBeforeUrl(item: PortfolioItem, width: number): string {
  const { w, h } = ASPECT_DIMENSIONS[item.aspect];
  const height = Math.round((h / w) * width);
  return `https://picsum.photos/seed/${item.seed}-before/${width}/${height}?grayscale`;
}

export function portfolioSrcSet(item: PortfolioItem): string {
  return [480, 768, 1200]
    .map((w) => `${portfolioImageUrl(item, w)} ${w}w`)
    .join(", ");
}
