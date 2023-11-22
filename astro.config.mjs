import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), partytown()],
  experimental: {
    i18n: {
      defaultLocale: "ru",
      locales: ["en", "kk", "ru"],
      routingStrategy: "prefix-other-locales",
    },
  },
});
