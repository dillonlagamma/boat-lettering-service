import Image from "next/image";
import { WaveDivider } from "@/components/WaveDivider";

export function PageHero({
  title,
  lede,
  image = "/images/miami-marina.jpg",
}: {
  title: string;
  lede?: string;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-deep text-white">
      <Image
        src={image}
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-navy-deep/45" />
      <div className="relative mx-auto flex min-h-[200px] max-w-6xl items-center justify-center px-4 py-16 sm:min-h-[280px] sm:px-5 sm:py-20 md:min-h-[340px]">
        <h1 className="max-w-full break-words text-center font-display text-3xl font-extrabold uppercase leading-tight tracking-wide sm:text-4xl md:text-6xl">
          <span className="highlight-blue px-1 sm:px-2">{title}</span>
        </h1>
      </div>
      <WaveDivider />
      {lede ? (
        <p className="sr-only">{lede}</p>
      ) : null}
    </section>
  );
}
