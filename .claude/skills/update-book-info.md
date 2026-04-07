# Skill: Update Book Info

Use this skill to update book metadata, purchase URLs, pricing display, or any book-level content.

## Primary config file

`src/constants.ts` — the single source of truth for all book metadata:

```typescript
export const AMAZON_URL = 'https://amazon.com/YOUR_BOOK_LINK';
export const GUMROAD_URL = 'https://gumroad.com/YOUR_BOOK_LINK';
export const BOOK_TITLE = 'Mastering Claude';
export const BOOK_SUBTITLE = "The Developer's Guide to AI-Powered Programming";
export const AUTHOR_NAME = 'Francisco';
export const SUPPORTED_LANGUAGES = ['English', 'Español', 'Português'] as const;
```

## Updating purchase URLs

1. Open `src/constants.ts`
2. Replace `AMAZON_URL` with the real Amazon product URL
3. Replace `GUMROAD_URL` with the real Gumroad product URL
4. Both URLs are automatically used in `Hero.astro` and `BuySection.astro`

## Updating book title or subtitle

Change `BOOK_TITLE` and `BOOK_SUBTITLE` in `constants.ts`. Then check:
- `src/layouts/Layout.astro` — the default `<title>` tag
- `src/pages/es/index.astro` and `src/pages/pt/index.astro` — locale-specific titles
- `src/components/Navigation.astro` — the logo text (hardcoded as "Mastering Claude")
- `src/components/Footer.astro` — the logo text

## Adding pricing display

If you want to show a price in the BuySection:
1. Add `KINDLE_PRICE` and `PDF_PRICE` to `constants.ts`
2. Import them in `BuySection.astro`
3. Add translation keys for price labels in all three JSON files if the label text is localized

## Updating the page meta description

Edit the `<meta name="description">` tag in `src/layouts/Layout.astro`.
