import React, { useState } from 'react';

const WeatherCard = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState('');

    const apiKey = '';

    const getWeather = async () => {
        if (!city) return;

        try {
            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
            );

            if (!res.ok) {
                throw new Error('City not found or API error');
            }

            const data = await res.json();
            setWeather(data);
            setError('');
        } catch (err) {
            setWeather(null);
            setError(err.message);
        }
    };

    return (
        <>
            <input
                type="text"
                placeholder="Enter city name"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button onClick={getWeather}>Get Weather</button>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            {weather && weather.main && (
                <div className="weather-info">
                    <h2>{weather.name}</h2>
                    <p>Temp: {weather.main.temp}°C</p>
                    <p>Weather: {weather.weather[0].description}</p>
                </div>
            )}
        </>
    );
};

export default WeatherCard;
