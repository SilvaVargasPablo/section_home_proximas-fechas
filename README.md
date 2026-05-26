This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Deploy en GitHub Pages

Este proyecto ya esta configurado para export estatico con Next.js y desplegar en Pages usando GitHub Actions.

### Configuracion en GitHub

1. Ve a `Settings > Pages` en tu repositorio.
2. En `Build and deployment`, selecciona `Source: GitHub Actions`.
3. Haz push a la rama `main`.

### Workflow

El flujo se ejecuta desde `.github/workflows/deploy-pages.yml` y:

1. Instala dependencias con `pnpm`.
2. Ejecuta `pnpm build` (genera `out/` por `output: "export"`).
3. Publica `out/` en GitHub Pages.

La URL final quedara en:

`https://<tu-usuario>.github.io/section_home_proximas-fechas/`
