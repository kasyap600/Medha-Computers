import { site } from "../../data/site";
import type { Testimonial } from "../../data/testimonials";
import { testimonials } from "../../data/testimonials";
import { SectionHeading } from "../ui/SectionHeading";

const avatarShell =
  "float-left mr-3 mb-1 mt-0.5 h-12 w-12 shrink-0 rounded-sm border border-primary/20 bg-surface";

function TestimonialCard({
  t,
  duplicate,
  fillGrid,
}: {
  t: Testimonial;
  duplicate?: boolean;
  /** Full width inside stacked / grid layout (reduced motion). */
  fillGrid?: boolean;
}) {
  return (
    <blockquote
      className={`relative shrink-0 overflow-hidden rounded-xl border border-primary/10 bg-paper shadow-sm ${
        fillGrid ? "w-full max-w-lg" : "w-[min(88vw,300px)] sm:w-[320px]"
      }`}
      aria-hidden={duplicate ? true : undefined}
    >
      <div className="flow-root p-4">
        {t.photoSrc ? (
          <img
            src={t.photoSrc}
            alt={duplicate ? "" : t.photoAlt ?? `${t.name}`}
            className={`${avatarShell} object-cover`}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div
            className={`${avatarShell} flex items-center justify-center font-display text-[11px] font-bold text-primary`}
            aria-hidden
          >
            {t.initials}
          </div>
        )}

        <p className="font-display text-sm font-semibold leading-snug text-primary">– {t.name}</p>
        <p className="text-xs leading-snug text-primary sm:text-sm">
          {t.role}
          {t.year ? ` · ${t.year}` : null}
        </p>
        {t.credential ? (
          <p className="mt-0.5 text-[11px] leading-snug text-primary/45">{t.credential}</p>
        ) : null}

        {t.quoteTe ? (
          <p className="mt-3 text-xs leading-relaxed text-primary/55 sm:text-sm" lang="te">
            “{t.quoteTe}”
          </p>
        ) : null}
        <p
          className={`text-xs leading-relaxed text-primary/45 sm:text-sm ${
            t.quoteTe ? "mt-1.5" : "mt-3"
          }`}
        >
          {t.quoteTe ? <span className="text-primary/35">English: </span> : null}“{t.quote}”
        </p>
      </div>
    </blockquote>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-paper py-section md:py-section-md">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Our students"
          title="Our students’ success"
          subtitle="Telugu and English — our alumni in technology, cloud, and global customer success."
        />

        {/* Continuous horizontal scroll (paused on hover); duplicate strip hidden from assistive tech */}
        <div className="motion-reduce:hidden relative -mx-4 md:-mx-6">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-10 bg-gradient-to-r from-paper to-transparent md:w-14"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-10 bg-gradient-to-l from-paper to-transparent md:w-14"
            aria-hidden
          />
          <div className="overflow-hidden pb-1 pt-1">
            <div className="medha-testimonial-marquee-track flex w-max gap-4 md:gap-5">
              {testimonials.map((t) => (
                <TestimonialCard key={`${t.initials}-a`} t={t} />
              ))}
              {testimonials.map((t) => (
                <TestimonialCard key={`${t.initials}-b`} t={t} duplicate />
              ))}
            </div>
          </div>
        </div>

        {/* Stacked list when user prefers reduced motion — matches compact reference layout */}
        <div className="mx-auto hidden max-w-lg flex-col gap-4 motion-reduce:flex">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name + t.initials} t={t} fillGrid />
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-primary/50">
          Building skills and careers in {site.area} since {site.established}.
        </p>
      </div>
    </section>
  );
}
