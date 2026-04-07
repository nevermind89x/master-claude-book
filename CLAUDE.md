# CLAUDE.md

## Commands

```bash
pnpm dev        # dev server at localhost:4321
pnpm build      # production build → dist/
pnpm preview    # preview production build locally
pnpm lint       # ESLint on .ts and .astro files
pnpm format     # Prettier on all files
```

## Architecture

Static Astro site. No server-side rendering, no React. All components are `.astro` files.

**Entry points:**
- `src/pages/index.astro` — English (default, no prefix)
- `src/pages/es/index.astro` — Spanish at `/es/`
- `src/pages/pt/index.astro` — Portuguese at `/pt/`

Each page imports all section components and passes a `lang` prop down the tree. Astro's built-in i18n handles routing via `astro.config.mjs`.

**Component data flow:**
```
page (detects lang via getLangFromUrl)
  → Layout (html lang attr, head)
  → Navigation (lang)
  → Hero (lang)
  → BuiltWithClaude (lang)
  → Features (lang)
  → AboutAuthor (lang)
  → BuySection (lang)
  → Footer (lang)
```

Every component calls `useTranslations(lang)` to get a `t()` function. No string is hardcoded in components — everything flows through `t('section.key')`.

**External URLs:**
- `src/constants.ts` — `AMAZON_URL`, `GUMROAD_URL`, `BOOK_TITLE`, `AUTHOR_NAME`
- Used in `Hero.astro` and `BuySection.astro`

## i18n system

`src/i18n/utils.ts` exports two functions:

- `getLangFromUrl(url: URL): 'en' | 'es' | 'pt'` — reads the first URL segment, falls back to `'en'`
- `useTranslations(lang)` — returns `t(key: string): string` using dot-path lookup

Translation files: `src/i18n/en.json`, `es.json`, `pt.json`

Key structure mirrors the component hierarchy:
```
nav.*, hero.*, built_with.*, features.*, about.*, buy.*, footer.*
```

## .claude/ skills

- **`update-translations`** — how to add/edit i18n keys across all three JSON files simultaneously
- **`update-book-info`** — updating purchase URLs in `constants.ts`, page titles, meta descriptions
- **`add-section`** — component template, translation key pattern, and page registration steps for new sections
- **`content-writer` agent** — acts as a trilingual marketing copywriter aligned with Francisco's voice (developer-focused, AI-as-copilot philosophy, honest tone, no hype)

## Design system

- Background: `bg-[#05050f]`
- Cards: `bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl`
- Gradient text: `bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent`
- Primary button: `bg-gradient-to-r from-violet-600 to-blue-600` + `hover:from-violet-500 hover:to-blue-500`
- Secondary button: `border border-white/20 hover:bg-white/10`
- Muted text: `text-slate-400`
- Background orbs: `absolute rounded-full blur-3xl opacity-20` in violet/blue/purple
