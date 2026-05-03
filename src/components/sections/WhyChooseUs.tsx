import { motion } from "framer-motion";
import {
  BookOpen,
  CalendarCheck,
  Cpu,
  HandCoins,
  LineChart,
  Heart,
} from "lucide-react";
import { site } from "../../data/site";
import { trustHighlights } from "../../data/testimonials";
import { SectionHeading } from "../ui/SectionHeading";

const items = [
  {
    title: "30+ years of experience",
    text: "Proven track record and teaching systems refined over three decades.",
    icon: BookOpen,
  },
  {
    title: "Low fees & installments",
    text: "Quality training that fits family budgets, with easy payment options.",
    icon: HandCoins,
  },
  {
    title: "1:1 computer access",
    text: "Every learner gets real hands-on time — no long waiting for a system.",
    icon: Cpu,
  },
  {
    title: "Weekly tests",
    text: "Regular checks so you know your progress and close gaps early.",
    icon: CalendarCheck,
  },
  {
    title: "Career guidance",
    text: "Honest direction on next steps, interviews, and skill focus areas.",
    icon: LineChart,
  },
  {
    title: "Meditation classes",
    text: "A calm mind learns better — a unique part of our student support.",
    icon: Heart,
  },
] as const;

export function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="border-y border-primary/5 bg-surface py-section md:py-section-md"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Why Medha"
          title="Why thousands trust us"
          subtitle="We combine strong basics with a supportive environment so school students, college learners, and job seekers can grow with confidence."
        />

        <ul className="mb-10 grid list-none grid-cols-1 gap-4 rounded-2xl border border-primary/6 bg-paper/80 p-4 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-primary/8 sm:p-5">
          {trustHighlights.map((h) => (
            <li
              key={h.label}
              className={
                h.showIsoLogo
                  ? "flex min-h-[3rem] flex-col items-center justify-center gap-2 px-2 text-center sm:flex-row sm:items-center sm:gap-3 sm:px-4 sm:text-left"
                  : "flex min-h-[3rem] flex-col justify-center px-2 text-center sm:px-4 sm:text-left"
              }
            >
              {h.showIsoLogo ? (
                <img
                  src={site.isoLogo}
                  alt=""
                  width={48}
                  height={48}
                  className="h-11 w-11 shrink-0 object-contain sm:h-12 sm:w-12"
                />
              ) : null}
              <div className={h.showIsoLogo ? "min-w-0" : undefined}>
                <span className="font-display text-xs font-bold uppercase tracking-wider text-accent-from">
                  {h.label}
                </span>
                <span className="mt-0.5 block text-sm text-primary/75">{h.detail}</span>
              </div>
            </li>
          ))}
        </ul>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="group rounded-2xl border border-primary/6 bg-paper p-6 shadow-card transition hover:shadow-card-hover"
              >
                <div className="mb-4 inline-flex rounded-xl bg-primary/5 p-3 text-primary transition group-hover:bg-primary/8">
                  <Icon className="h-6 w-6" strokeWidth={1.8} />
                </div>
                <h3 className="font-display text-lg font-semibold text-primary">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-primary/70">{item.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
