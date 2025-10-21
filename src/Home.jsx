import { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();
    const res = await fetch(`https://www.omdbapi.com/?apikey=YOUR_API_KEY&s=${query}`);
    const data = await res.json();
    setMovies(data.Search || []);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🎬 Movie Search</h1>

      <form onSubmit={searchMovies}>
        <input
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div style={{ marginTop: "20px" }}>
        {movies.map((movie) => (
          <div key={movie.imdbID} style={{ marginBottom: "10px" }}>
            <Link to={`/movie/${movie.imdbID}`}>{movie.Title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
