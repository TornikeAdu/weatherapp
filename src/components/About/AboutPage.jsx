import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('aboutus')}</h1>
      <p>{t('aboutdesc')}</p>
    </div>
  );
};

export default About;
