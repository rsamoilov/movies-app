import React, { useEffect, useGlobal } from 'reactn';
import MovieController from 'controllers/movie-controller';
import FavoriteButton from "components/favorite-button/index";
import RatingIcon from "components/rating-icon/index";
import history from "utils/history";

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
        <button
          key={movie.id}
          onClick={(e) => history.push(movie.id.toString())}
          className="list-group-item list-group-item-action MoviesColumn__row"
        >
          <div className="d-flex justify-content-between">
            <div>{movie.title}</div>
            <RatingIcon movie={movie} />
          </div>
          <div className="d-flex justify-content-between">
            <div>
              {movie.getGenres().slice(0, 3).map(genre => (
                <span key={genre} className="badge badge-pill badge-warning mr-1">{genre}</span>
              ))}
            </div>
            <FavoriteButton />
          </div>
        </button>
      )}
    </div>
  );
}
