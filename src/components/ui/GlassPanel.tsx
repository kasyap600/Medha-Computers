import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export function GlassPanel({ children, className = "" }: Props) {
  return (
    <div
      className={`rounded-2xl border border-paper/40 bg-paper/70 p-6 shadow-glass backdrop-blur-md md:p-8 ${className}`}
    >
      {children}
    </div>
  );
}
