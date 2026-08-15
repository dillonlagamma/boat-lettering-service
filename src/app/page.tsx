import Image from "next/image";
import Link from "next/link";
import { BrandCarousel } from "@/components/BrandCarousel";
import { ParallaxBand } from "@/components/ParallaxBand";
import { QuoteForm } from "@/components/QuoteForm";
import { TransomCard } from "@/components/TransomCard";
import { WaveDivider } from "@/components/WaveDivider";
import {
  aboutBlurb,
  cities,
  counties,
  materials,
  portfolioItems,
  processSteps,
  services,
  site,
} from "@/lib/site";

export default function Home() {
  return (
    <div className="pb-[5.5rem] md:pb-0">
      <section className="relative overflow-hidden bg-navy-deep text-white md:min-h-[88vh]">
        <Image
          src="/images/yacht-aerial.jpg"
          alt="Luxury motor yacht on turquoise water"
          fill
          priority
          className="object-cover object-[center_40%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/80 via-navy-deep/60 to-navy-deep/75 md:bg-gradient-to-r md:from-navy-deep/88 md:via-navy-deep/55 md:to-transparent" />

        <div className="relative mx-auto grid max-w-6xl items-start gap-8 px-4 pb-20 pt-10 sm:px-5 sm:pb-24 sm:pt-14 md:min-h-[88vh] md:grid-cols-12 md:items-end md:pt-16">
          <div className="min-w-0 md:col-span-7">
            <p className="text-xs font-semibold tracking-wide text-sky sm:text-sm">
              {site.serving}
            </p>
            <h1 className="mt-3 font-display text-[1.85rem] font-extrabold uppercase leading-[1.1] text-white [text-shadow:0_2px_18px_rgba(9,25,40,0.85),0_1px_3px_rgba(9,25,40,0.9)] sm:text-4xl md:text-6xl">
              <span className="highlight-blue">Lettering that belongs on the water.</span>
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white [text-shadow:0_1px_10px_rgba(9,25,40,0.7)] sm:mt-5 sm:text-base sm:leading-8 md:text-lg">
              {site.artwork} Full-service shop for names, graphics, signs, wraps,
              and striping. We install at the dock or ship to Long Island and
              nationwide. {site.rank}
            </p>
          </div>
          <div className="min-w-0 md:col-span-5">
            <div className="rounded-md bg-navy-deep/80 p-4 shadow-2xl backdrop-blur-md sm:p-5 md:p-6">
              <p className="mb-4 font-display text-base font-bold uppercase sm:text-lg">
                Get a free quote
              </p>
              <QuoteForm variant="hero" />
            </div>
          </div>
        </div>
        <WaveDivider />
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 sm:px-5 sm:py-16 md:grid-cols-2 md:gap-10 md:py-24">
        <div className="relative aspect-[4/3] overflow-hidden rounded-md md:aspect-[5/6]">
          <Image
            src="/images/ft-lauderdale.jpg"
            alt="Boats along a Fort Lauderdale canal"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-mid">
            Since {site.established}
          </p>
          <h2 className="mt-2 font-display text-2xl font-extrabold uppercase leading-tight text-navy sm:text-3xl md:text-4xl">
            Full service shop specializing in expert boat lettering & installation
          </h2>
          <p className="mt-5 text-base leading-8 text-navy/70">{aboutBlurb}</p>
          <ul className="mt-6 space-y-3 text-sm text-navy/80">
            <li className="flex items-start gap-3">
              <AnchorIcon />
              3M, Avery, and Oracal Material
            </li>
            <li className="flex items-start gap-3">
              <WaveIcon />
              High quality marine-grade vinyl material
            </li>
            <li className="flex items-start gap-3">
              <HelmIcon />
              Resistant to fading, cracking & peeling
            </li>
          </ul>
          <Link href="/contact" className="btn-blue mt-8">
            Get A Quote
          </Link>
        </div>
      </section>

      <section className="bg-foam">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-16 md:py-20">
          <h2 className="font-display text-2xl font-extrabold uppercase sm:text-3xl">What we do</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.slug} className="group overflow-hidden rounded-md bg-white shadow-sm">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    style={{ objectPosition: service.imagePosition }}
                    sizes="(min-width: 1024px) 33vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold uppercase">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-navy/65">{service.blurb}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ParallaxBand image="/images/miami-marina.jpg" alt="Aerial view of a Miami marina">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:py-24 md:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brass">
            Martin · Palm Beach · Broward · Miami-Dade
          </p>
          <h2 className="mt-4 font-display text-2xl font-extrabold uppercase sm:text-4xl md:text-5xl">
            Lettering that belongs on South Florida water.
          </h2>
          <Link href="/design" className="btn-gold mt-8 md:w-auto">
            Design your lettering
          </Link>
        </div>
        <div className="mx-auto grid max-w-6xl gap-5 px-4 pb-14 sm:px-5 sm:pb-20 md:grid-cols-3 md:gap-6 md:pb-24">
          {processSteps.map((step) => (
            <article
              key={step.n}
              className="rounded-md bg-navy-deep/80 p-6 shadow-lg backdrop-blur-md"
            >
              <p className="font-display text-3xl font-extrabold text-brass">{step.n}</p>
              <h3 className="mt-3 font-display text-2xl font-bold uppercase">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/75">{step.body}</p>
            </article>
          ))}
        </div>
      </ParallaxBand>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-16 md:py-20">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-mid">
              Materials
            </p>
            <h2 className="mt-2 font-display text-3xl font-extrabold uppercase">
              Built for salt and sun.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-navy/65">
            High-quality marine-grade vinyl designed for durability against salt
            water and harsh weather. Resistant to fading, cracking, and peeling.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {materials.map((material) => (
            <article key={material.name} className="rounded-md bg-navy-deep px-6 py-8 text-white">
              <h3 className="font-display text-2xl font-bold text-brass">{material.name}</h3>
              <p className="mt-3 text-sm leading-7 text-white/70">{material.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-foam">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-16 md:py-20">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-mid">
                Gallery
              </p>
              <h2 className="mt-2 font-display text-2xl font-extrabold uppercase sm:text-3xl">
                On the water
              </h2>
            </div>
            <Link href="/portfolio" className="hidden text-sm font-semibold uppercase tracking-[0.12em] text-blue-mid md:inline">
              View gallery
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {portfolioItems.slice(0, 8).map((item) => (
              <TransomCard key={item.id} item={item} />
            ))}
          </div>
          <Link href="/portfolio" className="mt-6 inline-block text-sm font-semibold uppercase tracking-[0.12em] text-blue-mid md:hidden">
            View gallery
          </Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 sm:px-5 sm:py-16 md:grid-cols-2 md:gap-10">
        <div className="min-w-0">
          <h2 className="font-display text-2xl font-extrabold uppercase leading-tight sm:text-3xl">
            Areas we service
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-navy/65">
            {counties.join(", ").replace(", Miami-Dade County", " & Miami-Dade")}.{" "}
            {cities.join(", ")}, and adjacent waters. We also ship lettering to
            Long Island and anywhere in the U.S.
          </p>
          <p className="mt-8 text-xs uppercase tracking-[0.2em] text-navy/40">
            Boats we letter
          </p>
          <div className="mt-4">
            <BrandCarousel />
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-md">
          <Image
            src="/images/jupiter-inlet.jpg"
            alt="Boats at Jupiter Inlet, Florida"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
      </section>
    </div>
  );
}

function iconClass() {
  return "mt-0.5 h-5 w-5 shrink-0 text-blue-mid";
}

function AnchorIcon() {
  return (
    <svg viewBox="0 0 20 20" className={iconClass()} fill="none" aria-hidden>
      <path
        d="M10 3.2v11.6M10 3.2a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2ZM7.2 7.2h5.6M10 14.8c-3.4 0-5.8-2-5.8-5.2M10 14.8c3.4 0 5.8-2 5.8-5.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WaveIcon() {
  return (
    <svg viewBox="0 0 20 20" className={iconClass()} fill="none" aria-hidden>
      <path
        d="M2.2 12.2c1.8-2.4 3.4-2.4 5.2 0 1.8-2.4 3.4-2.4 5.2 0 1.8-2.4 3.4-2.4 5.2 0"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M2.2 8.2c1.8-2.4 3.4-2.4 5.2 0 1.8-2.4 3.4-2.4 5.2 0 1.8-2.4 3.4-2.4 5.2 0"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function HelmIcon() {
  return (
    <svg viewBox="0 0 20 20" className={iconClass()} fill="none" aria-hidden>
      <circle cx="10" cy="10" r="3.1" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M10 3v2.4M10 14.6V17M3 10h2.4M14.6 10H17M5.1 5.1l1.7 1.7M13.2 13.2l1.7 1.7M14.9 5.1l-1.7 1.7M6.8 13.2l-1.7 1.7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
