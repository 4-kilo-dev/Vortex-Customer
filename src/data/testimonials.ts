export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const TESTIMONIALS: Array<Testimonial> = [
  {
    quote:
      "The screen was rigged, tested, and running visuals two hours before doors. Their technician sat at the desk all night — we never thought about it once.",
    name: "Selam T.",
    role: "Concert promoter",
  },
  {
    quote:
      "They recommended a smaller pitch than the competitor quoted and it looked twice as sharp. Honest sizing advice saved us money.",
    name: "Michael G.",
    role: "Events lead, tech conference",
  },
  {
    quote:
      "Our sanctuary screens have run every service for a year without a single failure. Installation was clean and the training made our volunteers self-sufficient.",
    name: "Pastor Dawit",
    role: "Grace Cathedral",
  },
  {
    quote:
      "The billboard went from bare wall to live advertising in ten days. It has paid for itself faster than any signage we've ever bought.",
    name: "Lidya A.",
    role: "Retail brand owner",
  },
];
