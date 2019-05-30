import React, { Fragment, useEffect, useGlobal } from 'reactn';
import { Waypoint } from 'react-waypoint';
import { Link } from "react-router-dom";
import classNames from 'classnames';
import withSearch from "components/hocs/with-search";
import MovieController from 'controllers/movie-controller';
import SearchField from "components/search-field/index";
import FavoriteButton from "components/favorite-button/index";
import RatingIcon from "components/rating-icon/index";
import GenresList from "components/genres-list/index";

import "./index.scss"

function MoviesColumn(props) {
  const [moviesCollection, setMovies] = useGlobal("movies");
  const [selectedMovie, _]  = useGlobal("selectedMovie");

  const { getSearch, getQuery } = props;

  useEffect(() => {
    MovieController.fetchMovies(getQuery()).then((moviesCollection) =>
      setMovies(moviesCollection)
    );
  }, []);

  function loadMoreMovies(e) {
    if (moviesCollection.hasMore()) {
      MovieController.fetchMovies(getQuery(), moviesCollection.currentPage + 1).then((newMovies) =>
        setMovies(moviesCollection.merge(newMovies))
      );
    }
  }

  return (
    <div className="MoviesColumn list-group list-group-flush">
      <div className="list-group-item MoviesColumn__row MoviesColumn__plain-row">
        <SearchField />
      </div>

      <div className="MoviesColumn__body">
        {moviesCollection === null ? (
          <div className="text-center align-middle MoviesColumn__loading-container">
            <div className="spinner-border text-light MoviesColumn__loading-indicator" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <Fragment>
            {moviesCollection.getMovies().map((movie, i) => 
              <Link
                key={movie.id}
                to={{ pathname: `/movies/${movie.id}`, search: getSearch() }}
                className={classNames(
                  "list-group-item list-group-item-action MoviesColumn__row",
                  { "MoviesColumn__selected-row": selectedMovie && movie.id === selectedMovie.id }
                )}
              >
                <div className="d-flex justify-content-between">
                  <div className="col-10 p-0">{movie.title}</div>
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
            <Waypoint onEnter={loadMoreMovies} bottomOffset="-150px" />
          </Fragment>
        )}
      </div>
    </div>
  );
}

export default withSearch(MoviesColumn);
