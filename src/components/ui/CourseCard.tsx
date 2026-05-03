import { Check } from "lucide-react";
import type { Course } from "../../data/courses";
import { ButtonLink } from "./ButtonLink";

type Props = { course: Course };

export function CourseCard({ course }: Props) {
  const hasTopics = course.topics && course.topics.length > 0;
  const hasSuitable = course.suitableFor && course.suitableFor.length > 0;
  const needsSpacer = !hasTopics && !hasSuitable;

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-paper p-6 shadow-card transition duration-300 ease-out hover:-translate-y-1 hover:border-accent-from/35 hover:shadow-[0_12px_40px_rgba(30,58,138,0.1),0_0_0_1px_rgba(37,99,235,0.22)] ${
        course.badge
          ? "border-accent-from/25 ring-1 ring-accent-from/20"
          : "border-primary/8"
      }`}
    >
      {course.badge ? (
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent-from to-accent-to"
          aria-hidden
        />
      ) : null}
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <h3 className="flex flex-wrap items-center gap-2 font-display text-lg font-semibold text-primary">
          {course.logoSrc ? (
            <span
              aria-hidden="true"
              className="inline-flex h-7 w-7 items-center justify-center overflow-hidden rounded-full bg-primary/5 p-1"
            >
              <img src={course.logoSrc} alt="" className="h-full w-full object-contain" loading="lazy" />
            </span>
          ) : course.symbol ? (
            <span
              aria-hidden="true"
              className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/5 text-sm"
            >
              {course.symbol}
            </span>
          ) : null}
          <span>{course.title}</span>
          {course.badge ? (
            <span className="inline-flex items-center rounded-full bg-gradient-cta px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white shadow-sm shadow-black/10">
              {course.badge}
            </span>
          ) : null}
        </h3>
        <span className="shrink-0 rounded-full bg-primary/5 px-2.5 py-1 text-xs font-medium text-primary/80">
          {course.duration}
        </span>
      </div>
      <p className="mb-4 text-sm leading-relaxed text-primary/70">{course.description}</p>
      {hasTopics ? (
        <div
          className={`max-h-44 space-y-1.5 overflow-y-auto rounded-lg bg-surface/80 px-3 py-2.5 text-left ring-1 ring-primary/5 ${hasSuitable ? "mb-4" : "mb-6"}`}
        >
          <p className="text-[10px] font-semibold uppercase tracking-wider text-primary/45">You will learn</p>
          <ul className="list-none space-y-1 text-xs text-primary/75">
            {course.topics!.map((t) => (
              <li key={t} className="flex gap-2">
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent-from" strokeWidth={2.5} aria-hidden />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {hasSuitable ? (
        <div
          className={`mb-6 space-y-1.5 rounded-lg bg-primary/[0.04] px-3 py-2.5 ring-1 ring-primary/6 ${hasTopics ? "" : "mt-0"}`}
        >
          <p className="text-[10px] font-semibold uppercase tracking-wider text-primary/45">Suitable for</p>
          <ul className="list-none space-y-1 text-xs text-primary/75">
            {course.suitableFor!.map((s) => (
              <li key={s} className="flex gap-2">
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent-from/80" strokeWidth={2.5} aria-hidden />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : needsSpacer ? (
        <div className="mb-6 flex-1" />
      ) : null}
      <div className="mt-auto">
        <ButtonLink href="#contact" variant="primary" className="w-full justify-center text-sm">
          Join today — limited seats
        </ButtonLink>
      </div>
    </article>
  );
}
