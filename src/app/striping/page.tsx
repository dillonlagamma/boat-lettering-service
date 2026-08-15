import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { StripingForm } from "@/components/StripingForm";

export const metadata: Metadata = {
  title: "Boat Striping",
  description:
    "DIY boat striping rolls — 150 ft of 2 mil high-performance vinyl with a 5-year guarantee. South Florida install also available.",
  alternates: { canonical: "/striping" },
};

const notes = [
  "All striping rolls are 150 ft.",
  "Same 5-year guarantee as our boat lettering.",
  "High-performance 2 mil vinyl. Store-bought 5 mil striping typically lasts about two years.",
  "Each roll is one solid color. Order two rolls to stack a two-color stripe.",
  "No returns on striping.",
  "Clear pre-mask is included for easier installation and must be removed after application.",
];

export default function StripingPage() {
  return (
    <div className="pb-[5.5rem] md:pb-0">
      <PageHero title="Boat Striping" image="/images/yacht-speed.jpg" />
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-5 sm:py-14 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-5">
          <h2 className="font-display text-2xl sm:text-3xl">What you get</h2>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-navy/70">
            {notes.map((note) => (
              <li key={note} className="border-l-2 border-brass pl-4">
                {note}
              </li>
            ))}
          </ul>
          <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-md">
            <Image
              src="/portfolio/job-15.jpg"
              alt="Mission Xpress lettering set in a dark hull stripe"
              fill
              className="object-cover object-center"
              sizes="40vw"
            />
          </div>
        </div>
        <div className="min-w-0 rounded-2xl bg-foam p-4 sm:rounded-3xl sm:p-6 md:col-span-7 md:p-8">
          <StripingForm />
        </div>
      </div>
    </div>
  );
}
