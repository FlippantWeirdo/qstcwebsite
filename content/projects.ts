export interface Project {
  title: string;
  category: string;
  image: string;
}

/**
 * Add new projects here — just provide a title, category, and image path.
 * Drop the image into public/images/projects/ and reference it below.
 */
export const projects: Project[] = [
  // ── Fire Safety ──────────────────────────────────────────────
  {
    title:
      "Commissioning of BMS, Addressable Fire Detection, Novec Automatic Fire Fighting, VESDA Systems for MainOne/Equinix, Lekki, Lagos - LG2",
    category: "Fire Safety",
    image: "/images/projects/enterprise.png",
  },
  {
    title:
      "Reactivation & Upgrade of FOAM Automatic Fire Fighting Solution for MainOne/Equinix Data Center - LG1",
    category: "Fire Safety",
    image: "/images/projects/industrial.png",
  },
  {
    title:
      "Upgrade of Addressable Fire Detection & Alarm Solution for MainOne/Equinix Data Center - LG2",
    category: "Fire Safety",
    image: "/images/projects/residential.png",
  },
  {
    title:
      "Supply & Installation of Automatic CO2 Fire Extinguishing System @ Mantrac for various off-grid Gen-sets for Seplat, Shell & NNPC",
    category: "Fire Safety",
    image: "/images/projects/enterprise.png",
  },
  {
    title:
      "Commissioning of Addressable Fire Detection, Novec Automatic Fire Fighting, VESDA Systems for Medallion/Digital Realty, Victoria Island, Lagos - LOS2",
    category: "Fire Safety",
    image: "/images/projects/residential.png",
  },
  {
    title:
      "Supply & Installation of 500GPM & 300GPM Fire Pumps for Mamuda Beverages & Foods - Kano",
    category: "Fire Safety",
    image: "/images/projects/industrial.png",
  },

  // ── ELV Systems ──────────────────────────────────────────────
  {
    title:
      "Supply & Installation of Public Address, Data/Voice, Projectors, FM200 Fire Extinguishing & IP CCTV System for Federal Judicial Service Commission's Training Centre, Abuja",
    category: "ELV Systems",
    image: "/images/projects/industrial.png",
  },
  {
    title:
      "Supply & Installation of IP Closed Circuit TV & Addressable Fire Detection & Alarm System for Dubri Oil Head Office, VI, Lagos",
    category: "ELV Systems",
    image: "/images/projects/enterprise.png",
  },
  {
    title:
      "Supply & Installation of campus-wide IP CCTV and Access Control for Julius Berger Services at Warri terminal",
    category: "ELV Systems",
    image: "/images/projects/residential.png",
  },
  {
    title:
      "Supply & Installation of Explosion-proof IP Cameras for Dangote Refinery",
    category: "ELV Systems",
    image: "/images/projects/enterprise.png",
  },
  {
    title: "Supply & Installation of CCTV for Shell RA's Helipad - Warri",
    category: "ELV Systems",
    image: "/images/projects/industrial.png",
  },

  // ── Building Management Systems (BMS) ────────────────────────
  {
    title:
      "Supply & Installation of Building Management System (BMS) - SunCity, South Africa",
    category: "Building Management Systems",
    image: "/images/projects/enterprise.png",
  },
  {
    title:
      "Data Center BMS for 14 remote locations - MTN Remote Hubs, South Africa",
    category: "Building Management Systems",
    image: "/images/projects/industrial.png",
  },
  {
    title:
      "Full BMS retrofit at Air Traffic Control Tower - Sydney Airport, Australia",
    category: "Building Management Systems",
    image: "/images/projects/residential.png",
  },

  // ── IT Infrastructure ────────────────────────────────────────
  {
    title:
      "Supply & Installation of Structured Cabling and Data Center Infrastructure for MainOne/Equinix, Lekki, Lagos",
    category: "IT Infrastructure",
    image: "/images/projects/enterprise.png",
  },
  {
    title:
      "Network Infrastructure Upgrade for Federal Judicial Service Commission's Training Centre, Abuja",
    category: "IT Infrastructure",
    image: "/images/projects/industrial.png",
  },
];

/**
 * Derived list of unique categories for the section headings.
 */
export const categories = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
];
