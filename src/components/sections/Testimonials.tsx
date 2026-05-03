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
          eyebrow="Our students"
          title="Our students’ success"
          subtitle="Telugu and English — our alumni in technology, cloud, and global customer success."
        />

        <div className="mx-auto grid max-w-lg gap-5 md:max-w-6xl md:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.name + t.initials}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-32px" }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="flex h-full flex-col overflow-hidden rounded-2xl border border-primary/6 bg-surface/80 shadow-card"
            >
              {t.photoSrc ? (
                <div className="aspect-[4/3] w-full shrink-0 overflow-hidden bg-primary/5">
                  <img
                    src={t.photoSrc}
                    alt={t.photoAlt ?? `${t.name} — student`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ) : null}
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  {!t.photoSrc ? (
                    <div className={bubble} aria-hidden>
                      {t.initials}
                    </div>
                  ) : (
                    <span className="font-display text-xs font-bold uppercase tracking-wider text-accent-from">
                      {t.initials}
                    </span>
                  )}
                  <Quote className="h-7 w-7 shrink-0 text-accent-from/45" aria-hidden strokeWidth={1.5} />
                </div>
                {t.quoteTe ? (
                  <p className="mt-3 text-sm font-medium leading-relaxed text-primary" lang="te">
                    “{t.quoteTe}”
                  </p>
                ) : null}
                <p
                  className={`flex-1 text-sm leading-relaxed text-primary/75 ${t.quoteTe ? "mt-2" : "mt-3"}`}
                >
                  {t.quoteTe ? <span className="text-primary/50">English: </span> : null}“{t.quote}”
                </p>
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
              </div>
            </motion.blockquote>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-primary/50">
          Building skills and careers in {site.area} since {site.established}.
        </p>
      </div>
    </section>
  );
}
