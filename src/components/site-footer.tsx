import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";

import { Logo } from "@/components/brand/vortex-mark";
import { Motif } from "@/components/brand/motif";
import { CONTACT, SITE_NAME, SOCIALS } from "@/lib/site";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.9 2.9 0 1 1-2.31-2.84v-3.5a6.37 6.37 0 1 0 5.76 6.34V8.72a8.2 8.2 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.15Z" />
    </svg>
  );
}

const FOOTER_NAV = [
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
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
              <span>{CONTACT.address}</span>
            </li>
          </ul>
          <div className="mt-5 flex items-center gap-3">
            <a href={SOCIALS.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="text-muted-foreground transition-colors hover:text-yellow">
              <Instagram className="size-5" />
            </a>
            <a href={SOCIALS.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="text-muted-foreground transition-colors hover:text-yellow">
              <Facebook className="size-5" />
            </a>
            <a href={SOCIALS.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok" className="text-muted-foreground transition-colors hover:text-yellow">
              <TikTokIcon className="size-5" />
            </a>
            <a href={SOCIALS.youtube} target="_blank" rel="noreferrer" aria-label="YouTube" className="text-muted-foreground transition-colors hover:text-yellow">
              <Youtube className="size-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="relative border-t border-border/40 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
      </div>
    </footer>
  );
}
