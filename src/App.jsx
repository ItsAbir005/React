import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function App() {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  const appStyle = {
    backgroundColor: isDark ? "#222" : "#fff",
    color: isDark ? "#fff" : "#000",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={appStyle}>
      <h1>{isDark ? "Dark Mode 🌙" : "Light Mode ☀️"}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default App;
