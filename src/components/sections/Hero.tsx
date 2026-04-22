import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { site } from "../../data/site";
import { ButtonLink } from "../ui/ButtonLink";
import { BrandLockup } from "../ui/BrandLockup";

const floaters = [
  { className: "left-[8%] top-[18%] h-48 w-48", delay: 0 },
  { className: "right-[5%] top-[28%] h-64 w-64", delay: 0.3 },
  { className: "bottom-[12%] left-[20%] h-40 w-40", delay: 0.6 },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-primary pb-20 pt-28 md:pb-28 md:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-hero" />
      {floaters.map((f, i) => (
        <motion.div
          key={i}
          className={`pointer-events-none absolute rounded-full bg-gradient-to-br from-accent-from/30 to-transparent blur-3xl ${f.className}`}
          animate={{ y: [0, -14, 0], scale: [1, 1.04, 1] }}
          transition={{
            duration: 9 + i,
            delay: f.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm text-white/55 md:mb-5 md:text-base">
            Trusted for 30 years · Est. {site.established} · {site.iso}
          </p>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.03, duration: 0.5 }}
            className="mx-auto max-w-5xl border-b border-white/10 pb-5 text-balance md:pb-6"
          >
            <BrandLockup variant="hero" />
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mt-5"
          >
            <p className="text-lg text-white/85 md:text-xl lg:text-2xl">{site.tagline}</p>
            <p className="mt-3 text-balance text-sm text-white/60 md:text-base">{site.subhead}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.5 }}
            className="mt-4"
          >
            <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium text-accent-to backdrop-blur-sm md:mt-5">
              <Sparkles className="h-3.5 w-3.5" aria-hidden />
              Job-oriented · Hands-on · Supportive
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4"
          >
            <ButtonLink
              href="#courses"
              variant="secondary"
              className="px-8 py-3.5 text-base"
            >
              Browse courses
            </ButtonLink>
            <ButtonLink
              href="#contact"
              variant="primary"
              className="px-8 py-3.5 text-base"
            >
              Enroll now
            </ButtonLink>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
