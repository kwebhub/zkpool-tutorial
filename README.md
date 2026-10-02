# zkpool-tutorial

Bilingual (English / Russian) tutorial for **zkpool-mesh** — a ZK private pool on Solana with microservices, K3s, and DevSecOps.

## What this repository is

This is the **tutorial site**, built with [Starlight](https://starlight.astro.build/) (Astro). It is not the code repository. The code lives at [`kwebhub/zkpool-mesh`](https://github.com/kwebhub/zkpool-mesh).

## Local development

```bash
corepack enable
corepack prepare pnpm@latest --activate
pnpm install
pnpm dev
```

The dev server runs at `http://localhost:4321/`.

## Structure

- `src/content/docs/` — English (root locale)
- `src/content/docs/ru/` — Russian
- `astro.config.mjs` — Starlight config (i18n, sidebar, social links)

## License

MIT
