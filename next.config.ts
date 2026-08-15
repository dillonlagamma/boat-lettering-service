import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/portfolio.html", destination: "/portfolio", permanent: true },
      { source: "/contactus.html", destination: "/contact", permanent: true },
      { source: "/sitemap.html", destination: "/sitemap", permanent: true },
      { source: "/striping.html", destination: "/striping", permanent: true },
      { source: "/aboutus.html", destination: "/about", permanent: true },
    ];
  },
};

export default nextConfig;
