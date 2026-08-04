import { createFileRoute } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { z } from "zod";

import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { InquiryForm } from "@/components/inquiry-form";
import { TikTokIcon } from "@/components/icons/tiktok";
import { TelegramIcon } from "@/components/icons/telegram";
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
    streetAddress: CONTACT.address,
  },
  sameAs: [
    SOCIALS.instagram,
    SOCIALS.facebook,
    SOCIALS.tiktok,
    SOCIALS.youtube,
    SOCIALS.telegram,
  ],
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
                    <a
                      href={CONTACT.mapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted-foreground transition-colors hover:text-yellow"
                    >
                      {CONTACT.address}
                    </a>
                  </li>
                </ul>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={whatsAppLink(
                      "Hi Vortex Visual! I'd like to request a quote.",
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-yellow px-4 py-2.5 text-sm font-bold text-yellow transition-colors hover:bg-yellow hover:text-charcoal"
                  >
                    Chat on WhatsApp
                  </a>
                  <a
                    href={SOCIALS.telegram}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-bold text-foreground transition-colors hover:border-yellow hover:text-yellow"
                  >
                    <TelegramIcon className="size-4" />
                    Message on Telegram
                  </a>
                </div>
              </div>

              <div>
                <h2 className="font-heading text-sm font-bold uppercase tracking-widest text-neutral-40">
                  Follow the work
                </h2>
                <ul className="mt-4 space-y-3 text-sm">
                  <li>
                    <a href={SOCIALS.tiktok} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-yellow">
                      <TikTokIcon className="size-4 text-yellow" />
                      TikTok
                    </a>
                  </li>
                  <li>
                    <a href={SOCIALS.telegram} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-yellow">
                      <TelegramIcon className="size-4 text-yellow" />
                      Telegram
                    </a>
                  </li>
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
                <div className="mt-4 overflow-hidden rounded-lg border border-border">
                  <iframe
                    title="Vortex Visual location"
                    src={CONTACT.mapsEmbed}
                    width="100%"
                    height="240"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <a
                  href={CONTACT.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-block text-sm text-muted-foreground transition-colors hover:text-yellow"
                >
                  Open in Google Maps
                </a>
              </div>
            </aside>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
