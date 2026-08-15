import Image from "next/image";
import type { portfolioItems } from "@/lib/site";

type Item = (typeof portfolioItems)[number];

export function TransomCard({ item }: { item: Item }) {
  return (
    <article className="group overflow-hidden rounded-md bg-navy-deep">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={item.image}
          alt={`${item.title} lettering${item.location ? `, ${item.location}` : ""}`}
          fill
          className="object-cover object-center transition duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 25vw, 50vw"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/90 to-transparent p-2.5 sm:p-4">
          <p className="truncate text-[0.58rem] uppercase tracking-[0.12em] text-brass sm:text-[0.65rem] sm:tracking-[0.16em]">
            {item.location}
          </p>
          <h3 className="mt-1 font-display text-sm font-bold leading-snug text-white sm:text-base">
            {item.title}
          </h3>
        </div>
      </div>
    </article>
  );
}
