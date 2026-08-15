import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 pb-[5.5rem] text-center sm:px-5 sm:py-24 md:pb-24">
      <p className="text-[0.72rem] uppercase tracking-[0.24em] text-seaglass">404</p>
      <h1 className="mt-3 font-display text-3xl sm:text-5xl">That page is off the chart.</h1>
      <p className="mt-4 text-navy/65">
        The old HTML links now redirect. Try the home page or the sitemap.
      </p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Link href="/" className="btn-blue">
          Home
        </Link>
        <Link
          href="/sitemap"
          className="inline-flex min-h-11 items-center justify-center rounded-md border border-navy/15 px-5 text-sm font-semibold uppercase tracking-[0.14em]"
        >
          Sitemap
        </Link>
      </div>
    </div>
  );
}
