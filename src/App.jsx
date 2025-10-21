import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import MovieDetail from "./MovieDetail"; // new component

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/movie/:id" element={<MovieDetail />} /> {/* Dynamic route */}
      </Routes>
    </>
  );
}

export default App;
