export const PORTFOLIO_CATEGORIES = [
  "Concerts",
  "Conferences",
  "Sports & Screenings",
  "Installations",
  "Exhibitions",
] as const;

export type PortfolioCategory = (typeof PORTFOLIO_CATEGORIES)[number];

export type PortfolioItem = {
  id: string;
  title: string;
  caption: string;
  category: PortfolioCategory;
  /** Aspect ratio hint for the grid; keeps the masonry feel deliberate. */
  aspect: "landscape" | "portrait" | "square";
  /** Local path under /public — extracted from partnership proposal Selected Work. */
  image: string;
  /** Optional partner / client label for the partnerships strip. */
  partner?: string;
};

/**
 * Real deployments from the Vortex Visual partnership proposal
 * (Selected Work + corporate / exhibition builds).
 */
export const PORTFOLIO_ITEMS: Array<PortfolioItem> = [
  {
    id: "sw1",
    title: "Twilight Outdoor Concert",
    caption: "Rigged LED screens and stage structure for a live outdoor show",
    category: "Concerts",
    aspect: "landscape",
    image: "/portfolio/twilight-outdoor-concert.jpg",
  },
  {
    id: "sw2",
    title: "Modular LED Gateway",
    caption: "Event gateway and race-start structure built from modular LED panels",
    category: "Sports & Screenings",
    aspect: "landscape",
    image: "/portfolio/modular-led-gateway.jpg",
    partner: "Public Event Staging",
  },
  {
    id: "sw3",
    title: "CRAFT Addis Festival",
    caption: "Large-format LED screens for keynotes and festival programming",
    category: "Conferences",
    aspect: "landscape",
    image: "/portfolio/craft-addis-festival.jpg",
    partner: "CRAFT Addis",
  },
  {
    id: "sw4",
    title: "Immersive LED Room",
    caption: "Full-room LED installation — starfield and canyon environments",
    category: "Installations",
    aspect: "landscape",
    image: "/portfolio/immersive-led-starfield.jpg",
  },
  {
    id: "sw5",
    title: "Truss & LED Rigging",
    caption: "Engineered truss for hanging LED walls, lighting, and speaker arrays",
    category: "Concerts",
    aspect: "landscape",
    image: "/portfolio/truss-led-rigging.jpg",
  },
  {
    id: "sw6",
    title: "Outdoor LED Wall",
    caption: "High-refresh visual wall for concerts and cultural nights",
    category: "Concerts",
    aspect: "landscape",
    image: "/portfolio/outdoor-led-wall.jpg",
  },
  {
    id: "sw7",
    title: "Custom MDF Set Pieces",
    caption: "Venue entrance sculpture build — Multipurpose Hall activation",
    category: "Exhibitions",
    aspect: "landscape",
    image: "/portfolio/mdf-venue-entrance.jpg",
  },
  {
    id: "sw8",
    title: "Visit Addis Ababa Stand",
    caption: "Exhibition booth concept and branded activation stand",
    category: "Exhibitions",
    aspect: "landscape",
    image: "/portfolio/visit-addis-booth.jpg",
    partner: "Addis Ababa Tourism",
  },
  {
    id: "sw9",
    title: "I Love Addis Exhibition Booth",
    caption: "Branded booth structure with lounge and screen integration",
    category: "Exhibitions",
    aspect: "landscape",
    image: "/portfolio/addis-tourism-booth.jpg",
    partner: "Addis Ababa Tourism",
  },
  {
    id: "sw10",
    title: "Hotel Conference Corridor",
    caption: "Exhibition display and signage run for a hotel conference",
    category: "Conferences",
    aspect: "landscape",
    image: "/portfolio/hotel-exhibition-corridor.jpg",
  },
  {
    id: "sw11",
    title: "She Runs Addis Activation",
    caption: "Brand activation photo installation for a city running campaign",
    category: "Exhibitions",
    aspect: "landscape",
    image: "/portfolio/she-runs-addis.jpg",
    partner: "She Runs Addis",
  },
  {
    id: "sw12",
    title: "City Banner Deployment",
    caption: "City-wide signage and banner deployment across Addis Ababa",
    category: "Exhibitions",
    aspect: "landscape",
    image: "/portfolio/addis-tourism-banners.jpg",
    partner: "Addis Ababa Tourism",
  },
  {
    id: "sw13",
    title: "Visit Addis Stand Design",
    caption: "Exhibition booth concept design for a tourism activation",
    category: "Exhibitions",
    aspect: "landscape",
    image: "/portfolio/visit-addis-stand-design.jpg",
    partner: "Addis Ababa Tourism",
  },
  {
    id: "sw14",
    title: "Exhibition Booth Build",
    caption: "Branded structure and signage — booth build in progress",
    category: "Exhibitions",
    aspect: "landscape",
    image: "/portfolio/exhibition-booth-build.jpg",
  },
  {
    id: "sw15",
    title: "MDF Fabrication",
    caption: "Custom MDF stage decks, set pieces, and branded structures",
    category: "Installations",
    aspect: "landscape",
    image: "/portfolio/mdf-set-pieces.jpg",
  },
];

/** Local image path — width arg kept for call-site compatibility. */
export function portfolioImageUrl(item: PortfolioItem, _width = 1200): string {
  return item.image;
}

export function portfolioSrcSet(item: PortfolioItem): string {
  return `${item.image} 1200w`;
}
