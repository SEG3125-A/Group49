// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationsEn from './locales/en.json';
import translationsFr from './locales/fr.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationsEn },
      fr: { translation: translationsFr }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // not needed for React as it escapes by default
    }
  });

export default i18n;
