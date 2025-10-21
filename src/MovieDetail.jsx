import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function MovieDetail() {
  const { id } = useParams(); // 👈 get movie ID from URL
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMovie() {
      try {
        const res = await fetch(`https://www.omdbapi.com/?apikey=YOUR_API_KEY&i=${id}`);
        const data = await res.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchMovie();
  }, [id]);

  if (loading) return <p>Loading movie details...</p>;
  if (!movie) return <p>Movie not found.</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{movie.Title}</h2>
      <p><strong>Year:</strong> {movie.Year}</p>
      <p><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>Plot:</strong> {movie.Plot}</p>
      <img src={movie.Poster} alt={movie.Title} style={{ width: "200px" }} />
    </div>
  );
}

export default MovieDetail;
