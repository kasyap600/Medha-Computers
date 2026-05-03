import { useEffect, useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { navLinks, site } from "../../data/site";
import { BrandLockup } from "../ui/BrandLockup";
import { ButtonLink } from "../ui/ButtonLink";

const linkOnLight =
  "relative rounded-lg px-3.5 py-2 text-sm font-semibold text-primary/75 transition-colors hover:bg-primary/[0.06] hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-from/80 focus-visible:ring-offset-2 focus-visible:ring-offset-paper";

const linkOnDark =
  "relative rounded-lg px-3.5 py-2 text-sm font-semibold text-white/80 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-from focus-visible:ring-offset-2 focus-visible:ring-offset-primary";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const onHero = !scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[box-shadow,backdrop-filter,background-color,border-color] duration-300 ${
        scrolled || open ? "shadow-[0_8px_30px_-8px_rgba(13,59,46,0.12)]" : "shadow-none"
      }`}
    >
      <div
        className={`border-b transition-colors duration-300 ${
          scrolled || open
            ? "border-primary/[0.08] bg-paper/92 backdrop-blur-xl backdrop-saturate-150"
            : "border-white/10 bg-primary/35 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex min-h-[3.75rem] max-w-6xl items-center justify-between gap-3 px-4 sm:min-h-[4rem] md:px-6">
          <a
            href="#top"
            className={
              onHero
                ? "group -m-1 flex min-w-0 max-w-[min(100%,22rem)] items-center rounded-xl p-1 transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-from focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                : "group -m-1 flex min-w-0 max-w-[min(100%,22rem)] items-center rounded-xl p-1 transition-colors hover:bg-primary/[0.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-from focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
            }
            onClick={() => setOpen(false)}
            aria-label={`${site.name} — home`}
          >
            <BrandLockup variant="navbar" navbarOverDark={onHero} />
          </a>

          <nav
            className="hidden shrink-0 items-center gap-1 lg:flex"
            aria-label="Main navigation"
          >
            <div
              className={
                onHero
                  ? "mr-1 flex items-center gap-0.5 rounded-full border border-white/15 bg-white/5 px-1.5 py-1"
                  : "mr-1 flex items-center gap-0.5 rounded-full border border-primary/10 bg-paper/80 px-1.5 py-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]"
              }
              role="presentation"
            >
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} className={onHero ? linkOnDark : linkOnLight}>
                  {l.label}
                </a>
              ))}
            </div>
            <ButtonLink
              href="#contact"
              variant="primary"
              className={`px-5 py-2.5 text-sm shadow-md ${
                onHero ? "shadow-black/20 focus-visible:ring-offset-primary" : "shadow-primary/10 focus-visible:ring-offset-paper"
              }`}
            >
              Enroll
            </ButtonLink>
          </nav>

          <div className="flex items-center gap-1.5 lg:hidden">
            <a
              href={`tel:${site.phoneTel}`}
              className={
                onHero
                  ? "inline-flex h-11 w-11 items-center justify-center rounded-xl text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-from focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                  : "inline-flex h-11 w-11 items-center justify-center rounded-xl text-primary transition hover:bg-primary/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-from focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
              }
              aria-label={`Call ${site.phoneDisplay}`}
            >
              <Phone className="h-5 w-5" strokeWidth={2} />
            </a>
            <button
              type="button"
              className={
                onHero
                  ? "inline-flex h-11 w-11 items-center justify-center rounded-xl text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-from focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                  : "inline-flex h-11 w-11 items-center justify-center rounded-xl text-primary transition hover:bg-primary/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-from focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
              }
              aria-expanded={open}
              aria-controls={menuId}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id={menuId}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: [0.32, 0.72, 0, 1] }}
            className="border-b border-primary/10 bg-paper/98 shadow-lg shadow-primary/5 backdrop-blur-xl lg:hidden"
          >
            <nav
              className="mx-auto max-w-6xl px-4 py-2 pb-5"
              aria-label="Mobile navigation"
            >
              <ul className="flex flex-col gap-0.5">
                {navLinks.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 + i * 0.035, duration: 0.2 }}
                  >
                    <a
                      href={l.href}
                      className="block rounded-xl px-4 py-3.5 text-base font-semibold text-primary/90 transition hover:bg-primary/[0.06] active:bg-primary/10"
                      onClick={() => setOpen(false)}
                    >
                      {l.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-2 border-t border-primary/8 pt-4">
                <ButtonLink
                  href="#contact"
                  variant="primary"
                  className="w-full justify-center py-3.5 text-base shadow-md focus-visible:ring-offset-paper"
                  onClick={() => setOpen(false)}
                >
                  Enroll
                </ButtonLink>
                <a
                  href={`tel:${site.phoneTel}`}
                  className="mt-3 flex w-full min-h-[48px] items-center justify-center gap-2 rounded-full border-2 border-primary/15 py-3 text-sm font-semibold text-primary transition hover:border-primary/25 hover:bg-primary/[0.04]"
                >
                  <Phone className="h-4 w-4" />
                  {site.phoneDisplay}
                </a>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
