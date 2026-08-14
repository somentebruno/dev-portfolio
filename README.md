<div align="center">

# Bruno Lucas — Developer Portfolio

### Portfólio pessoal de desenvolvedor Full Stack

Seções de sobre, formação, experiência e projetos numa única página — bilíngue, com tema claro/escuro e um estudo de caso dedicado para o projeto mais relevante.

![Next.js](https://img.shields.io/badge/Next.js-16.1-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19.2-149ECA?style=flat-square&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)

![i18n](https://img.shields.io/badge/i18n-PT%20%2F%20EN-0EA5E9?style=flat-square)
![Tema](https://img.shields.io/badge/tema-claro%20%2F%20escuro-0EA5E9?style=flat-square)
![Deploy](https://img.shields.io/badge/deploy-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

</div>

---

## 🎯 Objetivo

Site pessoal para se apresentar a recrutadores e colegas de forma rápida de escanear. Resolve três coisas:

- **Contexto rápido** — Hero, formação e experiência num scroll só, sem cliques extras.
- **Prova de trabalho** — grade de projetos com link de demo e código, mais um card em destaque para o projeto mais relevante.
- **Projeto privado sem repositório público** — o Tele Educa MT (meu maior projeto) tem credenciais e não pode ser aberto. Em vez de um link morto, ele ganha uma página própria de case study com o desafio, o que foi construído e o resultado.

## 🧭 Como o site se organiza

```
Visitante
   │
   ▼
/[locale]                              en | pt, detectado por middleware
   │
   ├─ Hero → Educação → Experiência → Projetos → Tecnologias → Contato
   │         (uma página só, navegação por âncora)
   │
   └─ /projects/tele-educa             página dedicada do case study
```

Todo o texto visível passa por tradução — nada é hardcoded em um idioma só:

| Fonte | Contém | Usado por |
|---|---|---|
| `src/messages/{en,pt}.json` | Rótulos, descrições, botões, textos das seções | Todos os componentes, via `next-intl` |
| `src/data/tele-educa.ts` | Tags, galeria de prints e link de demo do case study | Card em destaque + página `/projects/tele-educa` |
| `public/*.png` | Screenshots dos projetos | Cards da seção Projetos |

O tema segue o sistema operacional por padrão e pode ser trocado manualmente pelo botão na navbar (`next-themes`, persistido entre visitas).

## 🛠️ Tecnologias e ferramentas

**Núcleo**

| Ferramenta | Versão | Papel no projeto |
|---|---|---|
| Next.js | 16.1 (App Router) | Roteamento, layouts por locale, otimização de imagens |
| React | 19.2 | Interface |
| TypeScript | 5 | Tipagem em todo o código |
| Tailwind CSS | 4 | Estilo utilitário |

**Conteúdo e i18n**

| Ferramenta | Para quê |
|---|---|
| next-intl | Traduções PT/EN e roteamento por locale |
| next-themes | Tema claro/escuro |
| Lucide | Ícones da interface |
| Devicon | Ícones das tecnologias na seção "Tecnologias" |

**Operação**

| Ferramenta | Para quê |
|---|---|
| ESLint | Lint do código |
| Vercel | Deploy automático a partir do `main` |

## 🚀 Como rodar localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000). O app recarrega automaticamente ao editar arquivos em `src/`.

```bash
npm run build   # build de produção
npm run start   # serve o build de produção
npm run lint    # roda o ESLint
```

## 📬 Contato

- [GitHub](https://github.com/somentebruno)
- [LinkedIn](https://www.linkedin.com/in/blsf/)
- [Email](mailto:brunolucasdev@gmail.com)
