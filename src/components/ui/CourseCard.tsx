import type { Course } from "../../data/courses";
import { ButtonLink } from "./ButtonLink";

type Props = { course: Course };

export function CourseCard({ course }: Props) {
  return (
    <article
      className="group flex h-full flex-col rounded-2xl border border-primary/8 bg-paper p-6 shadow-card transition duration-300 ease-out hover:-translate-y-1 hover:border-accent-from/20 hover:shadow-[0_12px_40px_rgba(11,31,58,0.1),0_0_0_1px_rgba(245,179,1,0.12)]"
    >
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-primary">
          {course.logoSrc ? (
            <span aria-hidden="true" className="inline-flex h-7 w-7 items-center justify-center overflow-hidden rounded-full bg-primary/5 p-1">
              <img src={course.logoSrc} alt="" className="h-full w-full object-contain" loading="lazy" />
            </span>
          ) : course.symbol ? (
            <span aria-hidden="true" className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/5 text-sm">
              {course.symbol}
            </span>
          ) : null}
          <span>{course.title}</span>
        </h3>
        <span className="shrink-0 rounded-full bg-primary/5 px-2.5 py-1 text-xs font-medium text-primary/80">
          {course.duration}
        </span>
      </div>
      <p className="mb-4 text-sm leading-relaxed text-primary/70">{course.description}</p>
      {course.topics && course.topics.length > 0 ? (
        <div className="mb-6 max-h-44 space-y-1.5 overflow-y-auto rounded-lg bg-surface/80 px-3 py-2.5 text-left ring-1 ring-primary/5">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-primary/45">Topics</p>
          <ul className="list-inside list-disc space-y-0.5 text-xs text-primary/75">
            {course.topics.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="mb-6 flex-1" />
      )}
      <ButtonLink href="#contact" variant="ghost" className="mt-auto w-full justify-center text-sm">
        Enquire about this course
      </ButtonLink>
    </article>
  );
}
