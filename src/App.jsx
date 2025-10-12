import React, { useState, useEffect } from "react";

export default function WeatherApp() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Simulating an API call
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=51.5072&longitude=0.1276&current_weather=true"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setWeather(data.current_weather);
        setError(null);
      } catch (err) {
        console.error("Error fetching weather:", err);
        setError(err.message);
      } finally {
        setLoading(false); // done fetching (success or error)
      }
    };

    fetchWeather();
  }, []); // runs only on mount

  // 🧩 Conditional Rendering:
  if (loading) {
    return (
      <div className="p-4 text-center border rounded-lg shadow-md">
        <h2 className="text-lg font-bold">🌤 Weather App</h2>
        <p>Loading weather...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 text-center border rounded-lg shadow-md text-red-500">
        <h2 className="text-lg font-bold">🌤 Weather App</h2>
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="p-4 text-center border rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-2">🌤 Weather App</h2>
      <p>Temperature: {weather.temperature}°C</p>
      <p>Wind Speed: {weather.windspeed} km/h</p>
      <p>Wind Direction: {weather.winddirection}°</p>
    </div>
  );
}
