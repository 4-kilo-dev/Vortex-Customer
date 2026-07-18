import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Motif } from "@/components/brand/motif";

/** Standard page section with optional geometric watermark. */
export function Section({
  children,
  className,
  withMotif = false,
  paper = false,
}: {
  children: ReactNode;
  className?: string;
  withMotif?: boolean;
  paper?: boolean;
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden py-16 md:py-24",
        paper && "section-paper",
        className,
      )}
    >
      {withMotif && <Motif className={paper ? "text-charcoal" : "text-paper"} />}
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "center",
  as: Heading = "h2",
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "center" | "left";
  /** Use "h1" for the page's primary heading (one per page). */
  as?: "h1" | "h2";
}) {
  return (
    <div
      className={cn(
        "mb-12 max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
      )}
    >
      {eyebrow && (
        <p className="mb-3 font-heading text-xs font-bold uppercase tracking-[0.3em] text-yellow">
          {eyebrow}
        </p>
      )}
      <Heading className="text-3xl font-extrabold md:text-4xl">{title}</Heading>
      {lead && <p className="mt-4 text-muted-foreground">{lead}</p>}
    </div>
  );
}
