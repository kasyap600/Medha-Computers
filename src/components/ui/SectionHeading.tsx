import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  dark?: boolean;
  action?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  dark = false,
  action,
}: Props) {
  const text = dark ? "text-white" : "text-primary";
  const sub = dark ? "text-white/75" : "text-primary/65";
  const eye = dark ? "text-accent-to" : "text-accent-from";
  const isCenter = align === "center";

  return (
    <div
      className={`mb-10 flex flex-col gap-3 md:mb-14 ${
        isCenter ? "items-center text-center" : "items-start text-left"
      }`}
    >
      {eyebrow ? (
        <p
          className={`font-display text-xs font-semibold uppercase tracking-[0.2em] ${eye}`}
        >
          {eyebrow}
        </p>
      ) : null}
      <div
        className={`flex w-full flex-col gap-4 ${action ? "md:flex-row md:items-end md:justify-between" : isCenter ? "items-center" : ""}`}
      >
        <div
          className={`max-w-3xl space-y-3 ${isCenter ? "mx-auto w-full text-center" : ""}`}
        >
          <h2
            className={`font-display text-balance text-display-2xl font-bold tracking-tight md:text-display-3xl ${text}`}
          >
            {title}
          </h2>
          {subtitle ? (
            <p
              className={`text-base leading-relaxed md:text-lg ${sub} ${
                isCenter ? "mx-auto max-w-2xl" : "max-w-2xl"
              }`}
            >
              {subtitle}
            </p>
          ) : null}
        </div>
        {action ? <div className="shrink-0">{action}</div> : null}
      </div>
    </div>
  );
}
