import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { site } from "@/lib/site";

export const dynamic = "force-dynamic";

const routes = ["", "/about", "/portfolio", "/design", "/striping", "/contact"] as const;

const hosts = new Set([
  "www.boatletteringservice.com",
  "boatletteringservice.com",
]);

function sitemapBase(hostHeader: string | null) {
  const host = (hostHeader ?? "")
    .split(",")[0]
    ?.trim()
    .replace(/:\d+$/, "")
    .toLowerCase();

  if (host && hosts.has(host)) {
    return `https://${host}`;
  }

  return site.url;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const headerList = await headers();
  const base = sitemapBase(headerList.get("x-forwarded-host") ?? headerList.get("host"));

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date("2026-08-15"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
