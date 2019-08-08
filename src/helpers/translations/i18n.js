// React imports
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Other NPM imports
import languages from '../../languages/en-GB';

console.log(languages)

i18n
    .use(initReactI18next)
    .init({
      fallbackLng: 'global',
      fallbackNS: ['errors','fallbackGlobal'],
      interpolation: {
        escapaValue: false,
      },
      keySeparator: '.',
      lng: 'lloyds',
      resources: languages
    });

export default i18n;