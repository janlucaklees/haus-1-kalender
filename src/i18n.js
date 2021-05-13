import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import locale_de_DE from './locales/de-DE.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      'de-DE': locale_de_DE,
    },
    lng: "de-DE",
    interpolation: {
      escapeValue: false,
    },
    defaultNS: 'community-house-calendar'
  });

export default i18n;

