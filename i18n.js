import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'react-native-localize';
import en from './src/locals/en.json';
import hi from './src/locals/hi.json';
import ta from './src/locals/ta.json';
import te from './src/locals/te.json';
import gu from './src/locals/gu.json';
import mr from './src/locals/mr.json';
import bn from './src/locals/bn.json';
import kn from './src/locals/kn.json';
import pa from './src/locals/pa.json';
import ml from './src/locals/ml.json';

const resources = {
  en: { translation: en },
  hi: { translation: hi },
  ta: { translation: ta },
  te: { translation: te },
  gu: { translation: gu },
  mr: { translation: mr },
  bn: { translation: bn },
  kn: { translation: kn },
  pa: { translation: pa },
  ml: { translation: ml },
};

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: callback => {
    const bestLanguage = Localization.findBestLanguageTag(
      Object.keys(resources),
    );
    callback(bestLanguage?.languageTag || 'en');
  },
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    fallbackLng: 'en',
    resources,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
