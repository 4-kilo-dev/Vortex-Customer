import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";

import { Logo } from "@/components/brand/vortex-mark";
import { Motif } from "@/components/brand/motif";
import { TikTokIcon } from "@/components/icons/tiktok";
import { TelegramIcon } from "@/components/icons/telegram";
import { CONTACT, POWERED_BY, SITE_NAME, SOCIALS } from "@/lib/site";

const FOOTER_NAV = [
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/partnerships", label: "Partnerships" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/privacy", label: "Privacy" },
] as const;

export function SiteFooter() {
  return (
    <footer className="dark relative overflow-hidden border-t border-border/60 bg-charcoal-deep text-foreground">
      <Motif className="text-paper" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            LED screen rental and sales: event screens rigged and operated by
            professionals, permanent displays installed and backed by warranty.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-heading text-sm font-bold uppercase tracking-widest text-neutral-40">
            Explore
          </h2>
          <ul className="mt-4 space-y-2">
            {FOOTER_NAV.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-muted-foreground transition-colors hover:text-yellow"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-heading text-sm font-bold uppercase tracking-widest text-neutral-40">
            Contact
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Phone className="size-4 text-yellow" aria-hidden />
              <a href={`tel:${CONTACT.phone}`} className="hover:text-yellow">
                {CONTACT.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 text-yellow" aria-hidden />
              <a href={`mailto:${CONTACT.email}`} className="hover:text-yellow">
                {CONTACT.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="size-4 text-yellow" aria-hidden />
              <a
                href={CONTACT.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-yellow"
              >
                {CONTACT.address}
              </a>
            </li>
          </ul>
          <div className="mt-5 flex items-center gap-3">
            <a
              href={SOCIALS.tiktok}
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
              className="text-muted-foreground transition-colors hover:text-yellow"
            >
              <TikTokIcon className="size-5" />
            </a>
            <a
              href={SOCIALS.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="text-muted-foreground transition-colors hover:text-yellow"
            >
              <Instagram className="size-5" />
            </a>
            <a
              href={SOCIALS.telegram}
              target="_blank"
              rel="noreferrer"
              aria-label="Telegram"
              className="text-muted-foreground transition-colors hover:text-yellow"
            >
              <TelegramIcon className="size-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col items-center justify-center gap-1 border-t border-border/40 px-4 py-5 text-center text-xs text-muted-foreground sm:flex-row sm:gap-2">
        <span>
          © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
        </span>
        <span className="hidden text-border sm:inline" aria-hidden>
          ·
        </span>
        <span>
          Powered by{" "}
          <a
            href={POWERED_BY.url}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-neutral-40 transition-colors hover:text-yellow"
          >
            {POWERED_BY.name}
          </a>
        </span>
      </div>
    </footer>
  );
}
