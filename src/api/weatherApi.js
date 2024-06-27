import axios from 'axios';

const apiKey = '887aaff89bee4fd742287bfd4afa2483';

const weatherApi = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchWeather = async (city) => {
  try {
    const response = await weatherApi.get(
      `/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};

export default weatherApi;
