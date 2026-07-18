import {
  MonitorPlay,
  Store,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  icon: LucideIcon;
  summary: string;
  description: string;
  deliverables: Array<string>;
};

export const SERVICES: Array<Service> = [
  {
    slug: "screen-rental",
    title: "LED Screen Rental",
    icon: MonitorPlay,
    summary:
      "Event-grade LED screens delivered, rigged, and operated — indoor or outdoor, any size your venue demands.",
    description:
      "From a wedding hall backdrop to a festival main stage, we rent modular LED walls sized to your venue and audience. Every rental includes site assessment, delivery, rigging, and an on-site technician running the screen from load-in to teardown — so the picture never becomes your problem.",
    deliverables: [
      "Site survey and screen size/pixel-pitch recommendation",
      "Delivery, rigging, and full teardown",
      "On-site technician for the entire event",
      "Content playback, live feed, and camera switching support",
    ],
  },
  {
    slug: "screen-sales",
    title: "LED Screen Sales",
    icon: Store,
    summary:
      "Permanent indoor and outdoor LED displays — supplied, installed, calibrated, and backed by warranty.",
    description:
      "We supply and install permanent LED solutions: digital billboards, storefront displays, video walls for lobbies and control rooms, and stage screens for churches and venues. We handle sourcing, structural installation, calibration, and training, then stay available for maintenance.",
    deliverables: [
      "Needs assessment, sizing, and pixel-pitch specification",
      "Supply of panels, controllers, and processing",
      "Professional installation and color calibration",
      "Warranty, operator training, and maintenance plan",
    ],
  },
];

/** Services highlighted on the home page (both of them). */
export const FEATURED_SERVICES = SERVICES;

/** Where our screens end up — used for the home use-case tiles. */
export const USE_CASES = [
  "Concerts & Festivals",
  "Weddings & Ceremonies",
  "Conferences & Summits",
  "Churches & Worship",
  "Sports & Public Screenings",
  "Retail & Outdoor Advertising",
] as const;
