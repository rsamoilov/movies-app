import React from "reactn";
import PropTypes from "prop-types";
import MovieRecord from "records/movie-record";
import configuration from "records/configuration";

export default function Recommendations(props) {
  return (
    <React.Fragment>
      <h5 className="text-center">You may also like:</h5>

      <div className="d-flex justify-content-center">
        {props.movies.slice(0, 5).map(movie => (
          <div key={movie.id} className="col-2">
            <img src={configuration.getImageUrl(movie.posterPath, 1)} className="img-fluid" />
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

Recommendations.propTypes = {
  movies: PropTypes.arrayOf(MovieRecord)
};
