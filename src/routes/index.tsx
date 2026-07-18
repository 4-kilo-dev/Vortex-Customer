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
import { Motif } from "@/components/brand/motif";
import { Section, SectionHeading } from "@/components/section";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { TestimonialsCarousel } from "@/components/testimonials-carousel";
import { Button } from "@/components/ui/button";
import { SERVICES, USE_CASES } from "@/data/services";
import {
  PORTFOLIO_ITEMS,
  portfolioImageUrl,
  portfolioSrcSet,
} from "@/data/portfolio";
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
  return (
    <>
      {/* Hero — the one anchored animation on the site */}
      <section className="relative overflow-hidden">
        <Motif className="text-paper" />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 pb-20 pt-16 text-center sm:px-6 md:pb-28 md:pt-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: -30 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <VortexMark withGlow className="size-36 md:size-48" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
            className="mt-8 max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl"
          >
            Big screens. <span className="text-yellow">Bigger</span> moments.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="mt-6 max-w-xl text-lg text-muted-foreground"
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

      {/* Services */}
      <Section className="border-t border-border/60">
        <SectionHeading
          eyebrow="What we do"
          title="Rent it for a night, or own it for years"
          lead="Two services, one standard: the screen works, the picture is sharp, and someone qualified is responsible for it."
        />
        <RevealGroup className="grid gap-6 md:grid-cols-2">
          {SERVICES.map((service) => (
            <RevealItem key={service.slug}>
              <Link
                to="/services"
                className="group flex h-full flex-col rounded-lg border border-border bg-card p-8 transition-colors hover:border-yellow"
              >
                <service.icon className="size-10 text-yellow" aria-hidden />
                <h3 className="mt-5 text-2xl font-bold">{service.title}</h3>
                <p className="mt-3 flex-1 text-muted-foreground">
                  {service.summary}
                </p>
                <span className="mt-6 inline-flex items-center gap-1 font-heading text-sm font-bold uppercase tracking-wide text-yellow">
                  Learn more <ArrowRight className="size-4" aria-hidden />
                </span>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-12">
          <p className="mb-5 text-center font-heading text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">
            Where our screens show up
          </p>
          <ul className="flex flex-wrap justify-center gap-3">
            {USE_CASES.map((useCase) => (
              <li
                key={useCase}
                className="rounded-full border border-border px-4 py-2 text-sm font-semibold text-muted-foreground"
              >
                {useCase}
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      {/* Featured work */}
      <Section paper withMotif>
        <SectionHeading
          eyebrow="Recent deployments"
          title="Screens we've put up"
          lead="Festival stages, wedding backdrops, digital billboards, and permanent video walls."
        />
        <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_WORK.map((item) => (
            <RevealItem key={item.id}>
              <Link
                to="/portfolio"
                className="group relative block aspect-[4/3] overflow-hidden rounded-lg"
              >
                <img
                  src={portfolioImageUrl(item, 768)}
                  srcSet={portfolioSrcSet(item)}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  alt={`${item.title} — ${item.caption}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-charcoal-deep/85 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="font-heading font-bold text-paper">
                    {item.title}
                  </span>
                  <span className="text-xs text-neutral-20">
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

      {/* Testimonials */}
      <Section>
        <SectionHeading eyebrow="Client words" title="On the record" />
        <Reveal>
          <TestimonialsCarousel />
        </Reveal>
      </Section>

      {/* Brand values strip */}
      <Section className="border-y border-border/60 bg-charcoal-deep" withMotif>
        <RevealGroup className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((value) => (
            <RevealItem key={value.title} className="text-center">
              <value.icon className="mx-auto size-7 text-yellow" aria-hidden />
              <h3 className="mt-3 font-heading text-base font-bold">
                {value.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{value.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      {/* CTA band */}
      <Section>
        <Reveal className="rounded-xl border border-yellow/30 bg-card p-10 text-center md:p-16">
          <ShieldCheck className="mx-auto size-8 text-yellow" aria-hidden />
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-extrabold md:text-4xl">
            Have an event date or a wall that needs a screen?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Tell us the venue and the date, and we&rsquo;ll come back with a
            screen size, a plan, and a quote — usually within one business day.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link to="/contact">
              Request a quote <ArrowRight aria-hidden />
            </Link>
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
