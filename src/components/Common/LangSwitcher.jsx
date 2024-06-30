import React from 'react';
import { useTranslation } from 'react-i18next';
import useLocalStorage from '../../hooks/useLocalStorage';

const LangSwitcher = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useLocalStorage('language', 'en');

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'ge' : 'en';
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return (
    <button onClick={toggleLanguage}>{language === 'en' ? 'EN' : 'GE'}</button>
  );
};

export default LangSwitcher;
