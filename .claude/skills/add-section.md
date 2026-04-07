# Skill: Add a New Section

Use this skill when a new marketing section needs to be added to the page (e.g., Testimonials, FAQ, Pricing table, Newsletter signup).

## Step 1: Create the component file

Create `src/components/YourSection.astro` using this exact pattern:

```astro
---
import { useTranslations } from '../i18n/utils';

interface Props {
  lang: string;
}

const { lang } = Astro.props;
const t = useTranslations(lang as 'en' | 'es' | 'pt');
---

<section id="your-section-id" class="relative py-24 overflow-hidden">
  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
        {t('your_section.title')}
      </h2>
      <p class="text-slate-400 text-lg max-w-2xl mx-auto">
        {t('your_section.subtitle')}
      </p>
    </div>

    <!-- Your section content here -->
  </div>
</section>
```

## Step 2: Add translation keys

Add a new top-level key to all three JSON files:

`src/i18n/en.json`:
```json
"your_section": {
  "title": "Section Title",
  "subtitle": "Section subtitle text."
}
```

Do the same in `es.json` and `pt.json` with proper translations.

## Step 3: Register in all three page files

Add the import and component tag to:
- `src/pages/index.astro`
- `src/pages/es/index.astro`
- `src/pages/pt/index.astro`

```astro
---
import YourSection from '../components/YourSection.astro';
// (use ../../components/ for locale pages)
---

<!-- Inside <main>, in the desired position -->
<YourSection lang={lang} />
```

## Step 4: Add nav link (optional)

If the section should appear in navigation, add an anchor link to `Navigation.astro` and update translation keys under `nav.*` in all three JSON files.

## Design guidelines

- Background: `bg-[#05050f]` — do not set a different background color
- Cards: `bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl`
- Section headings: gradient text using `bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent`
- Body text: `text-slate-300` or `text-slate-400`
- Add background orbs for depth: `absolute ... rounded-full blur-3xl opacity-10`
- Primary CTA: `bg-gradient-to-r from-violet-600 to-blue-600` with hover state
- Secondary CTA: `border border-white/20 hover:bg-white/10`
