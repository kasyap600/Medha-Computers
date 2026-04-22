import { type ReactNode, useSyncExternalStore } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

const subscribe = (cb: () => void) => {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};

const getSnapshot = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const getServerSnapshot = () => false;

type Props = {
  children: ReactNode;
  className?: string;
} & Omit<HTMLMotionProps<"div">, "children" | "className">;

export function ScrollSection({ children, className = "", initial, whileInView, transition, ...rest }: Props) {
  const reduced = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const inView = whileInView ?? { opacity: 1, y: 0 };
  const from = initial ?? { opacity: 0, y: 16 };
  const tr = transition ?? { duration: 0.45, ease: [0.32, 0.72, 0, 1] as const };
  const effectiveTransition = reduced ? { duration: 0 } : tr;

  return (
    <motion.div
      className={className}
      initial={reduced ? { opacity: 1, y: 0 } : from}
      whileInView={reduced ? undefined : inView}
      viewport={{ once: true, margin: "-64px" }}
      transition={effectiveTransition}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
