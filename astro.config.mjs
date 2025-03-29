import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://kevin00730.github.io",
  base: "hyread-one-search",
  integrations: [tailwind(), icon()],
});
