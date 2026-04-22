# Medha Computers — marketing site

Vite + React + TypeScript + Tailwind. Institute landing page: courses, FAQ, contact via WhatsApp.

## Setup

```bash
npm install
cp .env.example .env
# Set VITE_SITE_URL to your production URL (no trailing slash)
npm run dev
```

| Command   | Description              |
| --------- | ------------------------ |
| `npm run dev`     | Local dev         |
| `npm run build`   | Typecheck + `dist/` |
| `npm run preview` | Preview build     |
| `npm run lint`    | ESLint            |

Set `VITE_ANALYTICS_SCRIPT_URL` in `.env` for optional analytics. Add `public/brochure.pdf` and set `brochureUrl` in `src/data/site.ts` to enable the brochure CTA.
