import { useMemo, useState } from "react";
import { Layers } from "lucide-react";

import {
  PORTFOLIO_CATEGORIES,
  portfolioImageUrl,
  portfolioSrcSet,
  type PortfolioCategory,
  type PortfolioItem,
} from "@/data/portfolio";
import { Lightbox } from "@/components/portfolio/lightbox";
import { RevealGroup, RevealItem } from "@/components/reveal";
import { cn } from "@/lib/utils";

type Filter = PortfolioCategory | "All";

export function PortfolioGrid({ items }: { items: Array<PortfolioItem> }) {
  const [filter, setFilter] = useState<Filter>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const visible = useMemo(
    () =>
      filter === "All" ? items : items.filter((i) => i.category === filter),
    [items, filter],
  );

  return (
    <div>
      <div
        role="toolbar"
        aria-label="Filter portfolio by category"
        className="mb-10 flex flex-wrap justify-center gap-2"
      >
        {(["All", ...PORTFOLIO_CATEGORIES] as Array<Filter>).map((cat) => (
          <button
            key={cat}
            type="button"
            aria-pressed={filter === cat}
            onClick={() => {
              setFilter(cat);
              setLightboxIndex(null);
            }}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors",
              filter === cat
                ? "border-yellow bg-yellow text-charcoal"
                : "border-border text-muted-foreground hover:border-yellow hover:text-yellow",
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <RevealGroup
        key={filter}
        className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5"
      >
        {visible.map((item, i) => (
          <RevealItem key={item.id} className="break-inside-avoid">
            <button
              type="button"
              onClick={() => setLightboxIndex(i)}
              className="group relative block w-full overflow-hidden rounded-lg text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <img
                src={portfolioImageUrl(item, 768)}
                srcSet={portfolioSrcSet(item)}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                alt={`${item.title} — ${item.caption}`}
                loading="lazy"
                className="w-full transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-charcoal-deep/90 via-charcoal-deep/20 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                <span className="font-heading font-bold text-paper">
                  {item.title}
                </span>
                <span className="text-sm text-neutral-20">{item.caption}</span>
                {item.beforeAfter && (
                  <span className="mt-2 inline-flex w-fit items-center gap-1 rounded-full bg-yellow px-2 py-0.5 text-xs font-bold text-charcoal">
                    <Layers className="size-3" aria-hidden /> Before / After
                  </span>
                )}
              </span>
            </button>
          </RevealItem>
        ))}
      </RevealGroup>

      <Lightbox
        items={visible}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </div>
  );
}
