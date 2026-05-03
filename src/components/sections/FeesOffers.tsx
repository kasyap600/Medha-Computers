import { motion } from "framer-motion";
import { IndianRupee, MessageCircle, Phone, Sparkles } from "lucide-react";
import { site } from "../../data/site";
import { SectionHeading } from "../ui/SectionHeading";
import { ButtonLink } from "../ui/ButtonLink";

const waHref = `${site.whatsappHref}?text=${encodeURIComponent(site.whatsappPrefillDefault)}`;

export function FeesOffers() {
  const { feesOffers: f } = site;

  return (
    <section id="fees" className="border-y border-primary/6 bg-gradient-to-b from-accent-from/[0.06] to-paper py-section md:py-section-md">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading eyebrow={f.eyebrow} title={f.title} subtitle={f.subtitle} />

        <ul className="mb-10 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-3">
          {f.bullets.map((b, i) => (
            <motion.li
              key={b.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="flex gap-3 rounded-2xl border border-primary/8 bg-paper/90 p-5 shadow-card"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/8 text-accent-from">
                <IndianRupee className="h-5 w-5" strokeWidth={1.75} aria-hidden />
              </span>
              <div>
                <p className="font-display text-sm font-semibold text-primary">{b.label}</p>
                <p className="mt-1 text-sm leading-relaxed text-primary/70">{b.detail}</p>
              </div>
            </motion.li>
          ))}
        </ul>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="flex flex-col items-stretch gap-4 rounded-2xl border border-primary/10 bg-primary px-5 py-6 text-white shadow-card sm:flex-row sm:items-center sm:justify-between sm:px-8"
        >
          <div className="flex items-start gap-3">
            <Sparkles className="mt-0.5 h-6 w-6 shrink-0 text-accent-to" aria-hidden />
            <div>
              <p className="font-display text-lg font-semibold">{f.urgencyLine}</p>
              <p className="mt-1 text-sm text-white/75">
                Call <span className="font-medium text-white">{site.phoneDisplay}</span> · WhatsApp{" "}
                <span className="font-medium text-white">{site.whatsappDisplay}</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 sm:shrink-0 sm:flex-row">
            <a
              href={`tel:${site.phoneTel}`}
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-primary shadow-md transition hover:bg-white/90"
            >
              <Phone className="h-4 w-4" aria-hidden />
              {f.ctaCallLabel}
            </a>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-white/25 bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:brightness-110"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              {f.ctaWhatsappLabel}
            </a>
            <ButtonLink href="#contact" variant="secondary" className="min-h-[48px] justify-center">
              Visit &amp; enroll
            </ButtonLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
