/** Hero checklist — English line with optional Telugu for local trust. */
export const valueBullets = [
  { en: "100% practical training", te: "100% ప్రాక్టికల్ శిక్షణ" },
  { en: "Telugu + English explanation", te: "తెలుగు + ఇంగ్లీష్ వివరణ" },
  { en: "Job-oriented courses", te: "ఉద్యోగాత్మక కోర్సులు" },
  { en: "Small batches — individual attention", te: "చిన్న బ్యాచ్లు — ప్రత్యేక శ్రద్ధ" },
  { en: "30+ years of trusted teaching (since 1995)", te: "30+ సంవత్సరాల నమ్మకమైన బోధన (1995 నుండి)" },
  { en: "Placement & career guidance", te: "ప్లేస్‌మెంట్ & కెరీర్ మార్గదర్శకత్వం" },
] as const;

export const site = {
  name: "Medha Computers",
  tagline: "30 Years of Excellence. Now Powered by AI.",
  subhead:
    "Learn job-ready skills in AI, Programming, and Technology from a trusted institute since 1995.",
  established: 1995,
  area: "Nayudupeta",
  /** Street line for Schema.org / Maps (building number may be added when confirmed). */
  streetAddress: "Brahmin Street",
  /** Full postal-style line for humans. */
  addressLine: "Brahmin Street, Nayudupeta, Andhra Pradesh, India",
  phoneDisplay: "+91 92926 04748",
  phoneTel: "+919292604748",
  /** Shown next to WhatsApp / enquiry; chat opens this number. */
  whatsappDisplay: "+91 94932 38626",
  whatsappE164: "919493238626",
  whatsappHref: "https://wa.me/919493238626",
  /** Official WhatsApp Channel (updates, announcements). */
  whatsappChannelHref: "https://whatsapp.com/channel/0029VbC1jQqBFLgYf7NmXP2d",
  hours: "Mon–Sat: 9:00 AM – 12:00 PM, 4:00 PM – 8:00 PM",
  mapUrl: "https://maps.app.goo.gl/KZANA8VouraMPLC76",
  mapEmbedQuery: "Medha Computers, Brahmin Street, Nayudupeta, Andhra Pradesh, India",
  /** Default text for floating WhatsApp and quick CTAs. */
  whatsappPrefillDefault: "I want course details",
  /** Fees / offers section (edit copy without touching components). */
  feesOffers: {
    eyebrow: "Fees & offers",
    title: "Affordable fees · Special help for students",
    subtitle:
      "No need to hesitate—ask on WhatsApp or visit us. Limited seats per batch.",
    bullets: [
      { label: "Affordable fees", detail: "Quality training that fits family budgets." },
      { label: "Student discount", detail: "Special concession for school & college students — ask when you visit." },
      { label: "Flexible batches", detail: "Morning and evening timings — choose what fits your schedule." },
    ] as const,
    ctaCallLabel: "Call now",
    ctaWhatsappLabel: "WhatsApp — fee & syllabus",
    urgencyLine: "Limited seats · Join today",
  },
  brochureUrl: "",
  iso: "ISO 9001:2015 Certified",
  /** ISO mark image (Hero trust line + About certifications). */
  isoLogo: "/branding/iso.webp",
  /**
   * Institute logo in About → Certifications (source: LOGO-3.tif → `npm run branding:convert` → `public/branding/logo-3.webp`).
   */
  certificationsInstituteLogo: {
    image: "/branding/logo-3.webp",
    title: "MSME Registered",
    blurb: "Registered under MSME, supporting skill development and employment-focused computer education.",
  },
  contactEmail: "",
  social: {
    facebook: "",
    instagram: "",
    youtube: "",
  },
} as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#ai", label: "AI" },
  { href: "#courses", label: "Courses" },
  { href: "#why-us", label: "Why Us" },
  { href: "#fees", label: "Fees" },
  { href: "#faq", label: "FAQ" },
  { href: "#testimonials", label: "Success" },
  { href: "#contact", label: "Contact" },
] as const;

export const quickLinks = [
  { href: "#ai", label: "AI programs" },
  { href: "#courses", label: "Courses" },
  { href: "#fees", label: "Fees" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Join today" },
] as const;
