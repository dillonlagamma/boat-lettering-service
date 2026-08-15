import type { Metadata, Viewport } from "next";
import { Montserrat, Outfit } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileCallBar } from "@/components/MobileCallBar";
import { site } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["600", "700", "800"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Boat Lettering Service | South Florida Since 1987",
    template: "%s | Boat Lettering Service",
  },
  description: site.description,
  keywords: [
    "finest in boat lettering",
    "South Florida",
    "boat signs",
    "boat striping",
    "boat designs",
    "boat graphics",
    "boat names",
    "boat decals",
    "vinyl wraps",
    "Fort Lauderdale",
  ],
  openGraph: {
    title: "Boat Lettering Service | South Florida Since 1987",
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${outfit.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden bg-white text-ink">
        <Header />
        <main className="min-w-0 flex-1">{children}</main>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}
