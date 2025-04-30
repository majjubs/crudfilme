const MOVIE_STORAGE_KEY = 'movies';

export const getMovies = () => {
  const movies = localStorage.getItem(MOVIE_STORAGE_KEY);
  return movies ? JSON.parse(movies) : [];
};

export const saveMovie = (movie) => {
  const movies = getMovies();
  movies.push(movie);
  localStorage.setItem(MOVIE_STORAGE_KEY, JSON.stringify(movies));
};

export const deleteMovie = (id) => {
  const updatedMovies = getMovies().filter(movie => movie.id !== id);
  localStorage.setItem(MOVIE_STORAGE_KEY, JSON.stringify(updatedMovies));
};
