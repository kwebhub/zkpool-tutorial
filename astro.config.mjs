// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  integrations: [
    starlight({
      title: {
        en: "zkpool-mesh Tutorial",
        ru: "zkpool-mesh Туториал",
      },
      locales: {
        root: {
          label: "English",
          lang: "en",
        },
        ru: {
          label: "Русский",
          lang: "ru",
        },
      },
      social: [{ icon: "github", label: "GitHub", href: "https://github.com/kwebhub/zkpool-mesh" }],
      sidebar: [
        {
          label: "Introduction",
          translations: { ru: "Введение" },
          slug: "00-intro",
        },
        {
          label: "Stage 0: Setup",
          translations: { ru: "Этап 0: Настройка" },
          slug: "01-setup",
        },
        {
          label: "Stage 1: Baseline",
          translations: { ru: "Этап 1: Базовая линия" },
          slug: "02-baseline",
        },
      ],
    }),
  ],
});
