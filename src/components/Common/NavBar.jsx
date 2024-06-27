import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Darkmode from './Darkmode';
import '../../styles/components/navbar.css';
import LangSwitcher from './LangSwitcher';

const NavBar = () => {
  const { t } = useTranslation();

  return (
    <nav className="nav">
      <div className="nav-links">
        <Link to="/">
          <button>{t('home')}</button>
        </Link>
        <Link to="/about">
          <button>{t('about')}</button>
        </Link>
        <Link to="/contact">
          <button>{t('contact')}</button>
        </Link>
      </div>
      <div className="common-btns">
        <LangSwitcher />
        <Darkmode />
      </div>
    </nav>
  );
};

export default NavBar;
