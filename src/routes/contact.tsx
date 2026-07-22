import { createFileRoute } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { z } from "zod";

import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { InquiryForm } from "@/components/inquiry-form";
import { TikTokIcon } from "@/components/icons/tiktok";
import {
  CONTACT,
  SITE_NAME,
  SITE_URL,
  SOCIALS,
  canonicalUrl,
  pageMeta,
  whatsAppLink,
} from "@/lib/site";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  url: canonicalUrl("/contact"),
  image: `${SITE_URL}/logo-dark.png`,
  telephone: CONTACT.phone,
  email: CONTACT.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: CONTACT.address, // PLACEHOLDER address
  },
  sameAs: [SOCIALS.instagram, SOCIALS.facebook, SOCIALS.tiktok, SOCIALS.youtube],
};

const contactSearchSchema = z.object({
  /** Prefills the service select — set by "Request quote" links on /services. */
  service: z.string().optional().catch(undefined),
});

export const Route = createFileRoute("/contact")({
  validateSearch: contactSearchSchema,
  head: () => {
    const meta = pageMeta({
      title: "Contact — Vortex Visual",
      description:
        "Request a quote for LED screen rental or a permanent LED display installation. We respond within one business day.",
      path: "/contact",
    });
    return {
      ...meta,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(localBusinessJsonLd),
        },
      ],
    };
  },
  component: ContactPage,
});

function ContactPage() {
  const { service } = Route.useSearch();

  return (
    <>
      <Section withMotif className="pb-8 md:pb-10">
        <SectionHeading
          as="h1"
          eyebrow="Contact"
          title="Tell us about your event or space"
          lead="Fill in the details below and we'll come back with a recommended screen, a plan, and a quote — usually within one business day."
        />
      </Section>

      <Section className="pt-0">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <div className="pro-panel p-6 md:p-8">
              <InquiryForm defaultService={service} />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <aside className="space-y-8">
              <div>
                <h2 className="font-heading text-sm font-bold uppercase tracking-widest text-neutral-40">
                  Direct lines
                </h2>
                {/* PLACEHOLDER contact details — configured in src/lib/site.ts */}
                <ul className="mt-4 space-y-3 text-sm">
                  <li className="flex items-center gap-3">
                    <Phone className="size-4 shrink-0 text-yellow" aria-hidden />
                    <a
                      href={`tel:${CONTACT.phone}`}
                      className="text-muted-foreground transition-colors hover:text-yellow"
                    >
                      {CONTACT.phoneDisplay}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="size-4 shrink-0 text-yellow" aria-hidden />
                    <a
                      href={`mailto:${CONTACT.email}?subject=${encodeURIComponent("Project inquiry — Vortex Visual")}`}
                      className="text-muted-foreground transition-colors hover:text-yellow"
                    >
                      {CONTACT.email}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <MapPin className="size-4 shrink-0 text-yellow" aria-hidden />
                    <span className="text-muted-foreground">
                      {CONTACT.address}
                    </span>
                  </li>
                </ul>
                <a
                  href={whatsAppLink(
                    "Hi Vortex Visual! I'd like to request a quote.",
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-md border border-yellow px-4 py-2.5 text-sm font-bold text-yellow transition-colors hover:bg-yellow hover:text-charcoal"
                >
                  Chat on WhatsApp
                </a>
              </div>

              <div>
                <h2 className="font-heading text-sm font-bold uppercase tracking-widest text-neutral-40">
                  Follow the work
                </h2>
                {/* PLACEHOLDER social URLs — configured in src/lib/site.ts */}
                <ul className="mt-4 space-y-3 text-sm">
                  <li>
                    <a href={SOCIALS.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-yellow">
                      <Instagram className="size-4 text-yellow" aria-hidden />
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href={SOCIALS.facebook} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-yellow">
                      <Facebook className="size-4 text-yellow" aria-hidden />
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href={SOCIALS.tiktok} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-yellow">
                      <TikTokIcon className="size-4 text-yellow" />
                      TikTok
                    </a>
                  </li>
                  <li>
                    <a href={SOCIALS.youtube} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-yellow">
                      <Youtube className="size-4 text-yellow" aria-hidden />
                      YouTube
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-heading text-sm font-bold uppercase tracking-widest text-neutral-40">
                  Find us
                </h2>
                {/* PLACEHOLDER map location (central Addis Ababa) — update the
                    q= coordinates once the real office address is set. */}
                <div className="mt-4 overflow-hidden rounded-lg border border-border">
                  <iframe
                    title="Vortex Visual office location"
                    src="https://www.google.com/maps?q=9.0108,38.7613&z=14&output=embed"
                    width="100%"
                    height="240"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </aside>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
