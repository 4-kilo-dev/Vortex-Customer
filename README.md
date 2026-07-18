# Vortex Visual — Public Website

Marketing site for Vortex Visual (LED screen rental and LED screen sales).
Built with TanStack Start, Tailwind CSS v4, framer-motion,
react-hook-form + zod, and shadcn-style UI primitives.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run preview  # preview the production build
```

## Project layout

```
src/
  routes/            file-based routes (__root, index, services, portfolio, about, contact)
  components/        site chrome, portfolio grid/lightbox, inquiry form, UI primitives
  data/              services, portfolio items, testimonials (edit copy here)
  lib/site.ts        site config — ALL placeholder contact/social values live here
  styles.css         design tokens (oklch) + Tailwind v4 theme mapping
```

## Placeholders to swap before launch

All placeholder values are marked with `PLACEHOLDER` comments in code:

- **`src/lib/site.ts`** — domain (`SITE_URL`), phone, email, address, social URLs.
- **`src/data/portfolio.ts`** — placeholder imagery (picsum.photos); swap seeds for real asset URLs.
- **`src/routes/about.tsx`** — team roster names/roles/photos.
- **`src/routes/contact.tsx`** — Google Map embed coordinates.
- **`public/sitemap.xml`** — prefix relative URLs with the production domain.

## Inquiry API

The contact form (`src/components/inquiry-form.tsx`) is frontend-only. It
POSTs JSON to a backend you own.

### Configuration (env vars)

| Variable | Required | Description |
| --- | --- | --- |
| `VITE_INQUIRY_API_URL` | yes (for a working form) | Endpoint that receives the POST. Falls back to `/api/inquiries`, which is non-functional until you point it somewhere. |
| `VITE_INQUIRY_API_KEY` | no | If set, sent as an `x-api-key` request header. |

### Request

`POST {VITE_INQUIRY_API_URL}` with `Content-Type: application/json`:

```json
{
  "name": "Full Name",
  "phone": "+251 900 000 000",
  "email": "client@example.com",
  "projectDate": "2026-09-12",
  "serviceType": "screen-rental",
  "location": "Addis Ababa, Skylight Hotel",
  "budgetRange": "$1,500 – $5,000",
  "description": "Two-day conference, need a 6m x 3m main screen plus relay screens...",
  "submittedAt": "2026-07-18T10:00:00.000Z"
}
```

- `serviceType` is one of the service slugs in `src/data/services.ts`
  (`screen-rental`, `screen-sales`) or `other`.
- `budgetRange` is omitted when the visitor skips it.
- All fields are validated client-side with zod (see the schema in
  `inquiry-form.tsx`), but the backend should validate again.

### Response

- Any **2xx** → the form shows its success state and resets.
- Anything else (or a network failure) → inline error with a retry button.

No PII is logged to the browser console.
