import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchWeather = (city) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const URL = 'https://api.openweathermap.org/data/2.5/';
  const apiKey = '887aaff89bee4fd742287bfd4afa2483';

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `${URL}weather?q=${city}&appid=${apiKey}&units=metric`
        );
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  return { data, loading, error };
};

export default useFetchWeather;
