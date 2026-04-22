import { useEffect } from "react";

const ATTR = "data-medha-analytics";

export function Analytics() {
  useEffect(() => {
    const src = import.meta.env.VITE_ANALYTICS_SCRIPT_URL as string | undefined;
    if (!src || document.querySelector(`script[${ATTR}]`)) return;

    const s = document.createElement("script");
    s.setAttribute(ATTR, "1");
    s.defer = true;
    s.src = src;
    document.head.appendChild(s);

    return () => {
      s.remove();
    };
  }, []);

  return null;
}
