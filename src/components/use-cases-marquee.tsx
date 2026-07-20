import { useEffect, useState } from "react";
import {
  Church,
  Heart,
  Mic2,
  Music2,
  Store,
  Trophy,
  type LucideIcon,
} from "lucide-react";

import { USE_CASES, type UseCase } from "@/data/services";
import { cn } from "@/lib/utils";

const ICONS: Record<UseCase["icon"], LucideIcon> = {
  music: Music2,
  heart: Heart,
  mic: Mic2,
  church: Church,
  trophy: Trophy,
  store: Store,
};

function UseCaseItem({ item }: { item: UseCase }) {
  const Icon = ICONS[item.icon];

  return (
    <article className="flex w-[15rem] shrink-0 flex-col sm:w-[16.5rem]">
      <Icon className="size-7 text-yellow" aria-hidden />
      <h3 className="mt-4 font-heading text-base font-bold tracking-tight">
        {item.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {item.blurb}
      </p>
    </article>
  );
}

/**
 * Infinite auto-sliding marquee of use cases — no card boxes,
 * just icon + title + blurb drifting across.
 */
export function UseCasesMarquee() {
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const loop = [...USE_CASES, ...USE_CASES];

  return (
    <div
      className="use-cases-marquee relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      <div
        className={cn(
          "use-cases-marquee__track flex w-max gap-12 py-2 sm:gap-16",
          !reduceMotion && "use-cases-marquee__track--animate",
          paused && "use-cases-marquee__track--paused",
        )}
        role="list"
        aria-label="Where our screens show up"
      >
        {loop.map((item, i) => (
          <div key={`${item.title}-${i}`} role="listitem">
            <UseCaseItem item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
