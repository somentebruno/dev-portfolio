# Bruno Lucas — Developer Portfolio

Personal portfolio built with Next.js, showcasing my projects, experience, and education. Live at [brunolucasdev.com](https://brunolucasdev.com).

## Features

- **Bilingual** — Portuguese and English, powered by `next-intl`
- **Light/dark theme** — system-aware, with manual toggle
- **Featured case study** — dedicated page for in-depth project write-ups, separate from the quick-glance project grid
- **Responsive** — from mobile to desktop

## Tech stack

- [Next.js](https://nextjs.org) (App Router) + [React](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [next-intl](https://next-intl.dev) for internationalization
- [next-themes](https://github.com/pacocoursey/next-themes) for theming
- [Lucide](https://lucide.dev) for icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result. The app auto-reloads as you edit files under `src/`.

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # run ESLint
```

## Project structure

```
src/
  app/[locale]/        # routes (locale-prefixed)
  components/          # page sections (Hero, Projects, Experience, ...)
  data/                 # structured content shared across components/pages
  messages/             # en.json / pt.json translation strings
  i18n/                 # next-intl request config
```

## Deployment

Deployed on [Vercel](https://vercel.com), auto-deploying from the `main` branch.

## Contact

- [GitHub](https://github.com/somentebruno)
- [LinkedIn](https://www.linkedin.com/in/blsf/)
- [Email](mailto:brunolucasdev@gmail.com)
