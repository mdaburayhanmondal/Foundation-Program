export const searchMovies = async (query) => {
  const response = await fetch(
    `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`,
  );

  if (!response.ok) {
    throw new Error('Failed to search movies');
  }

  const data = await response.json();

  return data.map((item) => item.show);
};
