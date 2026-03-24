import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import deJSON from './locales/de.json';
import enJSON from './locales/en.json';
import frJSON from './locales/fr.json';
import nlJSON from './locales/nl.json';
import trJSON from './locales/tr.json';
import ukJSON from './locales/uk.json';
import arJSON from './locales/ar.json';
import zhJSON from './locales/zh.json';
import esJSON from './locales/es.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enJSON },
      de: { translation: deJSON },
      fr: { translation: frJSON },
      nl: { translation: nlJSON },
      tr: { translation: trJSON },
      uk: { translation: ukJSON },
      ar: { translation: arJSON },
      zh: { translation: zhJSON },
      es: { translation: esJSON },
    },
    fallbackLng: 'de',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
