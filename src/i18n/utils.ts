import { ui, defaultLang, showDefaultLang } from "./ui";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function getRouteFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return url.pathname.split("/").slice(2).join("/");
  return url.pathname.split("/").slice(1).join("/");
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string) {
    return !showDefaultLang && lang === defaultLang ? path : `/${lang}${path}`;
  };
}
