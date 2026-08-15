import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Sitemap",
  description: "All pages on Boat Lettering Service.",
  alternates: { canonical: "/sitemap" },
};

const pages = [
  { href: "/", title: "Home", note: "Shop, services, materials, and service area" },
  { href: "/about", title: "About", note: "The shop, since 1987" },
  { href: "/portfolio", title: "Portfolio", note: "Boat names, graphics, wraps, and striping" },
  { href: "/design", title: "Design your lettering", note: "Live boat-name designer and request form" },
  { href: "/striping", title: "Boat striping", note: "150 ft DIY rolls and install requests" },
  { href: "/contact", title: "Contact", note: "Phone, email, and quote form" },
  { href: "/sitemap", title: "Sitemap", note: "This page" },
];

export default function SitemapPage() {
  return (
    <div className="pb-[5.5rem] md:pb-0">
      <PageHero title="Sitemap" image="/images/jupiter-inlet.jpg" />
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-5 sm:py-14">
        <ul className="divide-y divide-navy/10 border-y border-navy/10">
          {pages.map((page) => (
            <li key={page.href} className="py-5">
              <Link href={page.href} className="font-display text-xl hover:text-seaglass sm:text-2xl">
                {page.title}
              </Link>
              <p className="mt-1 text-sm text-navy/55">{page.note}</p>
              <p className="mt-1 text-xs text-navy/35">{page.href}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
