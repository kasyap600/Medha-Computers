export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    id: "fees",
    question: "How do I know the course fee and duration?",
    answer:
      "Fees and duration depend on the program. Message us on WhatsApp with the course name — we share the current fee structure and batch options for that program.",
  },
  {
    id: "timings",
    question: "What are the class timings?",
    answer:
      "We run morning and evening sessions on weekdays (see our hours on the contact section). Exact batch times change by course and season — ask on WhatsApp for the next start date.",
  },
  {
    id: "certification",
    question: "Do I get a certificate?",
    answer:
      "Yes. Students receive certification on successful completion of the course as per our assessment and attendance norms. We are ISO 9001:2015 certified.",
  },
  {
    id: "beginners",
    question: "I am a complete beginner. Where do I start?",
    answer:
      "Tell us your goal (school support, office job, programming, or AI). We recommend a path from our diplomas or short courses — many learners start with office or internet basics and move up.",
  },
  {
    id: "kids",
    question: "Do you offer programs for school students?",
    answer:
      "We have structured short courses and diploma paths that suit school-age learners. Mention the child’s class and interest when you contact us.",
  },
];
