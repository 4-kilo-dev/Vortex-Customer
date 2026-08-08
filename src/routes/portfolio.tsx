import { createFileRoute } from "@tanstack/react-router";

import { Section, SectionHeading } from "@/components/section";
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid";
import { PORTFOLIO_ITEMS, portfolioImageUrl } from "@/data/portfolio";
import {
  SITE_NAME,
  SITE_URL,
  breadcrumbJsonLd,
  canonicalUrl,
  pageMeta,
} from "@/lib/site";

const imageGalleryJsonLd = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: `${SITE_NAME} Portfolio — Selected LED Work`,
  description:
    "LED screen deployments, immersive rooms, and exhibition builds by Vortex Visual in Addis Ababa, Ethiopia.",
  url: canonicalUrl("/portfolio"),
  image: PORTFOLIO_ITEMS.slice(0, 8).map((item) => ({
    "@type": "ImageObject",
    name: item.title,
    caption: item.caption,
    contentUrl: `${SITE_URL}${portfolioImageUrl(item, 1200)}`,
  })),
};

export const Route = createFileRoute("/portfolio")({
  head: () => {
    const meta = pageMeta({
      title: "LED Screen Portfolio & Event Work | Vortex Visual Addis Ababa",
      description:
        "See Vortex Visual deployments in Addis Ababa: outdoor concerts, festival LED walls, immersive rooms, exhibition booths, and city activations.",
      path: "/portfolio",
      image: "/portfolio/craft-addis-festival.jpg",
    });
    return {
      ...meta,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(imageGalleryJsonLd),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Portfolio", path: "/portfolio" },
            ]),
          ),
        },
      ],
    };
  },
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <Section withMotif>
      <SectionHeading
        as="h1"
        eyebrow="Selected Work"
        title="Screens we've put up"
        lead="A cross-section of recent deployments — live screen production, immersive LED rooms, and corporate / exhibition builds."
      />
      <PortfolioGrid items={PORTFOLIO_ITEMS} />
    </Section>
  );
}
