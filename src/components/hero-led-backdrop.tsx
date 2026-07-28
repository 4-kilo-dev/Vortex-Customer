import { useEffect, useRef, useState } from "react";

/**
 * Full-bleed LED / event-screen hero backdrop.
 *
 * PLACEHOLDER photos (Pexels — concerts, stages, LED walls).
 * Drop real Vortex project stills into /public/hero/ and point these
 * paths at them when you have media, e.g. "/hero/stage-wall.jpg".
 */
const HERO_IMAGES = [
  "/hero/addis-nightlife.png",
  "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1920",
  "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1920",
  "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=1920",
];

const SLIDE_MS = 6000;

export function HeroLedBackdrop() {
  const [active, setActive] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    timer.current = setInterval(
      () => setActive((i) => (i + 1) % HERO_IMAGES.length),
      SLIDE_MS,
    );
    return () => clearInterval(timer.current);
  }, []);

  return (
    <div className="hero-bg" aria-hidden>
      <div className="hero-bg__slides">
        {HERO_IMAGES.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : "auto"}
            className={`hero-bg__img ${i === active ? "hero-bg__img--on" : ""}`}
          />
        ))}
      </div>
      <div className="hero-bg__overlay" />
      <div className="hero-bg__fade" />
    </div>
  );
}
