import type { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "btn-shine bg-gradient-cta text-white font-semibold shadow-md shadow-black/10 hover:shadow-lg hover:brightness-[1.03] active:scale-[0.98]",
  secondary:
    "border-2 border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20",
  ghost:
    "border border-primary/15 bg-paper/80 text-primary shadow-card hover:shadow-card-hover hover:-translate-y-0.5",
};

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  children: ReactNode;
};

export function ButtonLink({ variant = "primary", className = "", children, ...rest }: Props) {
  return (
    <a
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-from focus-visible:ring-offset-2 ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}
