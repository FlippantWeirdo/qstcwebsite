# QSTC Services Limited - Website Project Scope & Design Guide

## 1. Project Overview

The goal is to transition QSTC Services Limited from a legacy Google Sites platform to a high-performance, custom-built web application. This move eliminates monthly hosting overhead, improves SEO, and provides a sophisticated "engineering-grade" aesthetic comparable to global competitors like FHControls.

### The Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS + shadcn/ui
- **Animation:** GSAP (GreenSock Animation Platform)
- **Deployment:** Vercel (Free Tier)
- **Email:** Cloudflare Email Routing / Zoho (Budget-friendly alternatives to Google Workspace)

---

## 2. Project Scope

### Phase 1: Core Infrastructure

- **DNS Migration:** Pointing the Google/Squarespace domain to Vercel while preserving Google Workspace MX records.
- **SSG Setup:** Implementing Static Site Generation to ensure sub-1s load times.
- **Responsive Layout:** A "Mobile-First" approach ensuring the site looks elite on iPhones and Desktop monitors alike.

### Phase 2: Content & Pages

- **Hero Section:** High-impact value proposition with "Request a Consultation" CTA.
- **Service Matrix:** Detailed breakdown of ELV, Automation, and System Integration.
- **Project Portfolio:** A filterable gallery managed via **MDX files** for easy updates without a database.
- **Blog:** A blog section to share insights and updates.
- **Contact System:** Headless form integration via Formspree.

### Phase 3: Sophistication (GSAP)

- Implementation of smooth-scroll and scroll-triggered reveals to create a premium, "living" interface.

---

## 3. Color & Typography Guide

To maintain professional trust, the UI utilizes a **Technical Professional** palette derived from the QSTC logo.

### Brand Colors

| Role          | Color         | Hex / HSL | Usage                                 |
| :------------ | :------------ | :-------- | :------------------------------------ |
| **Primary**   | Action Blue   | `#3B82F6` | Primary Buttons, Links, Active States |
| **Secondary** | Deep Charcoal | `#111827` | Headings, Navigation, Heavy Text      |
| **Accent 1**  | Alert Red     | `#EF4444` | Small UI accents, Hover states        |
| **Accent 2**  | Signal Green  | `#22C55E` | Success states, Efficiency icons      |
| **Base**      | Studio White  | `#FFFFFF` | Backgrounds and White Space           |

### Typography

- **Headings:** `Geist Bold` or `Inter Bold` (Geometric, clean, authoritative).
- **Body:** `Inter Regular` (High readability for technical specs).

---

## 4. GSAP Animation Strategy

We are using GSAP to move beyond "static" web design. The focus is on **subtlety and precision**.

### Key Interactions

1. **The Staggered Entrance:**
   On page load, the Hero text and the three color blocks from the logo should "stagger" in.
   - _GSAP Tool:_ `gsap.from(".reveal", { y: 20, opacity: 0, stagger: 0.1 })`

2. **ScrollTriggered Service Cards:**
   As the user scrolls to the "Services" section, cards should fade in and shift slightly upward.
   - _GSAP Tool:_ `ScrollTrigger` plugin.

3. **The Infinite Partner Slider:**
   A seamless, non-stop loop of partner logos (Schneider, Honeywell, etc.).
   - _GSAP Tool:_ `gsap.to(".logo-track", { xPercent: -100, repeat: -1, ease: "none" })`

4. **Micro-Interactions:**
   Using the `useGSAP` hook for hover states on buttons to create a "magnetic" or "glow" effect using the Primary Blue.

and some more

---

## 5. Maintenance for the "Non-Dev"

To keep this low-maintenance for the family:

- **Updates:** New projects/blogs(images, text, etc) are added by creating a new `.mdx` file in `/src/content/projects/`.
<!-- - **Hosting:** $0/month as long as bandwidth stays under 100GB.
- **Security:** No database means no SQL injection risks; SSL is auto-renewed by Vercel. -->
