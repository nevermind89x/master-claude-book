import en from './en.json';
import es from './es.json';
import pt from './pt.json';

const translations = { en, es, pt } as const;
type Lang = keyof typeof translations;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in translations) return lang as Lang;
  return 'en';
}

export function useTranslations(lang: Lang) {
  return function t(key: string): string {
    const keys = key.split('.');
    let value: unknown = translations[lang];
    for (const k of keys) {
      value = (value as Record<string, unknown>)[k];
    }
    return (value as string) ?? key;
  };
}
