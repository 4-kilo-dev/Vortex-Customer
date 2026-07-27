import { Link, createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Handshake,
  MonitorCheck,
  ShieldCheck,
  Timer,
  Wrench,
} from "lucide-react";

import { VortexMark } from "@/components/brand/vortex-mark";
import { HeroLedBackdrop } from "@/components/hero-led-backdrop";
import { Section, SectionHeading } from "@/components/section";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { TestimonialsCarousel } from "@/components/testimonials-carousel";
import { WhyVortexInfographic } from "@/components/why-vortex-infographic";
import { Button } from "@/components/ui/button";
import { UseCasesMarquee } from "@/components/use-cases-marquee";
import { SERVICES } from "@/data/services";
import {
  PORTFOLIO_ITEMS,
  portfolioImageUrl,
  portfolioSrcSet,
} from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { pageMeta } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () =>
    pageMeta({
      title: "Vortex Visual — LED Screen Rental & Sales",
      description:
        "Event-grade LED screen rental with on-site technicians, and permanent LED display sales with installation, calibration, and warranty.",
      path: "/",
    }),
  component: Home,
});

const FEATURED_WORK = PORTFOLIO_ITEMS.slice(0, 6);

const VALUES = [
  {
    icon: Timer,
    title: "Deadline-proof",
    text: "Screens rigged, tested, and live hours before doors — with backup panels and processing on site.",
  },
  {
    icon: MonitorCheck,
    title: "Picture-perfect",
    text: "Correct pixel pitch for the viewing distance, calibrated color, and no dead pixels on show night.",
  },
  {
    icon: Handshake,
    title: "Straight dealing",
    text: "Transparent quotes, honest sizing advice, and one point of contact from booking to teardown.",
  },
  {
    icon: Wrench,
    title: "Service after the sale",
    text: "Installed screens come with warranty, operator training, and a maintenance plan that answers the phone.",
  },
] as const;

