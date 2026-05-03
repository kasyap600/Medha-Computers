import { motion } from "framer-motion";
import { Award, GraduationCap, Users } from "lucide-react";
import { site } from "../../data/site";
import { SectionHeading } from "../ui/SectionHeading";

export function About() {
  return (
    <section
      id="about"
      className="border-b border-primary/5 bg-surface py-section md:py-section-md"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="About us"
          title="A trusted name in computer education"
          subtitle={`Since ${site.established}, ${site.name} has helped learners in ${site.area} and nearby areas build real skills in technology — from fundamentals to job-ready programs including AI.`}
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="overflow-hidden rounded-2xl border border-primary/8 bg-paper p-6 shadow-card md:p-8"
          >
            <h3 className="font-display text-lg font-semibold text-primary">Our mission</h3>
            <p className="mt-3 text-sm leading-relaxed text-primary/75">
              We focus on clear teaching, regular practice, and career guidance so every student can move
              forward with confidence — whether you are in school, college, or looking for a better job.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-primary/80">
              <li className="flex gap-3">
                <div className="shrink-0 rounded-xl bg-surface p-4 ring-1 ring-primary/5 sm:p-5">
                  <Users className="h-6 w-6 text-accent-from" />
                </div>
                <div>
                  <p className="font-semibold text-primary">All ages welcome</p>
                  <p className="text-primary/65">Programs from school support to post-grad diplomas.</p>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="overflow-hidden rounded-2xl border border-primary/8 bg-paper p-6 shadow-card"
          >
            <h3 className="font-display text-lg font-semibold text-primary">
              Certifications &amp; recognition
            </h3>
            <p className="mt-1 text-sm text-primary/60">
              Quality certification and official institute identity you can verify.
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-3 rounded-xl border border-primary/8 bg-surface/50 p-4 ring-1 ring-primary/5">
                <div className="shrink-0 self-start rounded-lg bg-surface p-3 ring-1 ring-primary/5">
                  <img
                    src={site.isoLogo}
                    alt="ISO 9001:2015"
                    className="h-14 w-14 object-contain sm:h-16 sm:w-16"
                  />
                </div>
                <div className="min-w-0">
                  <p className="font-display font-semibold text-primary">{site.iso}</p>
                  <p className="mt-1 text-sm text-primary/70">International quality management certification.</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 rounded-xl border border-primary/8 bg-surface/50 p-4 ring-1 ring-primary/5">
                <div className="shrink-0 self-start rounded-lg bg-surface p-3 ring-1 ring-primary/5">
                  <img
                    src={site.certificationsInstituteLogo.image}
                    alt={site.certificationsInstituteLogo.title}
                    className="h-14 w-auto max-w-full object-contain object-left sm:h-16"
                  />
                </div>
                <div className="min-w-0">
                  <p className="font-display font-semibold text-primary">{site.certificationsInstituteLogo.title}</p>
                  <p className="mt-1 text-sm text-primary/70">{site.certificationsInstituteLogo.blurb}</p>
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-2 rounded-2xl border border-accent-from/25 bg-primary/5 p-4 sm:flex-row sm:items-center">
              <div className="shrink-0 rounded-xl bg-paper p-3 shadow-sm ring-1 ring-primary/10">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <p className="text-sm text-primary/80">
                Structured syllabus, weekly assessments, and dedicated lab time.
              </p>
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary/70">
              <Award className="h-5 w-5 text-accent-from" />
              Focus on outcomes, not just certificates.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
