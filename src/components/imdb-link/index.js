import React from "reactn";
import PropTypes from "prop-types";
import MovieRecord from "records/movie-record";
import imdbLogo from "icons/imdb-icon.png";

import "./index.scss";

export default function IMDBLink(props) {
  return (
    <div className="IMDBLink">
      <a
        href={`https://imdb.com/title/${props.movie.imdbId}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={imdbLogo} alt="IMDb" />
      </a>
    </div>
  );
}

IMDBLink.propTypes = {
  movie: PropTypes.instanceOf(MovieRecord)
};
