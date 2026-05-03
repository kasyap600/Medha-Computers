import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

const DEFAULT_SITE_URL = "https://example.com";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const siteUrl = (env.VITE_SITE_URL || DEFAULT_SITE_URL).replace(/\/$/, "");

  return {
    server: {
      // OneDrive / Windows: config/CSS sometimes misses file events without polling
      watch: { usePolling: true, interval: 400 },
    },
    plugins: [
      react(),
      {
        name: "inject-site-url",
        transformIndexHtml(html: string) {
          return html.replaceAll("__SITE_URL__", siteUrl);
        },
      },
      {
        name: "write-robots-and-sitemap",
        closeBundle() {
          const dir = resolve(process.cwd(), "dist");
          const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;
          const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <changefreq>monthly</changefreq>
    <priority>1</priority>
  </url>
</urlset>
`;
          try {
            writeFileSync(resolve(dir, "robots.txt"), robots);
            writeFileSync(resolve(dir, "sitemap.xml"), sitemap);
          } catch {
            /* dist missing in some runs */
          }
        },
      },
    ],
  };
});
