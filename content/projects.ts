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
      "Commissioning of BMS, Addressable Fire Detection, Novec Automatic Fire Fighting, VESDA Systems for a Data Center",
    category: "Fire Safety",
    image: "/images/projects/datacenter.webp",
  },
  {
    title:
      "Supply & Installation of Automatic CO2 Fire Extinguishing System for Off-Grid Power Gen-set",
    category: "Fire Safety",
    image: "/images/projects/genset.webp",
  },
  {
    title:
      "Installation and Commissioning of Industrial Kitchen Hood Fire Fighting System",
    category: "Fire Safety",
    image: "/images/LSG-Sky.webp",
  },

  // ── Electrical "Power Systems" ──────────────────────────────
  {
    title:
      "15MVA 33/11KV Transformer Substation and MV Distribution Panels Supplying Power to a Military Base",
    category: "Power & Electrical",
    image: "/images/projects/15mvatransformer.webp",
  },
  {
    title:
      "5 x 2MW MWM 11KV Gas Generators complete with Synchronization and Distribution Panels, all Stepped up to 33KV through a 10.5MVA 11/33KV Transformer Installed",
    category: "Power & Electrical",
    image: "/images/projects/11kvgasgen.webp",
  },

  // ── Mechanical & Plumbing ──────────────────────────────────
  {
    title:
      "Supply & Installation of 500GPM & 300GPM Fire Pumps for Beverages & Foods company",
    category: "Mechanical & Plumbing",
    image: "/images/projects/Mamuda-Industries.webp",
  },
  {
    title:
      "CCHP System (Electrical Power, Waste Heat Recovery Boiler and Absorption Chiller) derived from a 1.5MW CAT Gas Generator Installed and Commissioned",
    category: "Mechanical & Plumbing",
    image: "/images/projects/cchp.webp",
  },
  {
    title: "Water treatment plant at Bottling Company Ltd",
    category: "Mechanical & Plumbing",
    image: "/images/piping-1.png",
  },

  // ── ELV Systems ──────────────────────────────────────────────
  {
    title:
      "Supply & Installation of Public Address, Data/Voice, IP CCTV System for a Multistorey Residential Building",
    category: "ELV Systems",
    image: "/images/projects/edenheights.webp",
  },
  {
    title:
      "Supply & Installation of IP Closed Circuit TV & Addressable Fire Detection & Alarm System at a Multinational Oil & Gas Company's HQ",
    category: "ELV Systems",
    image: "/images/projects/octagontower.webp",
  },
  {
    title: "Supply & Installation of campus-wide IP CCTV and Access Control",
    category: "ELV Systems",
    // add julius berger image
    image: "/images/projects/ckcc.webp",
  },

  // ── IT Infrastructure ────────────────────────────────────────

  {
    title:
      "Installation and Commissioning of Network Infrastructure, IP CCTV,Voice Evacuation and Access Control Systems for a Government Parastatal Training Centre",
    category: "IT Infrastructure",
    image: "/images/projects/IT-infrastructure.webp",
  },
  {
    title:
      "Installation and Commissioning of CCTV, Fire, IT Networking, Home auotmation, Cinema and Conference system at residential building",
    category: "IT Infrastructure",
    image: "/images/projects/rdhouse.webp",
  },
  {
    title:
      "Installation and Commissioning of IT Networking, IP CCTV and Addressable Fire Alarm System at hotel",
    category: "IT Infrastructure",
    image: "/images/projects/Intercontinental-Hotel.webp",
  },
];

/**
 * Derived list of unique categories for the section headings.
 */
export const categories = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
];
