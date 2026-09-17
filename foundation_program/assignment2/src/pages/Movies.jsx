import { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
import { getMovies } from '../services/getMovies';

export default function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const loadMovies = async () => {
      const data = await getMovies();
      setMovies(data);
    };

    loadMovies();
  }, []);

  return (
    <section className="mx-auto w-full px-4 py-10">
      <h1 className="mb-8 text-3xl font-bold text-center">All Movies</h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}
