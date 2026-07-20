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

export type UseCase = {
  title: string;
  blurb: string;
  /** Lucide icon name key — resolved in the marquee component. */
  icon: "music" | "heart" | "mic" | "church" | "trophy" | "store";
};

/** Where our screens end up — used for the home use-case marquee. */
export const USE_CASES: Array<UseCase> = [
  {
    title: "Concerts & Festivals",
    blurb: "Main-stage walls, side screens, and IMAG for live crowds.",
    icon: "music",
  },
  {
    title: "Weddings & Ceremonies",
    blurb: "Backdrop displays and live photo feeds for the big day.",
    icon: "heart",
  },
  {
    title: "Conferences & Summits",
    blurb: "Keynote walls, relay screens, and speaker timers.",
    icon: "mic",
  },
  {
    title: "Churches & Worship",
    blurb: "Lyrics feeds and sanctuary displays that run every service.",
    icon: "church",
  },
  {
    title: "Sports & Public Screenings",
    blurb: "Stadium feeds and open-air screens for thousands of fans.",
    icon: "trophy",
  },
  {
    title: "Retail & Outdoor Advertising",
    blurb: "Storefront LEDs and digital billboards that earn daily.",
    icon: "store",
  },
];
