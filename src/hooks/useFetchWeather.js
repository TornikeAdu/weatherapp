import { useState } from 'react';
import { fetchWeatherData, fetchForecastData } from '../api/weatherApi';

const useFetchWeather = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (location) => {
    try {
      setLoading(true);
      setError(null);
      const weatherData = await fetchWeatherData(location);
      setWeather(weatherData);
      const forecastData = await fetchForecastData(location);
      setForecast(forecastData);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { weather, forecast, loading, error, fetchWeather };
};

export default useFetchWeather;
