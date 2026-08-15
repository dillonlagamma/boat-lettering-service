import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PortfolioGallery } from "@/components/PortfolioGallery";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Boat names, graphics, registration numbers, wraps, and striping from Boat Lettering Service in South Florida.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <div className="pb-[5.5rem] md:pb-0">
      <PageHero title="Portfolio" image="/images/yacht-luxury.jpg" />
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-5 sm:py-14">
        <p className="mb-8 max-w-2xl text-sm leading-7 text-navy/60">
          Boat names, graphics, and custom lettering from our South Florida
          shop — transoms, hulls, and a few jobs that left the water.
        </p>
        <PortfolioGallery />
      </div>
    </div>
  );
}
