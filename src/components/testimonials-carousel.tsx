import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

import { TESTIMONIALS } from "@/data/testimonials";
import { cn } from "@/lib/utils";

export function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % TESTIMONIALS.length),
      6000,
    );
    return () => clearInterval(id);
  }, [paused]);

  const current = TESTIMONIALS[index];

  return (
    <div
      className="relative mx-auto max-w-3xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <Quote className="mx-auto mb-6 size-8 text-yellow" aria-hidden />
      <div className="relative min-h-44 md:min-h-36">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={index}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="text-center"
          >
            <p className="text-lg leading-relaxed text-foreground md:text-xl">
              &ldquo;{current.quote}&rdquo;
            </p>
            <footer className="mt-6">
              <p className="font-heading font-bold">{current.name}</p>
              <p className="text-sm text-muted-foreground">{current.role}</p>
            </footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          aria-label="Previous testimonial"
          onClick={() =>
            setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
          }
          className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:border-yellow hover:text-yellow"
        >
          <ChevronLeft className="size-4" />
        </button>
        <div className="flex gap-2" role="tablist" aria-label="Testimonials">
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.name}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className={cn(
                "h-1.5 rounded-full transition-all",
                i === index ? "w-6 bg-yellow" : "w-2.5 bg-border",
              )}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Next testimonial"
          onClick={() => setIndex((i) => (i + 1) % TESTIMONIALS.length)}
          className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:border-yellow hover:text-yellow"
        >
          <ChevronRight className="size-4" />
        </button>
      </div>
    </div>
  );
}
