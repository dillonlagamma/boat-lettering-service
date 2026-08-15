import Image from "next/image";
import Link from "next/link";
import { SocialIcons } from "@/components/SocialIcons";
import { site } from "@/lib/site";

const quickLinks = [
  { href: "/about", label: "About" },
  { href: "/striping", label: "Boat Striping" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

const resources = [
  { href: "/design", label: "Design Lettering" },
  { href: "/sitemap", label: "Sitemap" },
];

export function Footer() {
  return (
    <footer className="bg-navy-deep pb-[calc(5.75rem+env(safe-area-inset-bottom))] text-white md:pb-0">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 sm:px-5 sm:py-14 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
        <div className="min-w-0 lg:max-w-xl lg:flex-1">
          <Image
            src="/brand/wordmark-white.png"
            alt="Boat Lettering Service"
            width={1022}
            height={142}
            className="h-10 w-auto max-w-[20rem] sm:h-12 sm:max-w-[26rem]"
          />
          <p className="mt-4 max-w-md text-sm leading-6 text-white/65">{site.heritage}.</p>
          <p className="mt-1 max-w-md text-sm leading-6 text-white/50">{site.serving}.</p>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-10 lg:w-auto lg:shrink-0 lg:gap-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em]">Quick Links</p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em]">Resources</p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {resources.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <p className="text-sm font-bold uppercase tracking-[0.14em]">Get in Touch</p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>
                <a href={site.emailHref} className="break-all hover:text-white">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={site.phoneHref} className="hover:text-white">
                  ({site.phone.slice(0, 3)}) {site.phone.slice(4)}
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <SocialIcons />
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-4 text-center text-xs text-white/45">
        Copyright © {new Date().getFullYear()}. All Rights Reserved.
      </div>
    </footer>
  );
}
