import React from 'react';
import WeatherCard from './components/WeatherCard';

const App = () => {
  return (
    <div className="weather-container">
      <h1 className="app-heading">Weather App</h1> 
      <WeatherCard />
    </div>
  );
};

export default App;
