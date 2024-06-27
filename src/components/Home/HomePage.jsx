import React, { useState } from 'react';
import { motion } from 'framer-motion';
import useFetchWeather from '../../hooks/useFetchWeather';
import WeatherSummary from './WeatherSummary';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const [city, setCity] = useState('Tbilisi');
  const { data, loading, error } = useFetchWeather(city);
  const { t } = useTranslation();
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
        placeholder="Enter city"
      />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && <WeatherSummary weather={data} />}
    </motion.div>
  );
};

export default HomePage;
