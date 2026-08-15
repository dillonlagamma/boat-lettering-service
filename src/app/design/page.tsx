import type { Metadata } from "next";
import { LetteringDesigner } from "@/components/LetteringDesigner";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Design Your Lettering",
  description:
    "Design custom vinyl boat lettering online — name, hailing port, font, color, and size — then request install in South Florida or DIY shipping.",
  alternates: { canonical: "/design" },
};

export default function DesignPage() {
  return (
    <div className="pb-[5.5rem] md:pb-0">
      <PageHero title="Design Lettering" image="/images/yacht-bow.jpg" />
      <div className="mx-auto max-w-[1280px] px-4 py-8 sm:px-5 sm:py-12">
        <p className="mb-8 max-w-2xl text-sm leading-7 text-navy/65">
          Type a name, pick a font and color, then send the spec for a quote.
          Whether you have your own artwork or a design in mind, we can turn
          that into boat lettering.
        </p>
        <LetteringDesigner />
      </div>
    </div>
  );
}
