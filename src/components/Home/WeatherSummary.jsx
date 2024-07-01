import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';

const WeatherSummary = ({ weather, forecast, city }) => {
  const { t } = useTranslation();
  const forecastRef = useRef(null);

  const handleMouseEnter = () => {
    if (forecastRef.current) {
      forecastRef.current.classList.add('scrollable');
    }
  };

  const handleMouseLeave = () => {
    if (forecastRef.current) {
      forecastRef.current.classList.remove('scrollable');
    }
  };

  return (
    <div className="weather-content">
      <h2>{city}</h2>
      {weather && (
        <div className="curr-data">
          <h3>{t('currweather')}</h3>
          <p>
            {t('temp')}: {weather.main.temp}°C
          </p>
          <p>
            {t('weather')}: {weather.weather[0].description}
          </p>
        </div>
      )}
      {forecast && (
        <div className="forecast-content">
          <h3 className="forecast-title">{t('forecast')}</h3>
          <div
            className="forecast-data"
            ref={forecastRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onWheel={(e) => {
              if (forecastRef.current) {
                forecastRef.current.scrollLeft += e.deltaY;
              }
            }}
          >
            {forecast.list.map((item, index) => (
              <div className="forecast-item" key={index}>
                <p>{item.dt_txt}</p>
                <p>
                  {t('temp')}: {item.main.temp}°C
                </p>
                <p>
                  {t('weather')}: {item.weather[0].description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherSummary;
