import React from "reactn";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import MovieRecord from "records/movie-record";

export default function Recommendations(props) {
  if (!props.movies.length) {
    return null;
  }

  return (
    <React.Fragment>
      <h5 className="text-center">You may also like:</h5>

      <div className="d-flex justify-content-center flex-wrap">
        {props.movies.slice(0, 5).map(movie => (
          <div key={movie.id} className="col-4 col-md-2 mb-2 mb-md-0">
            <Link to={`/movies/${movie.id}`}>
              <img src={movie.getPosterURL(1)} className="img-fluid" />
            </Link>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

Recommendations.propTypes = {
  movies: PropTypes.arrayOf(MovieRecord)
};
