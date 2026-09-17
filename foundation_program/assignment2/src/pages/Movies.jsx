import { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
import { getMovies } from '../services/getMovies';
import { searchMovies } from '../services/searchMovies';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(async () => {
      setIsLoading(true);

      if (search.trim() === '') {
        const data = await getMovies();
        setIsLoading(false);
        setMovies(data);
        return;
      }

      const data = await searchMovies(search);
      setMovies(data);
      setIsLoading(false);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  return (
    <section className="mx-auto w-full px-4 py-10">
      <input
        type="text"
        placeholder="Search movies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-8 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-red-500"
      />

      {isLoading ?
        <p className="text-center text-4xl text-yellow-500">Loading...</p>
      : movies.length === 0 ?
        <p className="text-center text-4xl text-red-500">No movies found.</p>
      : <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      }
    </section>
  );
}
