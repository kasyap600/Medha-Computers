import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { site } from "../../data/site";
import { ButtonLink } from "./ButtonLink";

export function StickyCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 280);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-30 border-t border-black/8 bg-paper/95 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2 shadow-[0_-8px_30px_-8px_rgba(0,0,0,0.12)] backdrop-blur-md lg:hidden"
      role="region"
      aria-label="Quick enroll and call"
    >
      <div className="mx-auto grid max-w-lg grid-cols-[48px_1fr] items-stretch gap-2">
        <a
          href={`tel:${site.phoneTel}`}
          className="inline-flex h-12 min-w-[48px] items-center justify-center rounded-xl border border-primary/12 text-primary transition hover:bg-primary/5"
          aria-label={`Call ${site.phoneDisplay}`}
        >
          <Phone className="h-5 w-5" />
        </a>
        <ButtonLink href="#contact" variant="primary" className="min-h-[48px] justify-center px-3 py-3 text-sm shadow-md">
          Join today
        </ButtonLink>
      </div>
      <p className="mt-1.5 text-center text-[10px] font-medium text-primary/45">{site.feesOffers.urgencyLine}</p>
    </div>
  );
}
