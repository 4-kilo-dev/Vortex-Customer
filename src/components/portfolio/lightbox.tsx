import { useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import { portfolioImageUrl, type PortfolioItem } from "@/data/portfolio";

export function Lightbox({
  items,
  index,
  onClose,
  onNavigate,
}: {
  items: Array<PortfolioItem>;
  /** Index into `items`, or null when closed. */
  index: number | null;
  onClose: () => void;
  onNavigate: (nextIndex: number) => void;
}) {
  const item = index === null ? null : items[index];

  useEffect(() => {
    if (index === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") onNavigate((index + 1) % items.length);
      if (e.key === "ArrowLeft")
        onNavigate((index - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [index, items.length, onNavigate]);

  return (
    <Dialog.Root open={item !== null} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-charcoal-deep/90 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in-0" />
        <Dialog.Content
          className="fixed left-1/2 top-1/2 z-50 w-[calc(100vw-2rem)] max-w-4xl -translate-x-1/2 -translate-y-1/2 focus-visible:outline-none"
          aria-describedby={undefined}
        >
          {item && (
            <figure>
              <Dialog.Title className="sr-only">{item.title}</Dialog.Title>
              <img
                src={portfolioImageUrl(item, 1200)}
                alt={`${item.title} — ${item.caption}`}
                className="max-h-[75vh] w-full rounded-lg object-contain"
              />
              <figcaption className="mt-4 flex items-baseline justify-between gap-4">
                <div>
                  <p className="font-heading font-bold">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.caption}</p>
                </div>
                <span className="shrink-0 rounded-full border border-border px-3 py-1 text-xs font-semibold text-yellow">
                  {item.category}
                </span>
              </figcaption>
            </figure>
          )}

          <button
            type="button"
            aria-label="Previous item"
            onClick={() =>
              index !== null &&
              onNavigate((index - 1 + items.length) % items.length)
            }
            className="absolute -left-2 top-1/2 -translate-y-1/2 rounded-full bg-charcoal-deep/80 p-2 text-paper transition-colors hover:text-yellow sm:-left-14"
          >
            <ChevronLeft className="size-6" />
          </button>
          <button
            type="button"
            aria-label="Next item"
            onClick={() => index !== null && onNavigate((index + 1) % items.length)}
            className="absolute -right-2 top-1/2 -translate-y-1/2 rounded-full bg-charcoal-deep/80 p-2 text-paper transition-colors hover:text-yellow sm:-right-14"
          >
            <ChevronRight className="size-6" />
          </button>
          <Dialog.Close asChild>
            <button
              type="button"
              aria-label="Close lightbox"
              className="absolute -top-12 right-0 rounded-full p-2 text-paper transition-colors hover:text-yellow"
            >
              <X className="size-6" />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
