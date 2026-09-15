import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import en from "./locales/en/common.json";
import de from "./locales/de/common.json";
import mk from "./locales/mk/common.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: { en: { translation: en }, de: { translation: de }, mk: { translation: mk } },
    fallbackLng: "en",
    supportedLngs: ["en", "de", "mk"],
    load: "languageOnly",
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
      lookupLocalStorage: "paparazzi-language"
    },
    interpolation: { escapeValue: false }
  });

export default i18n;