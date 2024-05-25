import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setLanguage } from '../redux/slices';
import { useTranslation } from 'react-i18next';

const useLanguageInitialization = () => {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');

    if (storedLanguage) {
      dispatch(setLanguage(storedLanguage));
      i18n.changeLanguage(storedLanguage);
    }
  }, [dispatch, i18n]);
};

export default useLanguageInitialization;