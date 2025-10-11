import React, { useState, useEffect } from "react";

export default function WeatherApp() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("London");

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=51.5072&longitude=0.1276&current_weather=true`
        );
        const data = await response.json();
        setWeather(data.current_weather);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };
    fetchWeather();
  }, []); 

  return (
    <div className="p-4 max-w-sm mx-auto text-center border rounded-lg shadow-md">
      <h1 className="text-xl font-bold mb-2">🌤 Weather App</h1>
      {weather ? (
        <div>
          <p>City: {city}</p>
          <p>Temperature: {weather.temperature}°C</p>
          <p>Wind Speed: {weather.windspeed} km/h</p>
        </div>
      ) : (
        <p>Loading weather...</p>
      )}
    </div>
  );
}
