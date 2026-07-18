import { cn } from "@/lib/utils";

const RINGS = [
  { r: 15, dashes: "14 8 22 10 16 30", rotate: 10 },
  { r: 21, dashes: "18 7 12 9 24 8 14 8", rotate: -24 },
  { r: 27, dashes: "22 8 16 10 20 7 12 5", rotate: 42 },
  { r: 33, dashes: "16 9 26 8 14 10 18 -1", rotate: -70 },
  { r: 39, dashes: "24 7 14 9 20 8 16 16", rotate: 96 },
  { r: 45, dashes: "18 10 22 8 12 9 24 -3", rotate: -132 },
];

/**
 * Inline SVG interpretation of the Vortex mark: concentric dashed arcs with a
 * yellow sector at the top-right, mirroring the uploaded logo. Scales crisply
 * at any size and inherits currentColor for the base strokes.
 */
export function VortexMark({
  className,
  withGlow = false,
}: {
  className?: string;
  withGlow?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={cn("text-foreground", className)}
      aria-hidden="true"
      role="presentation"
    >
      <defs>
        <clipPath id="vortex-yellow-sector">
          <polygon points="50,50 50,-20 130,-20 130,42" />
        </clipPath>
      </defs>
      {withGlow && (
        <circle cx="50" cy="50" r="46" className="fill-yellow/5" />
      )}
      <g fill="none" strokeWidth="3.4" strokeLinecap="butt">
        {RINGS.map((ring) => (
          <circle
            key={ring.r}
            cx="50"
            cy="50"
            r={ring.r}
            stroke="currentColor"
            pathLength={100}
            strokeDasharray={ring.dashes}
            transform={`rotate(${ring.rotate} 50 50)`}
          />
        ))}
        <g clipPath="url(#vortex-yellow-sector)">
          {RINGS.map((ring) => (
            <circle
              key={`y-${ring.r}`}
              cx="50"
              cy="50"
              r={ring.r}
              className="stroke-yellow"
              pathLength={100}
              strokeDasharray={ring.dashes}
              transform={`rotate(${ring.rotate} 50 50)`}
            />
          ))}
        </g>
      </g>
    </svg>
  );
}

/** Full logo lockup: mark + wordmark. */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <VortexMark className="size-9" />
      <span className="flex flex-col leading-none">
        <span className="font-heading text-lg font-extrabold tracking-tight">
          VORTE<span className="text-yellow">X</span>
        </span>
        <span className="text-[0.6rem] font-semibold uppercase tracking-[0.42em] text-muted-foreground">
          Visual
        </span>
      </span>
    </span>
  );
}
