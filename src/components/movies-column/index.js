import React, { useEffect, useGlobal } from 'reactn';
import { Link } from "react-router-dom";
import MovieController from 'controllers/movie-controller';
import FavoriteButton from "components/favorite-button/index";
import RatingIcon from "components/rating-icon/index";
import GenresList from "components/genres-list/index";

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
        <Link
          key={movie.id}
          to={`/movies/${movie.id}`}
          className="list-group-item list-group-item-action MoviesColumn__row"
        >
          <div className="d-flex justify-content-between">
            <div>{movie.title}</div>
            <RatingIcon movie={movie} />
          </div>
          <div className="d-flex justify-content-between">
            <div>
              <GenresList genres={movie.getGenres().slice(0, 3)} />
            </div>
            <FavoriteButton movie={movie} />
          </div>
        </Link>
      )}
    </div>
  );
}
