"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandMark } from "@/components/BrandMark";
import { SocialIcons } from "@/components/SocialIcons";
import { nav, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-navy-deep text-white">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-3 px-4 py-2 text-[0.72rem] sm:px-5 sm:text-[0.78rem]">
          <div className="flex min-w-0 items-center gap-x-4">
            <a
              href={site.emailHref}
              className="hidden min-w-0 items-center gap-2 hover:text-blue sm:inline-flex"
            >
              <MailIcon />
              <span className="truncate">{site.email}</span>
            </a>
            <a href={site.phoneHref} className="inline-flex shrink-0 items-center gap-2 hover:text-blue">
              <PhoneIcon />
              {site.phone}
            </a>
          </div>
          <div className="hidden sm:block">
            <SocialIcons />
          </div>
        </div>
      </div>

      <div className="border-b border-navy/8 bg-white">
        <div className="mx-auto flex h-[4.25rem] max-w-[1280px] items-center justify-between gap-3 px-4 sm:h-[4.75rem] sm:px-5">
          <BrandMark />

          <div className="flex shrink-0 items-center gap-2 sm:gap-4">
            <nav className="hidden items-center gap-5 xl:flex">
              {nav.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-[0.78rem] font-semibold uppercase tracking-[0.12em] ${
                      active ? "text-blue-mid" : "text-navy/70 hover:text-navy"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <Link href="/contact" className="btn-blue hidden px-3 sm:inline-flex lg:px-5">
              Contact Us
            </Link>
            <button
              type="button"
              className="grid h-11 w-11 place-items-center text-navy xl:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="relative block h-3.5 w-5">
                <span
                  className={`absolute left-0 top-0 h-0.5 w-full bg-current transition ${
                    open ? "top-1.5 rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[6px] h-0.5 w-full bg-current transition ${
                    open ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[12px] h-0.5 w-full bg-current transition ${
                    open ? "top-1.5 -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {open && (
          <div className="max-h-[calc(100dvh-12.5rem)] overflow-y-auto border-t border-navy/8 bg-white px-5 py-5 pb-[calc(1.25rem+5.5rem)] xl:hidden">
            <nav className="flex flex-col">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-11 items-center font-display text-lg font-semibold uppercase"
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/contact" className="btn-blue mt-3 w-full" onClick={() => setOpen(false)}>
                Contact Us
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 shrink-0 fill-current" aria-hidden>
      <path d="M2 5.5A1.5 1.5 0 0 1 3.5 4h13A1.5 1.5 0 0 1 18 5.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 2 14.5v-9zm1.6.5 6.4 4.4L16.4 6H3.6zm13 1.3-6.2 4.2a1.2 1.2 0 0 1-1.4 0L2.8 7.3v7.2h13.8V7.3z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 shrink-0 fill-current" aria-hidden>
      <path d="M4.6 2.8c.3-.3.8-.4 1.2-.2l2.4 1c.4.2.7.6.7 1.1l-.2 2.2c0 .3-.2.6-.5.8l-1.2.8a10.4 10.4 0 0 0 5.3 5.3l.8-1.2c.2-.3.5-.5.8-.5l2.2-.2c.5 0 .9.3 1.1.7l1 2.4c.2.4.1.9-.2 1.2l-1.4 1.4c-.4.4-1 .6-1.6.5C8.3 17.5 2.5 11.7 2 5.8c-.1-.6.1-1.2.5-1.6L4.6 2.8z" />
    </svg>
  );
}
