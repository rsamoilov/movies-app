import React, { useEffect, useGlobal } from 'reactn';
import MovieController from "controllers/movie-controller";
import RatingIcon from "components/rating-icon/index";
import FavoriteButton from "components/favorite-button/index";
import IMDBLink from "components/imdb-link/index";
import GenresList from "components/genres-list/index";
import Properties from "./properties";
import Recommendations from "./recommendations";

import "./index.scss";

export default function MovieInfo({ match }) {
  const [selectedMovie, setMovie] = useGlobal("selectedMovie");

  useEffect(() => {
    MovieController.getMovie(match.params.id).then((movie) => {
      setMovie(movie);
      window.scrollTo(0, 0);
    });
  }, [match.params.id]);

  if (!selectedMovie) {
    return <div className="MovieInfo"></div>;
  }

  return (
    <div className="MovieInfo p-3">
      <div className="d-flex justify-content-between mb-3">
        <div className="col-8 col-lg-10">
          <h4>{selectedMovie.title}</h4>
          <h6 className="text-secondary">{selectedMovie.originalTitle}</h6>
        </div>
        <div className="col-4 col-lg-2">
          <div className="d-flex justify-content-end">
            <div className="mr-2"><RatingIcon movie={selectedMovie} /></div>
            <FavoriteButton movie={selectedMovie} />
          </div>
          <div className="float-right">
            <IMDBLink movie={selectedMovie} />
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center align-items-lg-stretch flex-column flex-lg-row">
        <div className="col-lg-4 col-md-6">
          <img className="img-fluid" src={selectedMovie.getPosterURL()} />
        </div>

        <div className="col-lg-8 col-md-12 mt-3 mt-lg-0">
          <Properties movie={selectedMovie} />

          <div className="mt-4">
            <p className="text-justify MovieInfo__overview">
              {selectedMovie.overview}
            </p>
          </div>

          <GenresList genres={selectedMovie.getGenres()} />
        </div>
      </div>

      <div className="col-12 col-lg-10 mx-auto mt-5">
        <Recommendations movies={selectedMovie.recommendations} />
      </div>
    </div>
  );
}
