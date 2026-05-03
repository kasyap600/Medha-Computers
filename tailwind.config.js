/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        section: "5rem",
        "section-md": "7rem",
      },
      fontSize: {
        "display-2xl": [
          "2.25rem",
          { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        "display-3xl": [
          "2.5rem",
          { lineHeight: "1.12", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        "body-lg": ["1.125rem", { lineHeight: "1.65" }],
      },
      transitionDuration: {
        motion: "0.4s",
        "motion-slow": "0.6s",
      },
      colors: {
        /** Deep royal blue — trust, hero, headings */
        primary: "#1E3A8A",
        paper: "#FFFFFF",
        /** Soft light blue page / section wash — calm education */
        surface: "#EFF6FF",
        /** Bright royal → sky for CTAs, links, highlights */
        "accent-from": "#2563EB",
        "accent-to": "#60A5FA",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"SF Pro Text"',
          '"Segoe UI"',
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        display: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"SF Pro Display"',
          '"Segoe UI"',
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "gradient-cta": "linear-gradient(180deg, #3B82F6 0%, #2563EB 50%, #1D4ED8 100%)",
        "gradient-hero":
          "radial-gradient(ellipse 100% 85% at 50% -15%, rgba(255, 255, 255, 0.22) 0%, transparent 45%), radial-gradient(ellipse 72% 50% at 78% 10%, rgba(96, 165, 250, 0.35) 0%, transparent 55%)",
        "gradient-dark":
          "radial-gradient(ellipse 100% 70% at 50% 100%, rgba(255, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(ellipse 100% 85% at 18% 100%, rgba(37, 99, 235, 0.25) 0%, transparent 55%)",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(30, 58, 138, 0.08), 0 1px 0 rgba(255,255,255,0.9) inset",
        card: "0 4px 24px rgba(30, 58, 138, 0.07), 0 1px 2px rgba(37, 99, 235, 0.06)",
        "card-hover":
          "0 12px 40px rgba(30, 58, 138, 0.11), 0 2px 8px rgba(37, 99, 235, 0.08)",
        glow: "0 0 60px rgba(37, 99, 235, 0.3)",
      },
    },
  },
  plugins: [],
};
