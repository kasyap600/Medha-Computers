export type Testimonial = {
  /** English quote (always shown; secondary when `quoteTe` is set). */
  quote: string;
  /** Telugu line — shown first when local trust matters. */
  quoteTe?: string;
  name: string;
  role: string;
  year?: string;
  credential?: string;
  initials: string;
  /** e.g. `/testimonials/ravi.jpg` — only with consent. */
  photoSrc?: string;
  photoAlt?: string;
};

export const testimonials: Testimonial[] = [
  {
    quoteTe:
      "మేధాలో నేర్చుకున్న స్పష్టమైన బలమైన ఆధారాల వల్ల నేను క్లౌడ్ మరియు ఎంటర్‌ప్రైజ్ టెక్నాలజీ రోల్స్ వైపు అడుగులు వేయగలిగాను.",
    quote:
      "The strong fundamentals and practical approach at Medha Computers helped me grow step by step into cloud and enterprise technology roles.",
    name: "Saketh G.",
    role: "Cloud Consultant, OpenText",
    year: "2025",
    credential: "Medha Computers alumnus",
    initials: "SG",
    photoSrc: "/testimonials/saketh.png",
    photoAlt: "Saketh G. — Cloud Consultant, Medha Computers alumnus",
  },
  {
    quoteTe:
      "క్లియర్ బోధన మరియు ప్రాక్టికల్ సపోర్ట్ వల్ల నేను ప్రొఫెషనల్ కమ్యూనికేషన్ మరియు కస్టమర్ ఫోకస్‌తో కూడిన రోల్స్‌కి సిద్ధమయ్యాను.",
    quote:
      "Medha Computers gave me a solid base in computer skills and confidence—skills I still build on today in a global customer-facing role.",
    name: "Nikhil Kumar M.",
    role: "Customer Success Manager",
    year: "2019",
    credential: "Medha Computers alumnus",
    initials: "NKM",
    photoSrc: "/testimonials/nikhil.png",
    photoAlt: "Nikhil Kumar M. — Customer Success Manager, Medha Computers alumnus",
  },
  {
    quote:
      "I had a very good experience during my computer course at Medha Computers, which I completed between my intermediate and B.Tech studies. This made it much easier for me to understand the subjects during my B.Tech. The training was easy to understand and helped me to learn useful skills. The course also improved my confidence and supported my overall career growth in the IT field.",
    name: "Y.C. Bindu Priya",
    role: "Software Engineer",
    year: "2021",
    credential: "Medha Computers alumnus",
    initials: "YB",
    photoSrc: "/testimonials/bindu.png",
    photoAlt: "Y.C. Bindu Priya — Software Engineer, Medha Computers alumnus",
  },
  {
    quote:
      "Training at Medha Computers was practical and easy to follow. I learned skills I could use right away, and the supportive teaching helped me grow confident with computers and technology.",
    name: "Rishitha G.C.V",
    role: "Senior Process Associate",
    year: "2022",
    credential: "Medha Computers alumnus",
    initials: "RG",
    photoSrc: "/testimonials/rishi.png",
    photoAlt: "Rishitha G.C.V — Senior Process Associate, Medha Computers alumnus",
  },
];

export type TrustHighlight = {
  label: string;
  detail: string;
  /** Renders `site.isoLogo` in Why Medha trust strip. */
  showIsoLogo?: boolean;
};

export const trustHighlights: readonly TrustHighlight[] = [
  { label: "Since 1995", detail: "Three decades in Nayudupeta" },
  { label: "ISO 9001:2015", detail: "Certified quality system", showIsoLogo: true },
  { label: "Batches", detail: "Morning & evening (Mon–Sat)" },
] as const;
