import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/data/services";
import { pageMeta } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/services")({
  head: () =>
    pageMeta({
      title: "Services — LED Screen Rental & Sales | Vortex Visual",
      description:
        "LED screen rental with delivery, rigging, and on-site technicians — plus permanent LED display sales with installation, calibration, and warranty.",
      path: "/services",
    }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <Section withMotif className="pb-8 md:pb-10">
        <SectionHeading
          as="h1"
          eyebrow="Services"
          title="Rental for the night, sales for the long run"
          lead="Whether you need a stage wall for one unforgettable evening or a permanent display working for you every day, we spec it, deliver it, and stand behind it."
        />
      </Section>

      <Section className="pt-0">
        <div className="space-y-6">
          {SERVICES.map((service, i) => (
            <Reveal key={service.slug}>
              <article
                id={service.slug}
                className={cn(
                  "grid gap-6 rounded-lg border border-border bg-card p-7 md:grid-cols-[1fr_auto] md:items-center md:p-9",
                )}
              >
                <div>
                  <div className="flex items-center gap-4">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-yellow/10">
                      <service.icon className="size-6 text-yellow" aria-hidden />
                    </span>
                    <div>
                      <p className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">
                        {String(i + 1).padStart(2, "0")}
                      </p>
                      <h2 className="text-xl font-bold md:text-2xl">
                        {service.title}
                      </h2>
                    </div>
                  </div>
                  <p className="mt-4 max-w-2xl text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {service.deliverables.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-2 text-sm text-foreground"
                      >
                        <Check
                          className="mt-0.5 size-4 shrink-0 text-yellow"
                          aria-hidden
                        />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button asChild variant="outline" className="md:self-center">
                  <Link to="/contact" search={{ service: service.slug }}>
                    Request quote <ArrowRight aria-hidden />
                  </Link>
                </Button>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <Reveal className="rounded-xl border border-yellow/30 bg-card p-10 text-center">
          <h2 className="text-2xl font-extrabold md:text-3xl">
            Not sure whether to rent or buy?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            Tell us how often you&rsquo;ll use the screen and where it goes —
            we&rsquo;ll give you an honest recommendation and numbers for both.
          </p>
          <Button asChild size="lg" className="mt-6">
            <Link to="/contact">Talk to us</Link>
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
