type Tone = "onLight" | "onDark";
export type Size = "sm" | "md" | "lg" | "xl" | "2xl" | "hero";

const sizeClass: Record<Size, string> = {
  sm: "text-sm sm:text-base",
  md: "text-base sm:text-lg",
  lg: "text-lg sm:text-xl",
  xl: "text-2xl sm:text-3xl",
  "2xl": "text-3xl sm:text-4xl md:text-5xl",
  hero: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl",
};

type Props = {
  tone: Tone;
  size?: Size;
  className?: string;
};

export function BrandName({ tone, size = "md", className = "" }: Props) {
  const isDark = tone === "onDark";
  return (
    <span
      className={`inline-flex items-baseline gap-0 font-display font-bold leading-tight tracking-tight ${sizeClass[size]} ${className}`}
    >
      <span
        className={
          isDark ? "text-accent-to" : "bg-gradient-cta bg-clip-text text-transparent"
        }
      >
        Medha
      </span>
      <span
        className={
          isDark
            ? "pl-1.5 text-white"
            : "pl-1.5 text-primary [text-shadow:0_1px_0_rgba(255,255,255,0.8)]"
        }
      >
        Computers
      </span>
    </span>
  );
}
