import { createFileRoute } from "@tanstack/react-router";

import { Section, SectionHeading } from "@/components/section";
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid";
import { PORTFOLIO_ITEMS, portfolioImageUrl } from "@/data/portfolio";
import { SITE_NAME, canonicalUrl, pageMeta } from "@/lib/site";

const imageGalleryJsonLd = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: `${SITE_NAME} Portfolio`,
  url: canonicalUrl("/portfolio"),
  image: PORTFOLIO_ITEMS.slice(0, 8).map((item) => ({
    "@type": "ImageObject",
    name: item.title,
    caption: item.caption,
    contentUrl: portfolioImageUrl(item, 1200),
  })),
};

export const Route = createFileRoute("/portfolio")({
  head: () => {
    const meta = pageMeta({
      title: "Portfolio — Selected Work | Vortex Visual",
      description:
        "Selected Vortex Visual deployments: outdoor concerts, festival screens, immersive LED rooms, exhibition booths, and city activations in Addis Ababa.",
      path: "/portfolio",
    });
    return {
      ...meta,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(imageGalleryJsonLd),
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
