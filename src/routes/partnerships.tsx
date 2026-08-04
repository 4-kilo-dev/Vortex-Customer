import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Section, SectionHeading } from "@/components/section";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import {
  BEYOND_SCREENS,
  BUILT_WITH,
  EVENT_FORMATS,
  PARTNERSHIP_HERO,
  PARTNERSHIP_OBJECTIVE,
  PRICING_TIERS,
  TECHNICAL_EDGE,
  WHITE_LABEL,
  WHY_PARTNER,
} from "@/data/partnerships";
import { pageMeta } from "@/lib/site";

export const Route = createFileRoute("/partnerships")({
  head: () =>
    pageMeta({
      title: "B2B Partnerships — Vortex Visual",
      description:
        "Cooperative partnership framework for event and production agencies: white-label LED, rigging, fabrication, and preferred B2B rates in Addis Ababa.",
      path: "/partnerships",
    }),
  component: PartnershipsPage,
});

function PartnershipsPage() {
  return (
    <>
      <Section withMotif>
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-heading text-xs font-bold uppercase tracking-[0.3em] text-yellow">
            {PARTNERSHIP_HERO.eyebrow}
          </p>
          <h1 className="mt-4 text-3xl font-extrabold md:text-5xl">
            {PARTNERSHIP_HERO.title}
          </h1>
          <p className="mt-5 text-muted-foreground">{PARTNERSHIP_HERO.lead}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {PARTNERSHIP_HERO.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-border px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Button asChild size="lg">
              <Link to="/contact">
                Start a partnership <ArrowRight aria-hidden />
              </Link>
            </Button>
          </div>
        </Reveal>
      </Section>

      <Section paper>
        <SectionHeading
          eyebrow="Objective"
          title={PARTNERSHIP_OBJECTIVE.title}
          lead={PARTNERSHIP_OBJECTIVE.text}
          align="left"
        />
        <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TECHNICAL_EDGE.map((item) => (
            <RevealItem key={item.title}>
              <div className="pro-panel pro-panel--interactive flex h-full flex-col p-6">
                <h3 className="font-heading text-base font-bold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Beyond screens"
          title="Structure & fabrication capability"
          lead="LED is the core — truss, MDF builds, and full-stack delivery sit under the same work order."
        />
        <RevealGroup className="grid gap-6 md:grid-cols-3">
          {BEYOND_SCREENS.map((item) => (
            <RevealItem key={item.title}>
              <article className="pro-panel pro-panel--interactive overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="aspect-16/10 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="font-heading text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <Section className="wl-band" withMotif>
        <div className="wl-layout">
          <Reveal className="wl-intro">
            <p className="font-heading text-xs font-bold uppercase tracking-[0.3em] text-yellow">
              White-label
            </p>
            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
              {WHITE_LABEL.title}
            </h2>
            <p className="wl-lead mt-5">{WHITE_LABEL.lead}</p>

            <div className="wl-roles" aria-hidden>
              <div className="wl-role wl-role--agency">
                <span className="wl-role__label">Your agency</span>
                <span className="wl-role__sub">Face of the job</span>
              </div>
              <div className="wl-role__divider">
                <span />
              </div>
              <div className="wl-role wl-role--vortex">
                <span className="wl-role__label">Vortex</span>
                <span className="wl-role__sub">Technical engine</span>
              </div>
            </div>
          </Reveal>

          <RevealGroup className="wl-pledges">
            {WHITE_LABEL.pledges.map((pledge, i) => (
              <RevealItem
                key={pledge.num}
                className={`wl-pledge wl-pledge--${i + 1}`}
              >
                <span className="wl-pledge__num">{pledge.num}</span>
                <div className="wl-pledge__body">
                  <h3 className="wl-pledge__title">{pledge.title}</h3>
                  <p className="wl-pledge__text">{pledge.text}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Formats"
          title="Built for every event format"
          lead="Corporate summits, concerts, and exhibition launches — one crew, one framework."
        />
        <RevealGroup className="grid gap-6 md:grid-cols-3">
          {EVENT_FORMATS.map((item) => (
            <RevealItem key={item.title}>
              <article className="pro-panel pro-panel--interactive overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="aspect-16/10 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="font-heading text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <Section paper className="pricing-band">
        <div className="pricing-layout">
          <Reveal className="pricing-intro">
            <p className="font-heading text-xs font-bold uppercase tracking-[0.3em] text-yellow">
              Commercial
            </p>
            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
              B2B tiered pricing
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Combining LED, truss, and MDF fabrication under one B2B rate sheet
              means one consolidated quote per event.
            </p>
            <p className="pricing-note mt-6">
              One rate sheet. One invoice. One crew.
            </p>
          </Reveal>

          <RevealGroup className="pricing-ladder" aria-label="B2B pricing tiers">
            {PRICING_TIERS.map((item, i) => (
              <RevealItem
                key={item.title}
                className={`pricing-rung pricing-rung--${i + 1}`}
              >
                <div className="pricing-rung__meta">
                  <span className="pricing-rung__tier">{item.tier}</span>
                  <span className="pricing-rung__label">{item.label}</span>
                </div>
                <div className="pricing-rung__copy">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      <Section className="why-band" withMotif>
        <SectionHeading
          eyebrow="Why partner"
          title="Why agencies choose Vortex"
          lead="Four reasons agencies keep the technical side under one roof."
        />
        <RevealGroup className="why-bento">
          {WHY_PARTNER.map((item) => (
            <RevealItem key={item.title} className="why-tile">
              <span className="why-tile__num" aria-hidden>
                {item.num}
              </span>
              <h3 className="why-tile__title">{item.title}</h3>
              <p className="why-tile__text">{item.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <Section paper className="built-band">
        <SectionHeading
          eyebrow="Partnerships"
          title="Who we've built with"
          lead="Agencies and brands we support with white-label LED, rigging, and fabrication."
        />
        <RevealGroup className="built-rail">
          {BUILT_WITH.map((partner) => (
            <RevealItem key={partner.name} className="built-plate">
              <span className="built-plate__mark" aria-hidden>
                {partner.mark}
              </span>
              <div className="built-plate__copy">
                <p className="built-plate__name">{partner.name}</p>
                <p className="built-plate__blurb">{partner.blurb}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <Section className="pt-0">
        <Reveal className="pro-panel pro-panel--accent p-10 text-center md:p-14">
          <h2 className="text-2xl font-extrabold md:text-3xl">
            Let&rsquo;s build the partnership
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Tell us about your agency calendar and we&rsquo;ll share the B2B
            rate sheet, walk a venue if needed, and lock preferred rates for
            the season.
          </p>
          <div className="mt-8 flex justify-center">
            <Button asChild size="lg">
              <Link to="/contact">
                Contact us <ArrowRight aria-hidden />
              </Link>
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
