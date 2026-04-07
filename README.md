# Mastering Claude — Marketing Site

Marketing website for the book **Mastering Claude: The Developer's Guide to AI-Powered Programming** by Francisco.

Built with Astro, Tailwind CSS, and TypeScript. **Built entirely using Claude Code.**

## Tech stack

- [Astro 4.x](https://astro.build) — static site generator with built-in i18n routing
- [Tailwind CSS 3.x](https://tailwindcss.com) — utility-first styling
- TypeScript strict mode
- pnpm as package manager

## Quick start

```bash
pnpm install
pnpm dev
```

Open [http://localhost:4321](http://localhost:4321).

## Configuration

Before deploying, update the purchase URLs in `src/constants.ts`:

```typescript
export const AMAZON_URL = 'https://amazon.com/YOUR_REAL_LINK';
export const GUMROAD_URL = 'https://gumroad.com/YOUR_REAL_LINK';
```

Both Hero and BuySection pull from this file automatically.

## i18n

The site supports three locales:

| Locale | URL | File |
|--------|-----|------|
| English (default) | `/` | `src/pages/index.astro` |
| Spanish | `/es/` | `src/pages/es/index.astro` |
| Portuguese | `/pt/` | `src/pages/pt/index.astro` |

Translation strings live in `src/i18n/{en,es,pt}.json`. To add or update a string:

1. Add the key to `en.json`
2. Add the same key to `es.json` and `pt.json` with proper translations
3. Use `t('section.key')` in any component (see `src/i18n/utils.ts`)

## Deployment

```bash
pnpm build
```

Output goes to `dist/`. The build is a fully static site — deploy to Netlify, Vercel, GitHub Pages, Cloudflare Pages, or any static host.

For Netlify/Vercel, just connect the repo. For GitHub Pages, set the build output to `dist/`.

## Project structure

```
src/
├── constants.ts          — book URLs, title, author name
├── i18n/
│   ├── en.json           — English strings
│   ├── es.json           — Spanish strings
│   ├── pt.json           — Portuguese strings
│   └── utils.ts          — getLangFromUrl, useTranslations
├── layouts/
│   └── Layout.astro      — HTML shell, fonts, meta
├── components/           — one file per section
└── pages/
    ├── index.astro        — English (default)
    ├── es/index.astro     — Spanish
    └── pt/index.astro     — Portuguese
```

## .claude/ skills

| Skill | Purpose |
|-------|---------|
| `update-translations` | Add or edit i18n keys across all three JSON files |
| `update-book-info` | Update purchase URLs, title, metadata in constants.ts |
| `add-section` | Template and instructions for adding a new page section |
| `content-writer` agent | Trilingual marketing copy in Francisco's voice |

## Built with Claude Code

This entire site — structure, components, translations, and configuration — was built using Claude Code. It serves as a live demonstration of the workflows described in the book.
