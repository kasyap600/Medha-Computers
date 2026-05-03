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
        /** Deep forest — trust, academic */
        primary: "#0D3B2E",
        paper: "#FFFFFF",
        /** Soft mint-gray page backdrop */
        surface: "#F4F9F6",
        /** Burnt orange → warm orange CTAs & highlights */
        "accent-from": "#C2410C",
        "accent-to": "#FB923C",
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
        display: ['"DM Sans"', "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-cta": "linear-gradient(135deg, #C2410C 0%, #FB923C 100%)",
        "gradient-hero":
          "radial-gradient(ellipse 100% 85% at 50% -15%, rgba(255, 255, 255, 0.12) 0%, transparent 45%), radial-gradient(ellipse 80% 60% at 50% 0%, rgba(194, 65, 12, 0.12) 0%, transparent 55%)",
        "gradient-dark":
          "radial-gradient(ellipse 100% 70% at 50% 100%, rgba(255, 255, 255, 0.08) 0%, transparent 50%), radial-gradient(ellipse 100% 80% at 50% 100%, rgba(194, 65, 12, 0.08) 0%, transparent 50%)",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(13, 59, 46, 0.07), 0 1px 0 rgba(255,255,255,0.7) inset",
        card: "0 4px 24px rgba(13, 59, 46, 0.06), 0 1px 2px rgba(13, 59, 46, 0.04)",
        "card-hover": "0 12px 40px rgba(13, 59, 46, 0.11), 0 2px 8px rgba(13, 59, 46, 0.06)",
        glow: "0 0 60px rgba(194, 65, 12, 0.22)",
      },
    },
  },
  plugins: [],
};
