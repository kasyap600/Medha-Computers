import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { BookOpen, Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { site } from "../../data/site";
import { SectionHeading } from "../ui/SectionHeading";
import { GlassPanel } from "../ui/GlassPanel";

function buildWhatsappMessage(parts: { name: string; phone: string; email: string; course: string; message: string }) {
  const lines = [
    "Hi — enquiry from the Medha Computers website.",
    "",
    `Name: ${parts.name || "—"}`,
    `Phone: ${parts.phone || "—"}`,
  ];
  if (parts.email.trim()) lines.push(`Email: ${parts.email.trim()}`);
  if (parts.course.trim()) lines.push(`Course / interest: ${parts.course.trim()}`);
  if (parts.message.trim()) {
    lines.push("");
    lines.push(parts.message.trim());
  }
  return lines.join("\n");
}

export function Contact() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(site.mapEmbedQuery)}&z=15&output=embed&hl=en`;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [message, setMessage] = useState("");

  function submitToWhatsApp(e: FormEvent) {
    e.preventDefault();
    const text = buildWhatsappMessage({ name, phone, email, course, message });
    const href = `${site.whatsappHref}?text=${encodeURIComponent(text)}`;
    window.open(href, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contact" className="border-t border-primary/5 bg-surface py-section md:py-section-md">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Visit & enroll"
          title="Get in touch"
          subtitle="Send an enquiry on WhatsApp using the form, or call and visit us in Nayudupeta. We will help you choose the right course and batch timing."
        />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <GlassPanel className="!bg-paper/90 h-full">
              <h3 className="font-display text-lg font-semibold text-primary">Enquiry (WhatsApp)</h3>
              <p className="mt-1 text-sm text-primary/70">
                Your message opens in WhatsApp to{" "}
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary"
                >
                  {site.whatsappDisplay}
                </a>
                .
              </p>
              <form onSubmit={submitToWhatsApp} className="mt-5 space-y-4">
                <div>
                  <label htmlFor="enquiry-name" className="mb-1.5 block text-xs font-medium text-primary/80">
                    Name <span className="text-accent-from">*</span>
                  </label>
                  <input
                    id="enquiry-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-xl border border-primary/10 bg-white px-4 py-3 text-sm text-primary shadow-sm ring-primary/0 transition focus:border-accent-from/40 focus:outline-none focus:ring-2 focus:ring-accent-from/25"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="enquiry-phone" className="mb-1.5 block text-xs font-medium text-primary/80">
                    Phone <span className="text-accent-from">*</span>
                  </label>
                  <input
                    id="enquiry-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full rounded-xl border border-primary/10 bg-white px-4 py-3 text-sm text-primary shadow-sm focus:border-accent-from/40 focus:outline-none focus:ring-2 focus:ring-accent-from/25"
                    placeholder="+91 …"
                  />
                </div>
                <div>
                  <label htmlFor="enquiry-email" className="mb-1.5 block text-xs font-medium text-primary/80">
                    Email
                  </label>
                  <input
                    id="enquiry-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-primary/10 bg-white px-4 py-3 text-sm text-primary shadow-sm focus:border-accent-from/40 focus:outline-none focus:ring-2 focus:ring-accent-from/25"
                    placeholder="optional"
                  />
                </div>
                <div>
                  <label htmlFor="enquiry-course" className="mb-1.5 block text-xs font-medium text-primary/80">
                    Course or program
                  </label>
                  <input
                    id="enquiry-course"
                    name="course"
                    type="text"
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    className="w-full rounded-xl border border-primary/10 bg-white px-4 py-3 text-sm text-primary shadow-sm focus:border-accent-from/40 focus:outline-none focus:ring-2 focus:ring-accent-from/25"
                    placeholder="e.g. Python, Tally, AI course"
                  />
                </div>
                <div>
                  <label htmlFor="enquiry-message" className="mb-1.5 block text-xs font-medium text-primary/80">
                    Message
                  </label>
                  <textarea
                    id="enquiry-message"
                    name="message"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full resize-y rounded-xl border border-primary/10 bg-white px-4 py-3 text-sm text-primary shadow-sm focus:border-accent-from/40 focus:outline-none focus:ring-2 focus:ring-accent-from/25"
                    placeholder="Timing, experience level, or questions…"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full min-h-[48px] items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-md transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
                >
                  <Send className="h-4 w-4" aria-hidden />
                  Send on WhatsApp
                </button>
              </form>
            </GlassPanel>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.06 }}
          >
            <GlassPanel className="!bg-paper/90">
              <h3 className="font-display text-lg font-semibold text-primary">Institute details</h3>
              {site.brochureUrl ? (
                <a
                  href={site.brochureUrl}
                  className="mt-3 inline-flex w-full min-h-[44px] items-center justify-center gap-2 rounded-xl border border-accent-from/30 bg-primary/5 px-4 py-3 text-sm font-semibold text-primary transition hover:bg-primary/10"
                  download
                >
                  <BookOpen className="h-4 w-4 text-accent-from" aria-hidden />
                  Download brochure (PDF)
                </a>
              ) : null}
              <ul className="mt-5 space-y-4 text-sm text-primary/80">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent-from" aria-hidden />
                  <span>
                    {site.name}
                    <br />
                    {site.addressLine}
                  </span>
                </li>
                <li>
                  <a
                    href={`tel:${site.phoneTel}`}
                    className="inline-flex min-h-[44px] items-center gap-2 font-medium text-primary hover:underline"
                  >
                    <Phone className="h-5 w-5 text-accent-from" />
                    {site.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a
                    href={site.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center gap-2 font-medium text-primary hover:underline"
                  >
                    <MessageCircle className="h-5 w-5 text-[#25D366]" aria-hidden />
                    WhatsApp: {site.whatsappDisplay}
                  </a>
                </li>
                {site.contactEmail ? (
                  <li>
                    <a
                      href={`mailto:${site.contactEmail}`}
                      className="inline-flex min-h-[44px] items-center gap-2 text-primary hover:underline"
                    >
                      <Mail className="h-5 w-5 text-accent-from" />
                      {site.contactEmail}
                    </a>
                  </li>
                ) : null}
                <li className="flex gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent-from" aria-hidden />
                  {site.hours}
                </li>
              </ul>
              <div className="mt-4 overflow-hidden rounded-xl border border-primary/8">
                <iframe
                  title="Map — Medha Computers area, Nayudupeta"
                  src={mapSrc}
                  className="aspect-video h-48 w-full sm:h-56"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <a
                href={site.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex w-full min-h-[44px] items-center justify-center rounded-xl bg-primary px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-primary/90"
              >
                Open in Google Maps
              </a>
            </GlassPanel>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
