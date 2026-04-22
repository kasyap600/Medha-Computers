import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronUp } from "lucide-react";

const SHOW_AFTER = 380;

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > SHOW_AFTER);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {show ? (
        <motion.button
          type="button"
          initial={{ opacity: 0, scale: 0.86, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 8 }}
          transition={{ type: "spring", stiffness: 400, damping: 28 }}
          onClick={goTop}
          className="group fixed bottom-24 right-4 z-40 flex h-12 w-12 min-h-[48px] min-w-[48px] items-center justify-center rounded-full border border-white/20 bg-primary text-white shadow-lg shadow-primary/20 backdrop-blur-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-from focus-visible:ring-offset-2 focus-visible:ring-offset-paper motion-reduce:transition-none sm:bottom-8 sm:right-8"
          aria-label="Back to top"
        >
          <ChevronUp
            className="h-6 w-6 transition group-hover:-translate-y-0.5 motion-reduce:transform-none"
            strokeWidth={2.2}
            aria-hidden
          />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
