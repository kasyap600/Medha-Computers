import { useState } from "react";
import { ScrollSection } from "../ui/ScrollSection";
import { SectionHeading } from "../ui/SectionHeading";

/** Add files under `public/` — missing images hide that tile (no broken icons). */
const shots = [
  {
    id: "office",
    src: "/office.jpeg",
    alt: "Medha Computers — classroom / office in Nayudupeta",
  },
  {
    id: "lab",
    src: "/lab.jpeg",
    alt: "Students practising hands-on at computer workstations",
  },
  {
    id: "teaching",
    src: "/teaching.jpeg",
    alt: "Instructor-led session — Telugu and English explanation",
  },
] as const;

function GalleryItem({ src, alt }: { src: string; alt: string }) {
  const [ok, setOk] = useState(true);
  if (!ok) return null;
  return (
    <li className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-primary/8 bg-surface/60 shadow-card">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onError={() => setOk(false)}
        className="h-full w-full object-cover transition duration-motion group-hover:scale-[1.03] motion-reduce:transition-none"
      />
      <div
        className="pointer-events-none absolute inset-0 border border-primary/0 ring-1 ring-inset ring-primary/0 transition group-hover:ring-primary/8"
        aria-hidden
      />
    </li>
  );
}

export function CampusGallery() {
  return (
    <section
      id="campus"
      className="border-b border-primary/5 bg-primary/[0.03] py-section md:py-section-md"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Campus"
          title="See where you’ll learn"
          subtitle="See our classroom, lab, and teaching environment—real photos from Nayudupeta."
        />
        <ScrollSection>
          <ul className="grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3">
            {shots.map((s) => (
              <GalleryItem key={s.id} src={s.src} alt={s.alt} />
            ))}
          </ul>
        </ScrollSection>
      </div>
    </section>
  );
}
