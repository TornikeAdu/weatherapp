import axios from 'axios';

const API_KEY = '887aaff89bee4fd742287bfd4afa2483';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchWeatherData = async (location) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: location,
        appid: API_KEY,
        units: 'metric',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};

export const fetchForecastData = async (location) => {
  try {
    const response = await axios.get(`${BASE_URL}/forecast`, {
      params: {
        q: location,
        appid: API_KEY,
        units: 'metric',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching forecast data:', error);
    throw error;
  }
};
