import { Mail, MapPin, Phone } from "lucide-react";
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
            {socials.length ? (
              <ul className="mt-4 space-y-2 text-sm">
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
            ) : (
              <p className="mt-4 text-sm text-white/50">Add social URLs in data/site when ready.</p>
            )}
          </div>
        </div>

        <p className="mt-10 border-t border-white/10 pt-8 text-center text-xs text-white/45">
          © {new Date().getFullYear()} {site.name}. {site.iso}
        </p>
      </div>
    </footer>
  );
}
