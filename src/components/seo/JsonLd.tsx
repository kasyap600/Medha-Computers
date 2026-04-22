import { useEffect } from "react";
import { site } from "../../data/site";

const SCRIPT_ID = "medha-jsonld-org";

export function JsonLd() {
  useEffect(() => {
    if (document.getElementById(SCRIPT_ID)) return;

    const base = (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, "") ?? "https://example.com";

    const sameAs = [site.social.facebook, site.social.instagram, site.social.youtube].filter(
      (s) => s.length > 0
    );

    const data = {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      name: site.name,
      description: site.subhead,
      url: base,
      telephone: site.phoneTel,
      areaServed: {
        "@type": "Place",
        name: site.area,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Nayudupeta",
          addressRegion: "Andhra Pradesh",
          addressCountry: "IN",
        },
      },
      ...(sameAs.length ? { sameAs } : {}),
    };

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return null;
}
