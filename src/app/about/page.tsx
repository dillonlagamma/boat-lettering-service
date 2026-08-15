import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BrandCarousel } from "@/components/BrandCarousel";
import { PageHero } from "@/components/PageHero";
import { aboutBlurb, cities, counties, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `Boat Lettering Service has been serving South Florida boat owners since ${site.established}.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="pb-[5.5rem] md:pb-0">
      <PageHero title="About Us" image="/images/marina-luxury.jpg" />
      <div className="mx-auto grid max-w-6xl items-start gap-8 px-4 py-10 sm:px-5 sm:py-14 md:grid-cols-2 md:gap-12">
        <div className="relative aspect-[4/3] overflow-hidden rounded-md md:aspect-[4/5]">
          <Image
            src="/images/yacht-white.jpg"
            alt="White luxury yacht at rest"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
        <div className="min-w-0">
          <h2 className="font-display text-2xl font-extrabold uppercase sm:text-3xl">
            A boater for boat owners since {site.established}
          </h2>
          <p className="mt-5 text-base leading-8 text-navy/70">{aboutBlurb}</p>
          <p className="mt-4 text-base leading-8 text-navy/70">
            Full-service shop specializing in expert boat lettering and
            installation. {site.artwork} We design, produce, and install — or
            ship lettering to Long Island and all other areas of the U.S.
          </p>
          <p className="mt-6 text-sm leading-7 text-navy/60">
            {counties.join(" · ")}
          </p>
          <p className="mt-2 text-sm leading-7 text-navy/50">{cities.join(", ")}</p>
          <p className="mt-8 text-xs uppercase tracking-[0.2em] text-navy/40">
            Boats we letter
          </p>
          <div className="mt-4">
            <BrandCarousel />
          </div>
          <Link href="/contact" className="btn-blue mt-8">
            Get A Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
