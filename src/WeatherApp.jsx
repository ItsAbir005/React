import React, { useState, useEffect } from "react";

function WeatherApp() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  // London Coordinates (example)
  const API_URL =
    "https://api.open-meteo.com/v1/forecast?latitude=51.5072&longitude=-0.1276&current_weather=true";

  useEffect(() => {
    async function fetchWeather() {
      try {
        const res = await fetch(API_URL);

        if (!res.ok) {
          throw new Error("Weather API failed");
        }

        const data = await res.json();
        setWeather(data.current_weather);
      } catch (err) {
        // ❗ Throw error so ErrorBoundary catches it
        throw err;
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
  }, []);

  if (loading) return <p>Fetching weather...</p>;

  return (
    <div>
      <h1>Weather App 🌤</h1>
      <h2>City: London</h2>
      <h3>Temperature: {weather.temperature}°C</h3>
      <h4>Condition: {weather.weathercode}</h4>
    </div>
  );
}

export default WeatherApp;
