// src/Weather.js
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // 또는 fetch 사용 가능
import './Weather.css' 


const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('Seoul'); // 원하는 도시 이름으로 변경

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7ce3ef3ead0479ac77d13919d54dbefe`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, [city]);

  return (
    <div className="weather-container">
      {weatherData ? (
        <div className="weather-info">
          <h2>날씨 정보</h2>
          <p>도시: {weatherData.name}</p>
          <p>기온: {Math.round(weatherData.main.temp - 273.15)}°C</p>
          <p>날씨: {weatherData.weather[0].description}</p>
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
            alt={weatherData.weather[0].description}
          />
        </div>
      ) : (
        <p>날씨 정보를 불러오는 중...</p>
      )}
    </div>
  );
};

export default Weather;
