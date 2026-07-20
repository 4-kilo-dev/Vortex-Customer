import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/data/services";
import { cn } from "@/lib/utils";
import { pageMeta } from "@/lib/site";

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
        <div className="relative space-y-8 md:space-y-0">
          {/* Vertical spine connecting the zigzag boxes on desktop */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-8 hidden h-[calc(100%-4rem)] w-px -translate-x-1/2 bg-border md:block"
          />

          {SERVICES.map((service, i) => {
            const flip = i % 2 === 1;
            return (
              <Reveal key={service.slug}>
                <article
                  id={service.slug}
                  className={cn(
                    "relative grid items-stretch gap-0 md:grid-cols-2 md:gap-10 md:py-10",
                    flip && "md:[&>*:first-child]:order-2",
                  )}
                >
                  {/* Number plate — floats into the gutter */}
                  <div
                    className={cn(
                      "panel-node pointer-events-none absolute top-1/2 z-10 hidden size-14 -translate-y-1/2 items-center justify-center font-heading text-lg font-extrabold text-yellow md:flex",
                      flip ? "left-1/2 -translate-x-[calc(50%+0.5px)]" : "left-1/2 -translate-x-[calc(50%-0.5px)]",
                    )}
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  <div
                    className={cn(
                      "pro-panel pro-panel--interactive p-7 md:p-9",
                      flip ? "md:ml-6" : "md:mr-6",
                    )}
                  >
                    <div className="flex items-center gap-4">
                      <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-yellow/10">
                        <service.icon className="size-6 text-yellow" aria-hidden />
                      </span>
                      <div>
                        <p className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground md:hidden">
                          {String(i + 1).padStart(2, "0")}
                        </p>
                        <h2 className="text-xl font-bold md:text-2xl">
                          {service.title}
                        </h2>
                      </div>
                    </div>
                    <p className="mt-4 text-muted-foreground">
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

                  <div
                    className={cn(
                      "pro-panel pro-panel--soft pro-panel--interactive flex items-center justify-center p-8 md:p-10",
                      flip ? "md:mr-6" : "md:ml-6",
                    )}
                  >
                    <div className="text-center">
                      <service.icon
                        className="mx-auto size-16 text-yellow/80"
                        aria-hidden
                      />
                      <p className="mt-4 max-w-[14rem] text-sm text-muted-foreground">
                        {service.summary}
                      </p>
                      <Button asChild variant="outline" className="mt-6">
                        <Link to="/contact" search={{ service: service.slug }}>
                          Request quote <ArrowRight aria-hidden />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section className="pt-0">
        <Reveal className="pro-panel pro-panel--accent p-10 text-center">
          <h2 className="relative text-2xl font-extrabold md:text-3xl">
            Not sure whether to rent or buy?
          </h2>
          <p className="relative mx-auto mt-3 max-w-lg text-muted-foreground">
            Tell us how often you&rsquo;ll use the screen and where it goes —
            we&rsquo;ll give you an honest recommendation and numbers for both.
          </p>
          <Button asChild size="lg" className="relative mt-6">
            <Link to="/contact">Talk to us</Link>
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
