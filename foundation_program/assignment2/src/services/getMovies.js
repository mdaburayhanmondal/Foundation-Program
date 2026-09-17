export const getMovies = async () => {
  const response = await fetch('https://api.tvmaze.com/shows');

  if (!response.ok) {
    throw new Error('Failed to fetch movies');
  }

  const movies = await response.json();

  return movies;
};
