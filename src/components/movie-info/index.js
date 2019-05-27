import React, { useEffect, useGlobal } from 'reactn';
import MovieController from "controllers/movie-controller";
import RatingIcon from "components/rating-icon/index";
import FavoriteButton from "components/favorite-button/index";
import IMDBLink from "components/imdb-link/index";
import GenresList from "components/genres-list/index";
import history from "utils/history";
import configuration from "records/configuration";
import Properties from "./properties";
import Recommendations from "./recommendations";

import "./index.scss";

function currentMovieId() {
  const path = history.location.pathname;

  return path === "/" ? null : parseInt(path.slice(1));
}

export default function MovieInfo() {
  const [selectedMovie, setMovie] = useGlobal("selectedMovie");

  useEffect(() => {
    history.listen((location, action) => {
      MovieController.getMovie(currentMovieId()).then((movie) => setMovie(movie));
    });
  }, []);

  if (!selectedMovie) {
    return <div className="MovieInfo"></div>;
  }

  return (
    <div className="MovieInfo p-3">
      <div className="d-flex justify-content-between mb-3">
        <div>
          <h4>{selectedMovie.title}</h4>
          <h6 className="text-secondary">{selectedMovie.originalTitle}</h6>
        </div>
        <div>
          <div className="d-flex justify-content-around">
            <RatingIcon movie={selectedMovie} />
            <FavoriteButton />
          </div>
          <div>
            <IMDBLink movie={selectedMovie} />
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-between">
        <div className="col-4 MovieInfo__poster">
          <img className="img-fluid" src={configuration.getImageUrl(selectedMovie.posterPath)} />
        </div>

        <div className="col-8">
          <Properties movie={selectedMovie} />

          <div className="mt-4">
            <p className="text-justify">
              {selectedMovie.overview}
            </p>
          </div>

          <GenresList genres={selectedMovie.getGenres()} />
        </div>
      </div>

      <div className="col-10 mx-auto mt-5">
        <Recommendations movies={selectedMovie.recommendations} />
      </div>
    </div>
  );
}
