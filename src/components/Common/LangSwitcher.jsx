import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LangSwitcher = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'ge' : 'en';
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
  };

  return (
    <button className="lang-switcher-button" onClick={toggleLanguage}>
      {language === 'en' ? 'EN' : 'GE'}
    </button>
  );
};

export default LangSwitcher;
