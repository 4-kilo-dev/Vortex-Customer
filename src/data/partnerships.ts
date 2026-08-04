/**
 * B2B cooperative partnership content — adapted from
 * Vortex Visual Partnership Proposal (event & production agencies).
 */

export const PARTNERSHIP_HERO = {
  eyebrow: "B2B Partnerships",
  title: "Premium LED, rigging & fabrication partner for your full event portfolio",
  lead: "A strategic technical partnership framework built for agencies producing corporate functions, concerts, and exhibitions — delivering reliable LED deployment, structural rigging, and white-label execution at preferred B2B rates.",
  tags: ["Corporate Events", "Concerts", "Exhibitions"] as const,
};

export const PARTNERSHIP_OBJECTIVE = {
  title: "Objective & core value proposition",
  text: "Vortex Visual is a technical LED equipment provider and live production partner for high-stakes events — summits, concerts, and exhibitions. We give agencies a single, reliable technical partner: screens, structure, and crew that show up as an extension of your brand, not ours.",
};

export const TECHNICAL_EDGE = [
  {
    title: "Hardware reliability",
    text: "Event-grade panels, redundant processing, and spare inventory on site so the picture stays live when it matters.",
  },
  {
    title: "Seamless configuration",
    text: "Correct pitch, size, and processing for the venue — configured before load-in, not improvised on the day.",
  },
  {
    title: "On-site technical expertise",
    text: "Technicians who stay through show call, not drop-and-go delivery.",
  },
  {
    title: "Live content switching",
    text: "Camera IMAG, playback, and graphics switching handled under one work order.",
  },
] as const;

export const BEYOND_SCREENS = [
  {
    title: "Truss & rigging",
    text: "Engineered truss for hanging LED walls, lighting, and speaker arrays — ground-supported or fly-rigged, load-checked for your venue.",
    image: "/portfolio/truss-led-rigging.jpg",
  },
  {
    title: "MDF fabrication",
    text: "Custom MDF stage decks, set pieces, and branded structures — including bespoke exhibition booth builds.",
    image: "/portfolio/mdf-set-pieces.jpg",
  },
  {
    title: "Full-stack delivery",
    text: "Screens, structure, and switching from one crew under one work order — reducing coordination overhead on site.",
    image: "/portfolio/immersive-led-starfield.jpg",
  },
] as const;

export const WHITE_LABEL = {
  title: "Sub-rental peace of mind & white-label execution",
  lead: "Your agency stays the face of the job. We stay the technical engine behind it.",
  pledges: [
    {
      num: "01",
      title: "Unbranded crews",
      text: "Crews act as a professional extension of your agency — unbranded on site when you need it.",
    },
    {
      num: "02",
      title: "Protected clients",
      text: "Client relationships stay protected: we do not pitch your end-clients directly.",
    },
    {
      num: "03",
      title: "Confidential workflow",
      text: "Confidential briefing-to-delivery workflow built for agency representation.",
    },
  ],
} as const;

export const EVENT_FORMATS = [
  {
    title: "Corporate & summits",
    text: "Broadcast-grade reliability, discreet white-label crews, and live switching for keynotes and panels.",
    image: "/portfolio/craft-addis-festival.jpg",
  },
  {
    title: "Concerts & cultural",
    text: "High-refresh visual walls, rigged truss for scale, and fast load-in/out on tight show schedules.",
    image: "/portfolio/twilight-outdoor-concert.jpg",
  },
  {
    title: "Exhibitions & launches",
    text: "Custom MDF booth builds and screen integration designed around product-reveal moments.",
    image: "/portfolio/addis-tourism-booth.jpg",
  },
] as const;

export const PRICING_TIERS = [
  {
    tier: "01",
    label: "Loyalty",
    title: "Preferred B2B loyalty rates",
    text: "Discounted agency rates below standard retail — locked for partners who book with us regularly.",
  },
  {
    tier: "02",
    label: "Volume",
    title: "Volume & tiered discounts",
    text: "Rates that improve with booking volume, including custom pricing for multi-day summits.",
  },
  {
    tier: "03",
    label: "Protection",
    title: "Financial budget protection",
    text: "Guaranteed locked-in rates for the duration of a collaboration, so your client quotes stay stable.",
  },
] as const;

export const WORKFLOW = [
  { step: "01", title: "Project briefing", text: "Your agency shares venue, date, and creative intent." },
  { step: "02", title: "Technical configuration", text: "We draft screen size, pitch, rigging, and fabrication needs." },
  { step: "03", title: "Formal B2B quote", text: "One consolidated quote under your preferred rate tier." },
  { step: "04", title: "Signed work order", text: "Scope locked, crew assigned, logistics confirmed." },
  { step: "05", title: "On-site delivery", text: "Rig, test, run, and tear down — your brand front and center." },
] as const;

export const WHY_PARTNER = [
  {
    num: "01",
    title: "Single point of accountability",
    text: "Screens, rigging, and fabrication from one crew with one contract and one invoice.",
  },
  {
    num: "02",
    title: "Protected margins",
    text: "Locked B2B rates so your agency can price confidently without vendor stack surprises.",
  },
  {
    num: "03",
    title: "Brand-safe execution",
    text: "Unbranded, professional crews that represent your agency on site.",
  },
  {
    num: "04",
    title: "Format-agnostic",
    text: "The same framework for corporate, concert, and exhibition work.",
  },
] as const;

export const BUILT_WITH = [
  {
    mark: "CA",
    name: "CRAFT Addis",
    blurb: "Festival screens & live production",
  },
  {
    mark: "AT",
    name: "Addis Ababa Tourism",
    blurb: "City banners, booths & activations",
  },
  {
    mark: "SR",
    name: "She Runs Addis",
    blurb: "Brand activation builds",
  },
  {
    mark: "EA",
    name: "Event & Production Agencies",
    blurb: "White-label LED & fabrication",
  },
] as const;
