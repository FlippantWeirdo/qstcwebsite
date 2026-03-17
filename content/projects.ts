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
      "Commissioning of BMS, Addressable Fire Detection, Novec Automatic Fire Fighting, VESDA Systems for Data Center",
    category: "Fire Safety",
    image: "/images/projects/enterprise.webp",
  },
  {
    title:
      "Reactivation & Upgrade of FOAM Automatic Fire Fighting Solution for Data Center",
    category: "Fire Safety",
    image: "/images/projects/industrial.webp",
  },
  {
    title:
      "Upgrade of Addressable Fire Detection & Alarm Solution for Data Center",
    category: "Fire Safety",
    image: "/images/projects/residential.webp",
  },
  {
    title:
      "Supply & Installation of Automatic CO2 Fire Extinguishing System @ Mantrac for various off-grid Gen-sets for Seplat, Shell & NNPC",
    category: "Fire Safety",
    image: "/images/projects/enterprise.webp",
  },
  {
    title:
      "Commissioning of BMS, Addressable Fire Detection, Novec Automatic Fire Fighting, VESDA Systems for MainOne / Equinix, Lekki, Lagos",
    category: "Fire Safety",
    image: "/images/projects/residential.webp",
  },

  // ── Electrical "Power Systems" ──────────────────────────────
  {
    title:
      "15MVA 33/11KV Transformer Substation and MV Distribution Panels Supplying Power to a Military Base",
    category: "Electrical Power Systems",
    image: "/images/projects/industrial.webp",
  },
  {
    title:
      "5 x 2MW MWM 11KV Gas Generators complete with Synchronization and Distribution Panels, all Stepped up to 33KV through a 10.5MVA 11/33KV Transformer Installed at CELPLAS FZE Shagamu",
    category: "Electrical Power Systems",
    image: "/images/projects/enterprise.webp",
  },

  // ── Mechanical & Plumbing ──────────────────────────────────
  {
    title:
      "Supply & Installation of 500GPM & 300GPM Fire Pumps for Mamuda Beverages & Foods - Kano",
    category: "Mechanical & Plumbing",
    image: "/images/projects/industrial.webp",
  },
  {
    title:
      "CCHP System (Electrical Power, Waste Heat Recovery Boiler and Absorption Chiller) derived from a 1.5MW CAT Gas Generator Installed and Commissioned at Sweetco Foods",
    category: "Mechanical & Plumbing",
    image: "/images/projects/enterprise.webp",
  },
  {
    title:
      "Water treatment plant at Big Bottling Company Ltd, Agbara Ogun state",
    category: "Mechanical & Plumbing",
    image: "/images/projects/industrial.webp",
  },

  // ── ELV Systems ──────────────────────────────────────────────
  {
    title:
      "Supply & Installation of Public Address, Data/Voice, Projectors, FM200 Fire Extinguishing & IP CCTV System for Federal Judicial Service Commission's Training Centre, Abuja",
    category: "ELV Systems",
    image: "/images/projects/industrial.webp",
  },
  {
    title:
      "Supply & Installation of IP Closed Circuit TV & Addressable Fire Detection & Alarm System for Dubri Oil Head Office, VI, Lagos",
    category: "ELV Systems",
    image: "/images/projects/enterprise.webp",
  },
  {
    title:
      "Supply & Installation of campus-wide IP CCTV and Access Control for Julius Berger Services at Warri terminal",
    category: "ELV Systems",
    image: "/images/projects/residential.webp",
  },
  {
    title:
      "Supply & Installation of Explosion-proof IP Cameras for Dangote Refinery",
    category: "ELV Systems",
    image: "/images/projects/enterprise.webp",
  },
  {
    title: "Supply & Installation of CCTV for Shell RA's Helipad - Warri",
    category: "ELV Systems",
    image: "/images/projects/industrial.webp",
  },

  // ── Building Management Systems (BMS) ────────────────────────
  {
    title:
      "Supply & Installation of Building Management System (BMS) - SunCity, South Africa",
    category: "Building Management Systems",
    image: "/images/projects/enterprise.webp",
  },
  {
    title:
      "Data Center BMS for 14 remote locations - MTN Remote Hubs, South Africa",
    category: "Building Management Systems",
    image: "/images/projects/industrial.webp",
  },
  {
    title:
      "Full BMS retrofit at Air Traffic Control Tower - Sydney Airport, Australia",
    category: "Building Management Systems",
    image: "/images/projects/residential.webp",
  },

  // ── IT Infrastructure ────────────────────────────────────────
  {
    title:
      "Supply & Installation of Structured Cabling and Data Center Infrastructure for MainOne/Equinix, Lekki, Lagos",
    category: "IT Infrastructure",
    image: "/images/projects/enterprise.webp",
  },
  {
    title:
      "Network Infrastructure Upgrade for Federal Judicial Service Commission's Training Centre, Abuja",
    category: "IT Infrastructure",
    image: "/images/projects/industrial.webp",
  },
];

/**
 * Derived list of unique categories for the section headings.
 */
export const categories = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
];
