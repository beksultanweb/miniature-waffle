import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  experimental: {
    i18n: {
      defaultLocale: "ru",
      locales: ["en", "kk", "ru"],
      routingStrategy: "prefix-other-locales",
    },
  },
});
