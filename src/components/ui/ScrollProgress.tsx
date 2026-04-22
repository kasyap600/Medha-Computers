import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      className="pointer-events-none fixed left-0 right-0 top-0 z-[100] h-[3px] origin-left bg-gradient-to-r from-accent-from via-[#ffd050] to-accent-to shadow-[0_0_12px_rgba(245,179,1,0.35)] motion-reduce:hidden"
      style={{ scaleX }}
      aria-hidden
    />
  );
}
