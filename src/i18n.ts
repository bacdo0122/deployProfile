import i18n, { Module  } from "i18next";
import { reactI18nextModule } from "react-i18next";
import detector from "i18next-browser-languagedetector";
import backend from "i18next-xhr-backend";
import translationEN from './locales/en/translation.json';
import translationVI from './locales/vi/translation.json';
// the translations
const resources = {
  en: {
    translation: translationEN
  },
  vi: {
    translation: translationVI
  }
};

i18n
    .use(detector)
    .use(backend)
  .use(reactI18nextModule as Module ) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: "en",
    lng: "en",
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    react:{
      useSuspense:true
    }
  });

export default i18n;