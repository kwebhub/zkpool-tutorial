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
          label: "Stage 0: Setup",
          translations: { ru: "Этап 0: Настройка" },
          items: [
            {
              label: "Choosing a Docs Platform",
              translations: { ru: "Выбор платформы документации" },
              slug: "platform",
            },
          ],
        },
      ],
    }),
  ],
});
