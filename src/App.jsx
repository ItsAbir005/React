import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// ✅ Lazy Load Component
const Admin = lazy(() => import("./pages/Admin"));
const Analytics = lazy(() => import("./pages/Analytics"));

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Loader from "./components/Loader"; // loading ui component

function App() {
  return (
    <Router>
      <nav
        style={{
          display: "flex",
          gap: "20px",
          padding: "10px",
          background: "#eee",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/analytics">Analytics</Link>
      </nav>

      {/* ✅ Suspense handles lazy loading */}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />

          {/* ✅ These routes load only when needed */}
          <Route path="/admin" element={<Admin />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
