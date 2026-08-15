import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { cities, counties, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Call ${site.phone} or email ${site.email} for boat lettering appointments, quotes, and DIY shipping.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="pb-[5.5rem] md:pb-0">
      <PageHero title="Contact Us" image="/images/marina-white.jpg" />
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-5 sm:py-14 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-5">
          <p className="text-[0.72rem] uppercase tracking-[0.2em] text-seaglass">
            Shop
          </p>
          <h2 className="mt-2 font-display text-3xl">South Florida since 1987</h2>
          <p className="mt-4 text-sm leading-7 text-navy/65">
            For information, call {site.phone} or email us at {site.email}.
          </p>
          <a href={site.phoneHref} className="mt-6 block font-display text-2xl text-navy sm:text-3xl">
            {site.phone}
          </a>
          <a href={site.emailHref} className="mt-2 block break-all text-navy/70">
            {site.email}
          </a>
          <p className="mt-8 text-sm leading-7 text-navy/65">
            {counties.join(" · ")}
          </p>
          <p className="mt-3 text-sm leading-7 text-navy/50">{cities.join(", ")}</p>
          <div className="relative mt-8 hidden aspect-[4/3] overflow-hidden rounded-md md:block">
            <Image
              src="/images/ft-lauderdale.jpg"
              alt="Fort Lauderdale waterfront"
              fill
              className="object-cover"
              sizes="40vw"
            />
          </div>
        </div>
        <div className="min-w-0 rounded-2xl bg-foam p-4 sm:rounded-3xl sm:p-6 md:col-span-7 md:p-8">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
