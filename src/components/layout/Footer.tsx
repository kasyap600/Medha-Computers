import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { quickLinks, site } from "../../data/site";
import { BrandLockup } from "../ui/BrandLockup";

const isHttpUrl = (href: string) => /^https?:\/\//i.test(href);

const socials = [
  { label: "Facebook", href: site.social.facebook },
  { label: "Instagram", href: site.social.instagram },
  { label: "YouTube", href: site.social.youtube },
].filter((s) => isHttpUrl(s.href));

export function Footer() {
  return (
    <footer className="border-t border-primary/10 bg-primary text-white/90">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <a
              href="#top"
              className="inline-block max-w-xs rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-from"
            >
              <BrandLockup variant="footer" />
            </a>
            <p className="text-sm leading-relaxed text-white/70">
              Trusted for 30 years. Affordable, job-oriented training in technology — now with AI programs
              for the next generation.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white/50">
              Quick links
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-white/80 transition hover:text-white hover:underline">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white/50">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li className="flex gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-to" />
                {site.addressLine}
              </li>
              <li>
                <a href={`tel:${site.phoneTel}`} className="inline-flex items-center gap-2 hover:text-white">
                  <Phone className="h-4 w-4" />
                  {site.phoneDisplay}
                </a>
              </li>
              {site.contactEmail ? (
                <li>
                  <a
                    href={`mailto:${site.contactEmail}`}
                    className="inline-flex items-center gap-2 break-all hover:text-white"
                  >
                    <Mail className="h-4 w-4" />
                    {site.contactEmail}
                  </a>
                </li>
              ) : null}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white/50">
              Follow
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href={site.whatsappChannelHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#25D366] transition hover:text-[#20BD5A] hover:underline"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" aria-hidden />
                  WhatsApp channel
                </a>
              </li>
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white hover:underline"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
            {!socials.length ? (
              <p className="mt-3 text-xs text-white/45">
                Add Facebook, Instagram, or YouTube in site data when ready.
              </p>
            ) : null}
          </div>
        </div>

        <div className="mt-10 space-y-6 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <a
              href={site.whatsappChannelHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-[#25D366]/50 bg-[#25D366]/15 px-5 py-2.5 text-sm font-semibold text-[#25D366] transition hover:bg-[#25D366]/25"
            >
              <MessageCircle className="h-4 w-4 shrink-0" aria-hidden />
              Join our WhatsApp channel
            </a>
            <span className="hidden text-white/25 sm:inline" aria-hidden>
              ·
            </span>
            <p className="text-center text-xs text-white/55 sm:text-left">
              Course updates and announcements on{" "}
              <a
                href={site.whatsappChannelHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#25D366] underline decoration-[#25D366]/40 underline-offset-2 hover:decoration-[#25D366]"
              >
                WhatsApp
              </a>
              .
            </p>
          </div>

          <p className="text-center text-xs text-white/45">
            © {new Date().getFullYear()} {site.name}. {site.iso}
          </p>
        </div>
      </div>
    </footer>
  );
}
