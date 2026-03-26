import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/about-us",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/our-soutions",
        destination: "/projects",
        permanent: true,
      },
      {
        source: "/electrical-power-systems",
        destination: "/services/electric-power-solutions",
        permanent: true,
      },
      {
        source: "/low-voltage-security-systems",
        destination: "/services/elvsystems",
        permanent: true,
      },
      {
        source: "/it-infrastructure-solutions",
        destination: "/services/it-infrastructure",
        permanent: true,
      },
    ];
  },
  /* config options here */
};

export default nextConfig;
