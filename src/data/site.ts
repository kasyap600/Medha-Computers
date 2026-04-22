export const site = {
  name: "Medha Computers",
  tagline: "30 Years of Excellence. Now Powered by AI.",
  subhead:
    "Learn job-ready skills in AI, Programming, and Technology from a trusted institute since 1995.",
  established: 1995,
  area: "Nayudupeta",
  addressLine: "Nayudupeta, Andhra Pradesh, India",
  phoneDisplay: "+91 92926 04748",
  phoneTel: "+919292604748",
  /** Shown next to WhatsApp / enquiry; chat opens this number. */
  whatsappDisplay: "+91 94932 38626",
  whatsappE164: "919493238626",
  whatsappHref: "https://wa.me/919493238626",
  hours: "Mon–Sat: 9:00 AM – 12:00 PM, 4:00 PM – 8:00 PM",
  mapUrl: "https://maps.app.goo.gl/KZANA8VouraMPLC76",
  mapEmbedQuery: "Nayudupeta, Andhra Pradesh, India",
  brochureUrl: "",
  iso: "ISO 9001:2015 Certified",
  /**
   * Institute logo in About → Certifications (source: LOGO-3.tif → `npm run branding:convert` → `public/branding/logo-3.webp`).
   */
  certificationsInstituteLogo: {
    image: "/branding/logo-3.webp",
    title: "MSME Recognition",
    blurb: "Recognized under MSME, supporting skill development and employment-focused computer education.",
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
  { href: "#courses", label: "Courses" },
  { href: "#why-us", label: "Why Us" },
  { href: "#faq", label: "FAQ" },
  { href: "#ai", label: "AI" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
] as const;

export const quickLinks = [
  { href: "#courses", label: "Courses" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Enroll" },
  { href: "#ai", label: "AI programs" },
] as const;
