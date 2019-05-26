import React, { useEffect, useGlobal } from 'reactn';
import MovieController from 'controllers/movie-controller';
import Octicon, { Star, Thumbsup } from '@githubprimer/octicons-react';

import "./index.scss"

export default function MoviesColumn() {
  const [movies, setMovies] = useGlobal("movies");

  useEffect(() => {
    MovieController.getMovies().then((movies) => setMovies(movies));
  }, []);

  if (movies === null) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <div className="MoviesColumn list-group list-group-flush">
      {movies.map((movie) =>
        <a
          key={movie.id}
          href="#"
          className="list-group-item list-group-item-action MoviesColumn__row"
        >
          <div className="d-flex justify-content-between">
            <div>{movie.title}</div>
            <div><Octicon><Thumbsup /></Octicon> {movie.rating}</div>
          </div>
          <div className="d-flex justify-content-between">
            <div>
              {movie.getGenres().slice(0, 3).map(genre => (
                <span className="badge badge-pill badge-warning mr-1">{genre}</span>
              ))}
            </div>
            <div>
              <Octicon><Star /></Octicon>
            </div>
          </div>
        </a>
      )}
    </div>
  );
}
