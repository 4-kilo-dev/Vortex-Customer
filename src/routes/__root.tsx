import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from '@tanstack/react-router'

import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { ThemeProvider, themeInitScript } from '@/lib/theme'
import {
  CONTACT,
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
  SOCIALS,
  canonicalUrl,
} from '@/lib/site'

import appCss from '../styles.css?url'

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'LocalBusiness'],
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  legalName: SITE_NAME,
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/logo-dark.png`,
  },
  image: [DEFAULT_OG_IMAGE, `${SITE_URL}/logo-dark.png`],
  slogan: SITE_TAGLINE,
  description:
    'LED screen rental and sales in Addis Ababa, Ethiopia — event displays, permanent installations, rigging, fabrication, and white-label production support for agencies.',
  email: CONTACT.email,
  telephone: CONTACT.phone,
  address: {
    '@type': 'PostalAddress',
    addressLocality: CONTACT.addressLocality,
    addressCountry: CONTACT.addressCountry,
    streetAddress: CONTACT.address,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: CONTACT.geo.latitude,
    longitude: CONTACT.geo.longitude,
  },
  areaServed: [
    { '@type': 'City', name: 'Addis Ababa' },
    { '@type': 'Country', name: 'Ethiopia' },
  ],
  sameAs: [SOCIALS.tiktok, SOCIALS.instagram, SOCIALS.telegram],
  hasMap: CONTACT.mapsUrl,
  priceRange: '$$',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: CONTACT.phone,
      email: CONTACT.email,
      contactType: 'sales',
      areaServed: 'ET',
      availableLanguage: ['en', 'am'],
    },
  ],
  knowsAbout: [
    'LED screen rental',
    'LED display sales',
    'Event LED walls',
    'Stage rigging',
    'Permanent LED installation',
    'White-label production support',
  ],
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  description: SITE_TAGLINE,
  publisher: { '@id': `${SITE_URL}/#organization` },
  inLanguage: 'en',
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        title: `${SITE_NAME} | LED Screen Rental & Sales in Addis Ababa, Ethiopia`,
      },
      {
        name: 'description',
        content:
          'Vortex Visual rents and sells LED screens in Addis Ababa — concert walls, conference displays, immersive rooms, permanent installs, and white-label agency support.',
      },
      { name: 'theme-color', content: '#1D1E22' },
      { name: 'application-name', content: SITE_NAME },
      { name: 'apple-mobile-web-app-title', content: SITE_NAME },
      { name: 'format-detection', content: 'telephone=yes' },
      { name: 'geo.region', content: 'ET-AA' },
      { name: 'geo.placename', content: 'Addis Ababa' },
      {
        name: 'geo.position',
        content: `${CONTACT.geo.latitude};${CONTACT.geo.longitude}`,
      },
      {
        name: 'ICBM',
        content: `${CONTACT.geo.latitude}, ${CONTACT.geo.longitude}`,
      },
    ],
    links: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800&family=Open+Sans:wght@400;600&display=swap',
      },
      { rel: 'stylesheet', href: appCss },
      { rel: 'canonical', href: canonicalUrl('/') },
      { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
      { rel: 'icon', href: '/favicon.ico', sizes: '48x48' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      { rel: 'manifest', href: '/manifest.json' },
      {
        rel: 'sitemap',
        type: 'application/xml',
        href: `${SITE_URL}/sitemap.xml`,
      },
      { rel: 'me', href: SOCIALS.tiktok },
      { rel: 'me', href: SOCIALS.instagram },
      { rel: 'me', href: SOCIALS.telegram },
    ],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(organizationJsonLd),
      },
      {
        type: 'application/ld+json',
        children: JSON.stringify(websiteJsonLd),
      },
    ],
  }),
  shellComponent: RootDocument,
  component: RootLayout,
})

function RootLayout() {
  return (
    <ThemeProvider>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
        <WhatsAppButton />
      </div>
    </ThemeProvider>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
