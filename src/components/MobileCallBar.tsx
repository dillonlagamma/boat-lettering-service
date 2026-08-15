import Link from "next/link";
import { site } from "@/lib/site";

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex gap-2 border-t border-navy/10 bg-white/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur md:hidden">
      <a
        href={site.phoneHref}
        className="flex min-h-11 flex-1 items-center justify-center rounded-md bg-navy px-2 text-center text-sm font-semibold text-white"
      >
        <span className="sm:hidden">Call</span>
        <span className="hidden sm:inline">Call {site.phone}</span>
      </a>
      <Link href="/contact" className="btn-blue flex-1 px-2">
        Get A Quote
      </Link>
    </div>
  );
}
