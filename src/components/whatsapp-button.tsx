import { whatsAppLink } from "@/lib/site";

/** Simple WhatsApp glyph — lucide has no brand icon for it. */
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.89 1.22 3.09.15.2 2.11 3.22 5.1 4.51.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35ZM12.04 21.79h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.82 9.82 0 0 1-1.51-5.24c0-5.44 4.43-9.87 9.9-9.87a9.82 9.82 0 0 1 6.99 2.9 9.8 9.8 0 0 1 2.89 6.98c0 5.45-4.44 9.86-9.89 9.86Zm8.41-18.27A11.8 11.8 0 0 0 12.04 0C5.46 0 .1 5.35.1 11.92c0 2.1.55 4.15 1.6 5.96L0 24l6.27-1.64a11.94 11.94 0 0 0 5.72 1.45h.01c6.58 0 11.94-5.35 11.94-11.92 0-3.18-1.24-6.18-3.49-8.43Z" />
    </svg>
  );
}

/**
 * Site-wide floating WhatsApp button.
 * PLACEHOLDER number — swap in src/lib/site.ts (CONTACT.phone).
 */
export function WhatsAppButton() {
  return (
    <a
      href={whatsAppLink(
        "Hi Vortex Visual! I'd like to talk about a project.",
      )}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Vortex Visual on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex size-13 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-charcoal-deep/50 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <WhatsAppIcon className="size-6" />
    </a>
  );
}
