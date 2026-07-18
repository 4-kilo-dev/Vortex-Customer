import { cn } from "@/lib/utils";

/**
 * Subtle geometric watermark used behind sections and the footer.
 * Renders a translucent grid of dashed arcs; purely decorative.
 */
export function Motif({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full opacity-[0.04]",
        className,
      )}
    >
      <defs>
        <pattern
          id="motif-arcs"
          width="140"
          height="140"
          patternUnits="userSpaceOnUse"
        >
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="10 6 18 8"
          >
            <circle cx="70" cy="70" r="24" />
            <circle cx="70" cy="70" r="40" transform="rotate(45 70 70)" />
            <circle cx="70" cy="70" r="56" transform="rotate(-60 70 70)" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#motif-arcs)" />
    </svg>
  );
}
