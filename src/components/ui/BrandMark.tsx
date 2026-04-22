const sizes: Record<"sm" | "md" | "nav" | "lg" | "xl" | "footer", string> = {
  sm: "h-9 w-9 sm:h-10 sm:w-10",
  nav: "h-9 w-9 sm:h-11 sm:w-11",
  md: "h-10 w-10 sm:h-12 sm:w-12",
  lg: "h-12 w-12 sm:h-16 sm:w-16",
  xl: "h-20 w-20 sm:h-24 sm:w-24",
  footer: "h-11 w-11 sm:h-12 sm:w-12",
};

type Props = {
  size: keyof typeof sizes;
  className?: string;
};

export function BrandMark({ size, className = "" }: Props) {
  return (
    <img
      src="/branding/medha-computers-logo.webp"
      alt="Medha Computers"
      width={128}
      height={128}
      className={`object-contain ${sizes[size]} ${className}`}
    />
  );
}
