import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqItems } from "../../data/faq";
import { ScrollSection } from "../ui/ScrollSection";
import { SectionHeading } from "../ui/SectionHeading";

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id ?? null);
  const baseId = useId();

  return (
    <section id="faq" className="border-y border-primary/5 bg-surface py-section md:py-section-md">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Help"
          title="Frequently asked questions"
          subtitle="Quick answers about fees, timings, and how to get started. Still unsure? Message us on WhatsApp."
        />

        <ScrollSection className="space-y-2">
          <ul className="list-none space-y-2 p-0">
            {faqItems.map((item) => {
              const isOpen = openId === item.id;
              const panelId = `${baseId}-${item.id}-panel`;
              const headerId = `${baseId}-${item.id}-header`;
              return (
                <li
                  key={item.id}
                  className="overflow-hidden rounded-2xl border border-primary/8 bg-paper shadow-card"
                >
                  <h3 id={headerId} className="text-base font-semibold text-primary">
                    <button
                      type="button"
                      className="flex min-h-[3rem] w-full items-center justify-between gap-3 px-5 py-4 text-left transition hover:bg-primary/[0.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent-from md:min-h-0"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenId(isOpen ? null : item.id)}
                    >
                      <span className="min-w-0 pr-2 font-display">{item.question}</span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-accent-from transition-transform duration-motion ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        aria-hidden
                      />
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={headerId}
                    hidden={!isOpen}
                    className={isOpen ? "border-t border-primary/6 px-5 pb-5 pt-1" : ""}
                  >
                    {isOpen ? <p className="text-sm leading-relaxed text-primary/75">{item.answer}</p> : null}
                  </div>
                </li>
              );
            })}
          </ul>
        </ScrollSection>
      </div>
    </section>
  );
}
