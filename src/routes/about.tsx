import { Link, createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ClipboardList,
  Compass,
  Eye,
  Handshake,
  MonitorCheck,
  PlayCircle,
  Target,
  Timer,
  UserRound,
  Wrench,
} from "lucide-react";

import { VortexMark } from "@/components/brand/vortex-mark";
import { Section, SectionHeading } from "@/components/section";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { pageMeta } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/about")({
  head: () =>
    pageMeta({
      title: "About — Vortex Visual",
      description:
        "The story, mission, and process behind Vortex Visual — an LED screen rental and sales company built on reliability and straight dealing.",
      path: "/about",
    }),
  component: AboutPage,
});

const PROCESS = [
  {
    icon: Compass,
    step: "Assess",
    text: "We visit the venue or site, measure viewing distances, and check power, access, and mounting.",
  },
  {
    icon: ClipboardList,
    step: "Spec",
    text: "Screen size, pixel pitch, processing, and rigging plan — quoted transparently with no surprise line items.",
  },
  {
    icon: Wrench,
    step: "Rig / Install",
    text: "Certified rigging for events, structural installation for permanent screens. Tested well before go-live.",
  },
  {
    icon: PlayCircle,
    step: "Operate",
    text: "A technician runs rentals end to end; for installed screens we calibrate and train your operators.",
  },
  {
    icon: MonitorCheck,
    step: "Support",
    text: "Teardown without a trace for rentals; warranty and a responsive maintenance plan for sales.",
  },
] as const;

const VALUES = [
  {
    icon: Timer,
    title: "Reliability",
    text: "A screen that fails mid-show fails publicly. We rig early, test everything, and carry spare panels and processing to every event.",
  },
  {
    icon: MonitorCheck,
    title: "Quality",
    text: "The right pixel pitch for the viewing distance, calibrated color, and clean cabling — a screen should look engineered, not improvised.",
  },
  {
    icon: Handshake,
    title: "Trustworthiness",
    text: "Honest sizing advice, transparent quotes, and warranties we actually honor. We'd rather rent you a smaller screen than sell you a wrong one.",
  },
] as const;

function ProcessTree() {
  return (
    <div className="process-tree">
      <div aria-hidden className="process-tree__spine" />

      {PROCESS.map((phase, i) => {
        const isRight = i % 2 === 0;
        const step = String(i + 1).padStart(2, "0");

        return (
          <RevealItem key={phase.step} className="process-tree__row">
            <div className="process-tree__node-col">
              <span
                aria-hidden
                className={cn(
                  "process-tree__branch",
                  isRight
                    ? "process-tree__branch--right"
                    : "process-tree__branch--left",
                )}
              />
              <span className="process-tree__node" />
            </div>

            <div
              className={cn(
                "process-tree__card-col",
                isRight
                  ? "process-tree__card-col--right"
                  : "process-tree__card-col--left",
              )}
            >
              <div className="pro-panel pro-panel--interactive p-5 md:p-6">
                <div className="flex items-start gap-4">
                  <span className="process-tree__step-num">{step}</span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <phase.icon
                        className="size-5 shrink-0 text-yellow"
                        aria-hidden
                      />
                      <h3 className="font-heading text-base font-bold md:text-lg">
                        {phase.step}
                      </h3>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {phase.text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </RevealItem>
        );
      })}
    </div>
  );
}

/** PLACEHOLDER team roster — swap names, roles, and photos when provided. */
const TEAM = [
  { name: "Team Member", role: "Founder & Operations Lead" },
  { name: "Team Member", role: "Head Technician & Rigger" },
  { name: "Team Member", role: "Installation Engineer" },
  { name: "Team Member", role: "Sales & Client Lead" },
] as const;

function AboutPage() {
  return (
    <>
      <Section withMotif>
        <div className="grid items-center gap-10 md:grid-cols-[auto_1fr]">
          <Reveal className="mx-auto">
            <VortexMark withGlow className="size-40 md:size-52" />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-heading text-xs font-bold uppercase tracking-[0.3em] text-yellow">
              About the company
            </p>
            <h1 className="mt-3 text-3xl font-extrabold md:text-5xl">
              Built on shows that couldn&rsquo;t go wrong
            </h1>
            <p className="mt-5 max-w-xl text-muted-foreground">
              Vortex Visual started with a simple observation: at every big
              event, the screen is the single point of failure nobody has a
              backup for. So we built a company that treats LED screens like
              critical infrastructure — professional rigging, redundant
              hardware, and a technician who stays until the last song. Today
              we rent screens for concerts, weddings, and conferences, and
              install permanent displays for churches, businesses, and
              advertisers.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section paper>
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal className="pro-panel pro-panel--interactive flex h-full flex-col p-8">
            <Target className="size-7 text-yellow" aria-hidden />
            <h2 className="mt-4 text-xl font-bold">Mission</h2>
            <p className="mt-3 text-muted-foreground">
              To make every event and every space larger than life — with LED
              screens that are correctly specced, professionally rigged, and
              guaranteed to perform when the audience is watching.
            </p>
          </Reveal>
          <Reveal
            delay={0.1}
            className="pro-panel pro-panel--interactive flex h-full flex-col p-8"
          >
            <Eye className="size-7 text-yellow" aria-hidden />
            <h2 className="mt-4 text-xl font-bold">Vision</h2>
            <p className="mt-3 text-muted-foreground">
              To be the company organizers and owners call when the screen
              can&rsquo;t fail: the launch that can&rsquo;t slip, the ceremony
              that can&rsquo;t be repeated, the billboard that has to earn its
              keep every single day.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Values" title="What we hold ourselves to" />
        <RevealGroup className="grid gap-6 md:grid-cols-3">
          {VALUES.map((value) => (
            <RevealItem key={value.title}>
              <div className="pro-panel pro-panel--interactive flex h-full flex-col p-7">
                <value.icon className="size-7 text-yellow" aria-hidden />
                <h3 className="mt-4 text-lg font-bold">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {value.text}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <Section
        className="dark border-y border-border/60 bg-charcoal-deep text-foreground"
        withMotif
      >
        <SectionHeading
          title="Process"
          lead="Five stages, no surprises. You always know where your screen is."
        />
        <RevealGroup>
          <ProcessTree />
        </RevealGroup>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Team"
          title="The crew behind the screens"
          lead="Bios and portraits landing soon — placeholders below until the roster is final."
        />
        <RevealGroup className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {TEAM.map((member, i) => (
            <RevealItem key={`${member.role}-${i}`}>
              <div className="pro-panel pro-panel--interactive flex h-full flex-col items-center p-6 text-center">
                <span className="flex size-20 items-center justify-center rounded-lg bg-muted">
                  <UserRound
                    className="size-9 text-muted-foreground"
                    aria-hidden
                  />
                </span>
                <h3 className="mt-4 font-heading text-sm font-bold">
                  {member.name}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  {member.role}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <Section className="pt-0">
        <Reveal className="pro-panel pro-panel--accent p-10 text-center">
          <h2 className="text-2xl font-extrabold md:text-3xl">
            Want this crew handling your screen?
          </h2>
          <Button asChild size="lg" className="mt-6">
            <Link to="/contact">
              Get in touch <ArrowRight aria-hidden />
            </Link>
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
