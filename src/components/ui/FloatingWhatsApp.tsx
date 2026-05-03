import { MessageCircle } from "lucide-react";
import { site } from "../../data/site";

export function FloatingWhatsApp() {
  const href = `${site.whatsappHref}?text=${encodeURIComponent(site.whatsappPrefillDefault)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 left-4 z-[35] flex h-14 min-h-[56px] w-14 min-w-[56px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-primary/15 transition hover:scale-105 hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-surface motion-reduce:transition-none sm:bottom-8 sm:left-auto sm:right-8"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" strokeWidth={2} aria-hidden />
    </a>
  );
}
