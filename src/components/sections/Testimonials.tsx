import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { site } from "../../data/site";
import { testimonials } from "../../data/testimonials";
import { SectionHeading } from "../ui/SectionHeading";

const bubble =
  "flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-cta/25 font-display text-sm font-bold text-primary ring-2 ring-paper";

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-paper py-section md:py-section-md">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Learners"
          title="People love learning here"
          subtitle="Trusted by thousands of students over the years — a few kind words in their own style."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.name + t.initials}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-32px" }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="flex h-full flex-col rounded-2xl border border-primary/6 bg-surface/80 p-6 shadow-card"
            >
              <div className="flex items-start justify-between gap-3">
                <div className={bubble} aria-hidden>
                  {t.initials}
                </div>
                <Quote className="h-7 w-7 shrink-0 text-accent-from/45" aria-hidden strokeWidth={1.5} />
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-primary/80">“{t.quote}”</p>
              <footer className="mt-5 border-t border-primary/6 pt-4">
                <p className="font-display font-semibold text-primary">{t.name}</p>
                <p className="text-xs text-primary/55">
                  {t.role}
                  {t.year ? ` · ${t.year}` : null}
                </p>
                {t.credential ? (
                  <p className="mt-1 text-xs font-medium text-primary/45">{t.credential}</p>
                ) : null}
              </footer>
            </motion.blockquote>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-primary/50">
          Trusted by thousands of students in and around {site.area}.
        </p>
      </div>
    </section>
  );
}
