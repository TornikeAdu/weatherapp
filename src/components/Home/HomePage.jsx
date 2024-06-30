import React, { useState } from 'react';
import { motion } from 'framer-motion';
import useFetchWeather from '../../hooks/useFetchWeather';
import WeatherSummary from './WeatherSummary';
import { useTranslation } from 'react-i18next';
import '../../styles/components/homepage.css';

const HomePage = () => {
  const [city, setCity] = useState('Tbilisi'); //! წაშალე მე ეს არ დატოვო დეფაულტად თბილისი
  const { weather, forecast, loading, error, fetchWeather } = useFetchWeather();
  const { t } = useTranslation();

  const handleFetchWeather = () => {
    if (city) {
      fetchWeather(city);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>{t('title')}</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder={t('entercity')}
      />
      <button className="submit" onClick={handleFetchWeather}>
        {t('fetchcity')}
      </button>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {weather && (
        <WeatherSummary weather={weather} forecast={forecast} city={city} />
      )}
    </motion.div>
  );
};

export default HomePage;
