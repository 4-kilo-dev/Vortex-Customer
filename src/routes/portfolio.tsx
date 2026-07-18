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
      title: "Portfolio — LED Screen Deployments | Vortex Visual",
      description:
        "LED screens we've deployed: concert stages, wedding backdrops, conference screens, church installations, public screenings, billboards, and video walls.",
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
        eyebrow="Portfolio"
        title="Screens in the wild"
        lead="Filter by setting. Placeholder frames for now — photos of real deployments swap in as they're cleared for publication."
      />
      <PortfolioGrid items={PORTFOLIO_ITEMS} />
    </Section>
  );
}
