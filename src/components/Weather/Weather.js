// // Weather.js
// import React, { useEffect, useState } from 'react';
// import './Weather.css'; // Import your CSS file for styling

// const Weather = () => {
//   const [weatherData, setWeatherData] = useState(null);
//   const apiKey = '246ab8a3ed8f734081ee6cdc410feb71'; // Replace with your OpenWeatherMap API key
//   const city = 'Delhi'; // Replace with the name of the city for which you want weather data

//   useEffect(() => {
//     // Make an API request to fetch weather data
//     fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`)
//       .then((response) => response.json())
//       .then((data) => {
//         setWeatherData(data);
//       })
//       .catch((error) => {
//         console.error('Error fetching weather data:', error);
//       });
//   }, [apiKey, city]);

//   if (!weatherData) {
//     return <div>Loading weather data...</div>;
//   }

//   // Function to format date from the API response
//   const formatDate = (timestamp) => {
//     const date = new Date(timestamp * 1000);
//     const day = date.toLocaleDateString('en-US', { weekday: 'short' });
//     const time = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
//     return `${day} ${time}`;
//   };

//   return (
//     <div className="weather-container">
//       <h2 className="city-name">5-Day Weather Forecast for {weatherData.city.name}</h2>
//       <div className="weather-forecast">
//         {weatherData.list.map((forecast) => (
//           <div key={forecast.dt} className="forecast-item">
//             <div className="forecast-date">{formatDate(forecast.dt)}</div>
//             <div className="weather-details">
//               <img
//                 className="weather-icon"
//                 src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
//                 alt={forecast.weather[0].description}
//               />
//               <div className="temperature">{forecast.main.temp}°C</div>
//               <div className="humidity">Humidity: {forecast.main.humidity}%</div>
//               <div className="wind-speed">Wind Speed: {forecast.wind.speed} m/s</div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Weather;
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Weather.css'; // Import your CSS file for styling

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [data, setdata] = useState(null); // Initialize data as null
  const apiKey = '246ab8a3ed8f734081ee6cdc410feb71'; // Replace with your OpenWeatherMap API key
  const city = 'Delhi'; // Replace with the name of the city for which you want weather data
  const navigate = useNavigate();

  useEffect(() => {
    // Make an API request to fetch weather data
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

  // Function to format date from the API response
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
