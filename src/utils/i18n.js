import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import store from '../redux/store';
import { setLanguage } from '../redux/slices';

// Importar traducciones desde archivos JS
import en_US from '../locales/en_US.js';
import es_MX from '../locales/es_MX.js';
import pt_BR from '../locales/pt_BR.js';

const getCurrentLanguage = () => {
  let currentLanguage = store.getState().language.value;
  
  // Si el idioma actual no es reconocido, establecer en inglés por defecto
  if (!['en', 'es', 'pt'].includes(currentLanguage)) {
    currentLanguage = 'es';
    store.dispatch(setLanguage('es'));
  }

  return currentLanguage;
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en_US
      },
      es: {
        translation: es_MX
      },
      pt: {
        translation: pt_BR
      }
    },
    lng: getCurrentLanguage(),
    fallbackLng: getCurrentLanguage(),
    interpolation: {
      escapeValue: false
    }
});

store.subscribe(() => {
  const newLanguage = store.getState().language.value;
  i18n.changeLanguage(newLanguage);
});

export default i18n;