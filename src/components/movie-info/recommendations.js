import React from "reactn";
import PropTypes from "prop-types";
import MovieRecord from "records/movie-record";
import configuration from "records/configuration";

export default function Recommendations(props) {
  return (
    <div className="d-flex justify-content-center">
      {props.movies.slice(0, 5).map(movie => (
        <div className="col-2">
          <img src={configuration.getImageUrl(movie.posterPath, 1)} className="img-fluid" />
        </div>
      ))}
    </div>
  );
}

Recommendations.propTypes = {
  movies: PropTypes.arrayOf(MovieRecord)
};
