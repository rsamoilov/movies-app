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

  const { getSearch, getQuery, getPage, setPage } = props;

  useEffect(() => {
    MovieController.fetchMovies(getQuery(), getPage()).then((moviesCollection) =>
      setMovies(moviesCollection)
    );
  }, []);

  function loadMoreMovies(e) {
    const currentPage = getPage();
    const nextPage = currentPage + 1;

    // a user is going down
    if (e.previousPosition === Waypoint.below) {
      setPage(nextPage);
    }

    // load only new content
    if (currentPage === moviesCollection.currentPage) {
      MovieController.fetchMovies(getQuery(), nextPage).then((newMovies) =>
        setMovies(moviesCollection.merge(newMovies))
      );
    }
  }

  function decrementPageNo(e) {
    // a user is going up
    if (e.currentPosition === Waypoint.below) {
      setPage(getPage() - 1);
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
          moviesCollection.getMovies().map((movie, i) => 
            <Fragment key={movie.id}>
              <Link
                to={{ pathname: `/movies/${movie.id}`, search: getSearch() }}
                className={classNames(
                  "list-group-item list-group-item-action MoviesColumn__row",
                  { "MoviesColumn__selected-row": selectedMovie && movie.id === selectedMovie.id }
                )}
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
              {(i + 1) % moviesCollection.perPage === 0 && (
                <Waypoint
                  key={i}
                  onEnter={loadMoreMovies}
                  onLeave={decrementPageNo}
                  bottomOffset="-150px"
                >
                </Waypoint>
              )}
            </Fragment>
          )
        )}
      </div>
    </div>
  );
}

export default withSearch(MoviesColumn);
