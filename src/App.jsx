import React, { Suspense, lazy } from "react";
import ErrorBoundary from "./ErrorBoundary";

const WeatherApp = lazy(() => import("./WeatherApp"));

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<h2>Loading Weather App...</h2>}>
        <WeatherApp />
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
