import React from 'react';
import darkicon from '../../assets/darkicon.svg';
import useLocalStorage from '../../hooks/useLocalStorage';

const Darkmode = () => {
  const dark = () => {
    document.querySelector('body').setAttribute('theme', 'dark');
  };
  const light = () => {
    document.querySelector('body').setAttribute('theme', 'light');
  };

  let [isDark, setIsDark] = useLocalStorage(false);
  isDark ? dark() : light();

  return (
    <button
      onClick={() => {
        setIsDark(!isDark);
      }}
    >
      <img src={darkicon} alt="darktheme" className="filter-color"></img>
    </button>
  );
};

export default Darkmode;
