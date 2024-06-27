import React from 'react';
import { useTranslation } from 'react-i18next';

const WeatherSummary = ({ weather }) => {
  const { t } = useTranslation();
  return (
    <div>
      <h2>{weather.name}</h2>
      <p>
        {t('temp')}: {weather.main.temp} °C
      </p>
      <p>
        {t('weather')}: {weather.weather[0].description}
      </p>
      <p>
        {t('humidity')}: {weather.main.humidity} %
      </p>
    </div>
  );
};

export default WeatherSummary;
