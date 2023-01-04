import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import { NewMovie } from './components/NewMovie';
import moviesFromServer from './api/movies.json';
import { Movie } from './types/Movie';

export const App = () => {
  const moviesList = [...moviesFromServer];
  const [movies, setMovies] = useState(moviesList);

  function onAdd(movie: Movie) {
    setMovies(moviesCurrentList => [...moviesCurrentList, movie]);
  }

  return (
    <div className="page">
      <div className="page-content">
        <MoviesList movies={movies} />
      </div>
      <div className="sidebar">
        <NewMovie onAdd={(e) => onAdd(e)} />
      </div>
    </div>
  );
};
