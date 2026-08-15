import { brandLogos } from "@/lib/site";

const midpoint = Math.ceil(brandLogos.length / 2);
const topRow = brandLogos.slice(0, midpoint);
const bottomRow = brandLogos.slice(midpoint);

function BrandRow({
  brands,
  reverse = false,
}: {
  brands: typeof brandLogos;
  reverse?: boolean;
}) {
  const loop = [...brands, ...brands];

  return (
    <div
      className={`flex w-max items-center py-1 ${
        reverse ? "brand-track-reverse" : "brand-track"
      }`}
    >
      {loop.map((brand, index) => (
        <div
          key={`${brand.name}-${index}`}
          className="flex h-10 shrink-0 items-center justify-center px-7"
        >
          <img
            src={brand.src}
            alt={brand.name}
            className="h-7 w-auto max-w-[9.5rem] object-contain"
          />
        </div>
      ))}
    </div>
  );
}

export function BrandCarousel() {
  return (
    <div className="brand-carousel relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-5 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-5 bg-gradient-to-l from-white to-transparent" />
      <div className="flex flex-col gap-1">
        <BrandRow brands={topRow} />
        <BrandRow brands={bottomRow} reverse />
      </div>
    </div>
  );
}
