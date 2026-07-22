import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

export type WhyVortexItem = {
  icon: LucideIcon;
  title: string;
  text: string;
};

type WhyVortexInfographicProps = {
  items: readonly WhyVortexItem[];
};

function InfographicStep({
  item,
  index,
  above,
}: {
  item: WhyVortexItem;
  index: number;
  above: boolean;
}) {
  const Icon = item.icon;
  const num = String(index + 1);

  const node = (
    <div className="why-infographic__node">
      <Icon className="size-7 text-charcoal" strokeWidth={2.25} aria-hidden />
    </div>
  );

  const copy = (
    <div className="why-infographic__copy">
      <h3 className="why-infographic__title">{item.title}</h3>
      <p className="why-infographic__text">{item.text}</p>
    </div>
  );

  const number = <span className="why-infographic__num">{num}</span>;

  return (
    <article
      className={cn(
        "why-infographic__step",
        above ? "why-infographic__step--above" : "why-infographic__step--below",
      )}
    >
      {node}
      {above ? (
        <div className="why-infographic__above-copy">
          {number}
          {copy}
        </div>
      ) : (
        <div className="why-infographic__below-copy">
          {number}
          {copy}
        </div>
      )}
    </article>
  );
}

/** Horizontal wavy infographic — sits on the page surface, no card wrapper. */
export function WhyVortexInfographic({ items }: WhyVortexInfographicProps) {
  return (
    <div className="why-infographic">
      <div className="why-infographic__scroll">
        <div className="why-infographic__canvas">
          <svg
            className="why-infographic__wave"
            viewBox="0 0 1000 120"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              d="M 0 60
                 C 50 60, 70 88, 125 88
                 S 230 32, 375 32
                 S 520 88, 625 88
                 S 730 32, 875 32
                 S 930 60, 1000 60"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="5 7"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <div
            className="why-infographic__track"
            style={{ gridTemplateColumns: `repeat(${items.length}, 1fr)` }}
          >
            {items.map((item, i) => (
              <InfographicStep
                key={item.title}
                item={item}
                index={i}
                above={i % 2 === 1}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
