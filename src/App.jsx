import React, { useContext } from "react";
import UserContext from "./context/userContext";
import ContestProvider from "./context/contextProvider";
import Login from "./components/login";
import Profile from "./components/profile";
function App() {
  return (
    <ContestProvider>
      <div>
        <h1>User Management App</h1>
        <Login />
        <Profile />
      </div>
    </ContestProvider>
  );
}
export default App;