function Home() {
  const [rental, sales] = SERVICES;
  const [hero, ...rest] = FEATURED_WORK;

  return (
    <>
      <section className="relative min-h-[85vh] overflow-hidden md:min-h-[90vh]">
        <HeroLedBackdrop />
        <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-6xl flex-col items-center justify-center px-4 pb-24 pt-20 text-center sm:px-6 md:min-h-[90vh] md:pb-32 md:pt-28">
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: -30 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <VortexMark withGlow className="size-28 md:size-40" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
            className="hero-text mt-8 max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl lg:text-7xl"
          >
            Big screens. <span className="text-yellow">Bigger</span> moments.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="hero-sub mt-6 max-w-xl text-lg"
          >
            LED screen rental for events of every size, and permanent LED
            displays supplied and installed — rigged by professionals, run by
            technicians, backed by warranty.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: "easeOut" }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <Button asChild size="lg">
              <Link to="/contact">
                Get a quote <ArrowRight aria-hidden />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/portfolio">See our screens</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services — overlapping staggered tiles */}
      <Section className="border-t border-border/60">
        <SectionHeading
          eyebrow="What we do"
          title="Rent it for a night, or own it for years"
          lead="Two services, one standard: the screen works, the picture is sharp, and someone qualified is responsible for it."
        />
        <RevealGroup className="relative mx-auto grid max-w-5xl gap-4 md:grid-cols-12 md:gap-0">
          <RevealItem className="md:col-span-7 md:row-start-1">
            <Link
              to="/services"
              className="pro-panel pro-panel--interactive group relative z-10 flex h-full min-h-64 flex-col p-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background md:mr-6 md:p-10"
            >
              <span className="font-heading text-xs font-bold uppercase tracking-[0.3em] text-yellow">
                01 — Rental
              </span>
              <rental.icon className="mt-5 size-10 text-yellow" aria-hidden />
              <h3 className="mt-4 text-2xl font-bold md:text-3xl">
                {rental.title}
              </h3>
              <p className="mt-3 max-w-md flex-1 text-muted-foreground">
                {rental.summary}
              </p>
              <span className="mt-6 inline-flex items-center gap-1 font-heading text-sm font-bold uppercase tracking-wide text-yellow">
                Learn more <ArrowRight className="size-4" aria-hidden />
              </span>
            </Link>
          </RevealItem>
          <RevealItem className="md:col-span-7 md:col-start-6 md:row-start-1 md:mt-28">
            <Link
              to="/services"
              className="pro-panel pro-panel--accent pro-panel--interactive group relative z-20 flex h-full min-h-64 flex-col p-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background md:ml-6 md:p-10"
            >
              <span className="font-heading text-xs font-bold uppercase tracking-[0.3em] text-yellow">
                02 — Sales
              </span>
              <sales.icon className="mt-5 size-10 text-yellow" aria-hidden />
              <h3 className="mt-4 text-2xl font-bold md:text-3xl">
                {sales.title}
              </h3>
              <p className="mt-3 max-w-md flex-1 text-muted-foreground">
                {sales.summary}
              </p>
              <span className="mt-6 inline-flex items-center gap-1 font-heading text-sm font-bold uppercase tracking-wide text-yellow">
                Learn more <ArrowRight className="size-4" aria-hidden />
              </span>
            </Link>
          </RevealItem>
        </RevealGroup>

        <Reveal className="mt-16 md:mt-24">
          <p className="mb-8 text-center font-heading text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">
            Where our screens show up
          </p>
          <UseCasesMarquee />
        </Reveal>
      </Section>

      {/* Portfolio — asymmetric bento wall */}
      <Section paper withMotif>
        <SectionHeading
          eyebrow="Recent deployments"
          title="Screens we've put up"
          lead="Festival stages, wedding backdrops, digital billboards, and permanent video walls."
        />
        <RevealGroup className="grid auto-rows-[11rem] grid-cols-2 gap-3 sm:auto-rows-[13rem] sm:gap-4 md:grid-cols-4 md:auto-rows-[14rem]">
          <RevealItem className="col-span-2 row-span-2">
            <Link
              to="/portfolio"
              className="group relative block h-full overflow-hidden rounded-lg"
            >
              <img
                src={portfolioImageUrl(hero, 1200)}
                srcSet={portfolioSrcSet(hero)}
                sizes="(min-width: 768px) 50vw, 100vw"
                alt={`${hero.title} — ${hero.caption}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-charcoal-deep/90 via-charcoal-deep/20 to-transparent p-5">
                <span className="font-heading text-lg font-bold text-paper md:text-xl">
                  {hero.title}
                </span>
                <span className="text-xs text-neutral-20">{hero.category}</span>
              </span>
            </Link>
          </RevealItem>
          {rest.map((item, i) => (
            <RevealItem
              key={item.id}
              className={cn(
                i === 0 && "col-span-2 md:col-span-2",
                i === 3 && "col-span-2 md:col-span-1",
                i === 4 && "col-span-2 md:col-span-1",
              )}
            >
              <Link
                to="/portfolio"
                className="group relative block h-full overflow-hidden rounded-lg"
              >
                <img
                  src={portfolioImageUrl(item, 768)}
                  srcSet={portfolioSrcSet(item)}
                  sizes="(min-width: 768px) 25vw, 50vw"
                  alt={`${item.title} — ${item.caption}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-charcoal-deep/85 to-transparent p-3 opacity-90 transition-opacity group-hover:opacity-100 sm:p-4">
                  <span className="font-heading text-sm font-bold text-paper sm:text-base">
                    {item.title}
                  </span>
                  <span className="text-[0.65rem] text-neutral-20 sm:text-xs">
                    {item.category}
                  </span>
                </span>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
        <Reveal className="mt-10 text-center">
          <Button asChild>
            <Link to="/portfolio">
              Full portfolio <ArrowRight aria-hidden />
            </Link>
          </Button>
        </Reveal>
      </Section>

      <Section>
        <SectionHeading eyebrow="Client words" title="On the record" />
        <Reveal>
          <TestimonialsCarousel />
        </Reveal>
      </Section>

      <Section withMotif>
        <SectionHeading
          eyebrow="Why Vortex"
          title="What we hold the line on"
        />
        <Reveal>
          <WhyVortexInfographic items={VALUES} />
        </Reveal>
      </Section>

      <Section>
        <Reveal className="pro-panel pro-panel--accent p-10 text-center md:p-16">
          <ShieldCheck className="relative mx-auto size-8 text-yellow" aria-hidden />
          <h2 className="relative mx-auto mt-4 max-w-2xl text-3xl font-extrabold md:text-4xl">
            Have an event date or a wall that needs a screen?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-muted-foreground">
            Tell us the venue and the date, and we&rsquo;ll come back with a
            screen size, a plan, and a quote — usually within one business day.
          </p>
          <Button asChild size="lg" className="relative mt-8">
            <Link to="/contact">
              Request a quote <ArrowRight aria-hidden />
            </Link>
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
