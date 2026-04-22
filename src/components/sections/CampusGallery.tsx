import { ScrollSection } from "../ui/ScrollSection";
import { SectionHeading } from "../ui/SectionHeading";

/** Place `office.jpeg` and `lab.jpeg` in the `public/` folder (project root). */
const shots = [
  {
    id: "office",
    src: "/office.jpeg",
    alt: "Medha Computers — office space",
  },
  {
    id: "lab",
    src: "/lab.jpeg",
    alt: "Medha Computers — computer lab for hands-on training",
  },
];

export function CampusGallery() {
  return (
    <section
      id="campus"
      className="border-b border-primary/5 bg-primary/[0.03] py-section md:py-section-md"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Campus"
          title="A focused place to learn"
          subtitle="Our office and lab are set up for real practice—learn in a calm, well-equipped space."
        />
        <ScrollSection>
          <ul className="grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2">
            {shots.map((s) => (
              <li
                key={s.id}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-primary/8 bg-surface/60 shadow-card"
              >
                <img
                  src={s.src}
                  alt={s.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition duration-motion group-hover:scale-[1.03] motion-reduce:transition-none"
                />
                <div
                  className="pointer-events-none absolute inset-0 border border-primary/0 ring-1 ring-inset ring-primary/0 transition group-hover:ring-primary/8"
                  aria-hidden
                />
              </li>
            ))}
          </ul>
        </ScrollSection>
      </div>
    </section>
  );
}
