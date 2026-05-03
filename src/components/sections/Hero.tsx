import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { site, valueBullets } from "../../data/site";
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
          <p className="mb-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-white/55 md:mb-5 md:text-base">
            <span className="text-center">
              Trusted for 30 years · Est. {site.established} ·
            </span>
            <span className="inline-flex items-center gap-1.5">
              <img
                src={site.isoLogo}
                alt=""
                width={32}
                height={32}
                className="h-7 w-7 shrink-0 object-contain opacity-95 md:h-8 md:w-8"
              />
              <span>{site.iso}</span>
            </span>
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

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.5 }}
            className="mx-auto mt-6 max-w-2xl text-center font-display text-sm font-semibold text-white/90 md:text-base"
          >
            Why join {site.name}?
          </motion.p>
          <motion.ul
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.5 }}
            className="mx-auto mt-4 grid max-w-3xl list-none grid-cols-1 gap-2.5 p-0 text-left sm:grid-cols-2"
          >
            {valueBullets.map((row) => (
              <li
                key={row.en}
                className="flex gap-3 rounded-xl border border-white/12 bg-white/[0.06] px-3 py-2.5 backdrop-blur-sm sm:px-4 sm:py-3"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-from/25 text-white">
                  <Check className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden />
                </span>
                <span>
                  <span className="block text-sm font-medium leading-snug text-white">{row.en}</span>
                  <span className="mt-0.5 block text-xs leading-snug text-white/70" lang="te">
                    {row.te}
                  </span>
                </span>
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4"
          >
            <ButtonLink
              href="#contact"
              variant="primary"
              className="px-8 py-3.5 text-base"
            >
              Join today
            </ButtonLink>
            <ButtonLink href="#courses" variant="secondary" className="px-8 py-3.5 text-base">
              Browse courses
            </ButtonLink>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.32, duration: 0.45 }}
            className="mt-4 text-center text-xs font-medium text-accent-to/95 md:text-sm"
          >
            {site.feesOffers.urgencyLine}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
