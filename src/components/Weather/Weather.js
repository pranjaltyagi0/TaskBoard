import React, { useEffect, useState } from 'react';
import './Weather.css';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = '246ab8a3ed8f734081ee6cdc410feb71';
  const city = 'Delhi';
  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`)
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
      });
  }, [apiKey, city]);

  if (!weatherData) {
    return <div>Loading weather data...</div>;
  }

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const day = date.toLocaleDateString('en-US', { weekday: 'short' });
    const time = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
    return `${day} ${time}`;
  };

  return (
    <div className="weather-container">
      <h2 className="city-name">5-Day Weather Forecast for {weatherData.city.name}</h2>
      <div className="weather-forecast">
        {weatherData.list.map((forecast) => (
          <div key={forecast.dt} className="forecast-item">
            <div className="forecast-date">{formatDate(forecast.dt)}</div>
            <div className="weather-details">
              <img
                className="weather-icon"
                src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
                alt={forecast.weather[0].description}
              />
              <div className="temperature">{forecast.main.temp}°C</div>
              <div className="humidity">Humidity: {forecast.main.humidity}%</div>
              <div className="wind-speed">Wind Speed: {forecast.wind.speed} m/s</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Weather;
