# Skill: Update Translations

Use this skill whenever a new i18n key needs to be added, an existing translation needs to be changed, or a new language needs to be added.

## Files to edit

All three translation files must always be updated together:
- `src/i18n/en.json`
- `src/i18n/es.json`
- `src/i18n/pt.json`

## Adding a new key

1. Identify the correct section in the JSON structure (e.g., `nav`, `hero`, `features`, `about`, `buy`, `footer`).
2. Add the key to `en.json` first with the English value.
3. Add the same key to `es.json` with proper Spanish translation.
4. Add the same key to `pt.json` with proper Brazilian Portuguese translation.
5. Verify the key path matches exactly across all three files.

## Key structure rules

- Use dot notation in component code: `t('section.key_name')`
- Use snake_case for key names
- Nest keys under their section object in the JSON
- Never use numeric keys — prefer descriptive names like `item1_title`, `item2_desc`

## Using a new key in a component

In any `.astro` component:
```astro
---
import { useTranslations } from '../i18n/utils';
interface Props { lang: string; }
const { lang } = Astro.props;
const t = useTranslations(lang as 'en' | 'es' | 'pt');
---
<p>{t('section.your_new_key')}</p>
```

## Changing existing text

Edit the value for the same key in all three files. Never change the key name — only the value — unless you also update all component references.

## Checking for missing translations

If a translation key is missing, `useTranslations` returns the key string itself as fallback. Search components for hardcoded strings to ensure everything flows through `t()`.
