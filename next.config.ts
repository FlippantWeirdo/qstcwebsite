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
        source: "/our-solutions",
        destination: "/projects",
        permanent: true,
      },
      {
        source: "/electrical-power-systems",
        destination: "/electric-power-solutions",
        permanent: true,
      },
      {
        source: "/low-voltage-security-systems",
        destination: "/elvsystems",
        permanent: true,
      },
      {
        source: "/it-infrastructure-solutions",
        destination: "/it-infrastructure",
        permanent: true,
      },
    ];
  },
  /* config options here */
};

export default nextConfig;
