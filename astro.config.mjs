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
          label: "Stage 1: Baseline",
          translations: { ru: "Этап 1: Базовая линия" },
          items: [
            {
              label: "Independent on-chain state",
              translations: { ru: "Независимое on-chain состояние" },
              slug: "stage-1/baseline",
            },
          ],
        },
      ],
    }),
  ],
});
