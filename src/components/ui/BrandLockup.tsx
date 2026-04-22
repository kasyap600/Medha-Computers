import { BrandMark } from "./BrandMark";
import { BrandName } from "./BrandName";
import { site } from "../../data/site";

type Variant = "navbar" | "hero" | "footer" | "about";

const variantConfig: Record<
  Variant,
  {
    mark: "sm" | "md" | "nav" | "lg" | "xl" | "footer";
    nameSize: "sm" | "md" | "lg" | "xl" | "hero";
    tone: "onLight" | "onDark";
  }
> = {
  navbar: { mark: "nav", nameSize: "lg", tone: "onLight" },
  hero: { mark: "lg", nameSize: "hero", tone: "onDark" },
  footer: { mark: "footer", nameSize: "md", tone: "onDark" },
  about: { mark: "lg", nameSize: "lg", tone: "onLight" },
};

type Props = {
  variant: Variant;
  className?: string;
  subline?: string;
  sublineClassName?: string;
  stackOnMobile?: boolean;
  navbarOverDark?: boolean;
};

export function BrandLockup({
  variant,
  className = "",
  subline,
  sublineClassName = "",
  stackOnMobile = false,
  navbarOverDark = false,
}: Props) {
  const c = variantConfig[variant];
  const isFooter = variant === "footer";
  const isNavbar = variant === "navbar";
  const isHero = variant === "hero";
  const nameTone: "onLight" | "onDark" = isNavbar && navbarOverDark ? "onDark" : c.tone;
  const layout = stackOnMobile
    ? "flex-col items-center gap-3 text-center sm:flex-row sm:items-center sm:gap-4 sm:text-left"
    : isFooter
      ? "items-center gap-3"
      : isHero
        ? "w-full flex-col items-center justify-center text-center"
        : isNavbar
          ? "items-center justify-start gap-3 sm:gap-3.5"
          : "items-center gap-2.5 sm:gap-3.5";

  return (
    <div className={`flex min-w-0 ${layout} ${className}`}>
      {isFooter ? (
        <div className="shrink-0 rounded-xl bg-white/10 p-2.5 ring-1 ring-white/20">
          <BrandMark size="footer" />
        </div>
      ) : isNavbar ? (
        <div
          className={`inline-flex min-h-[2.75rem] shrink-0 items-center justify-center self-center rounded-xl border px-2.5 py-1.5 shadow-sm sm:min-h-12 sm:px-3 sm:py-2 ${
            navbarOverDark
              ? "border-white/20 bg-white/10 ring-1 ring-white/20"
              : "border-primary/10 bg-gradient-to-b from-paper to-surface ring-1 ring-paper/80"
          }`}
        >
          <img
            src="/branding/medha-computers-logo.webp"
            alt="Medha Computers"
            width={128}
            height={128}
            className="h-9 w-9 object-contain !object-center sm:h-11 sm:w-11"
          />
        </div>
      ) : isHero ? (
        null
      ) : (
        <BrandMark size={c.mark} />
      )}
      <div
        className={`flex min-w-0 flex-col justify-center ${
          stackOnMobile ? "text-center sm:text-left" : isHero ? "items-center text-center" : "text-left"
        } ${isNavbar ? "gap-0.5" : ""}`}
      >
        <BrandName
          tone={nameTone}
          size={c.nameSize}
          className={isNavbar ? "text-balance leading-tight" : isHero ? "text-center" : ""}
        />
        {isNavbar ? (
          <p
            className={`text-[10px] font-semibold leading-none tracking-[0.16em] sm:text-xs ${
              navbarOverDark ? "text-white/50" : "text-primary/45"
            }`}
          >
            Est. {site.established}
          </p>
        ) : null}
        {subline ? (
          <p
            className={`mt-0.5 text-xs leading-snug sm:text-sm ${
              nameTone === "onDark" ? "text-white/70" : "text-primary/60"
            } ${sublineClassName}`}
          >
            {subline}
          </p>
        ) : null}
      </div>
    </div>
  );
}
