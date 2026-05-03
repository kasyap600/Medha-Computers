import { motion } from "framer-motion";
import { Rocket, Sparkles, Zap } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { ButtonLink } from "../ui/ButtonLink";

const combos = [
  { title: "AI + Python", blurb: "Data, automation, and next-step skills in one path." },
  { title: "AI + Web Dev", blurb: "Build faster, learn design patterns with smart assistance." },
  { title: "AI + Java", blurb: "Strong engineering habits plus modern AI tools." },
];

export function AIHighlight() {
  return (
    <section
      id="ai"
      className="relative overflow-hidden bg-primary py-section text-white md:py-section-md"
    >
      <div className="pointer-events-none absolute -left-1/3 top-0 h-96 w-96 rounded-full bg-accent-from/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-1/4 bottom-0 h-80 w-80 rounded-full bg-accent-to/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-dark" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Introducing AI"
          title="Now enrolling — AI courses & combinations"
          subtitle="AI careers are growing in India and around the world. We teach how to use AI safely and effectively, plus the programming foundations employers still value."
          dark
          action={
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-medium text-accent-to backdrop-blur">
              <Rocket className="h-4 w-4" />
              Enroll in AI & combos
            </span>
          }
        />

        <div className="grid gap-5 md:grid-cols-3">
          {combos.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur-md transition hover:border-accent-from/40"
            >
              <div className="mb-3 flex items-center gap-2">
                {i === 0 ? (
                  <Sparkles className="h-5 w-5 text-accent-to" />
                ) : i === 1 ? (
                  <Zap className="h-5 w-5 text-accent-to" />
                ) : (
                  <Rocket className="h-5 w-5 text-accent-to" />
                )}
                <h3 className="font-display text-lg font-semibold">{c.title}</h3>
              </div>
              <p className="text-sm text-white/75">{c.blurb}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <ButtonLink href="#contact" variant="primary" className="shadow-lg">
            Talk to us about AI programs
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
