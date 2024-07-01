import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Darkmode from './Darkmode';
import LangSwitcher from './LangSwitcher';
import '../../styles/components/navbar.css';

const NavBar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav">
      <div className="hamburger" onClick={toggleNavbar}>
        &#9776;
      </div>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
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
