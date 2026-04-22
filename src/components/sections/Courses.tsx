import { allCourses } from "../../data/courses";
import { CourseCard } from "../ui/CourseCard";
import { SectionHeading } from "../ui/SectionHeading";

export function Courses() {
  return (
    <section id="courses" className="bg-paper py-section md:py-section-md">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Programs"
          title="Courses designed for the real world"
          subtitle="From AI to diplomas, learn in a structured way with clear duration and support. Choose a course below to start your enrollment."
        />
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {allCourses.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
