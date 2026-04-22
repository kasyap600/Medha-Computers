export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  year?: string;
  credential?: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "The trainers explain every topic clearly. I built confidence in Python and am preparing for better job options.",
    name: "Lakshmi P.",
    role: "Programming student",
    year: "2024",
    credential: "Python & C modules",
    initials: "LP",
  },
  {
    quote:
      "Fees are fair and the weekly tests keep us on track. I liked the 1:1 computer practice during lab hours.",
    name: "Ramesh K.",
    role: "DCA learner",
    year: "2023",
    credential: "Diploma in Computer Applications",
    initials: "RK",
  },
  {
    quote:
      "They guide careers honestly—not just software skills. The meditation sessions helped me focus for exams too.",
    name: "Sneha M.",
    role: "PGDCA graduate",
    year: "2022",
    credential: "Placed in office automation role",
    initials: "SM",
  },
];

export const trustHighlights = [
  { label: "Since 1995", detail: "Three decades in Nayudupeta" },
  { label: "ISO 9001:2015", detail: "Certified quality system" },
  { label: "Batches", detail: "Morning & evening (Mon–Sat)" },
] as const;
