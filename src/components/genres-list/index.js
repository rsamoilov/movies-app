import React, { Fragment } from "reactn";
import PropTypes from "prop-types";

export default function GenresList(props) {
  return (
    <Fragment>
      {props.genres.map(genre => (
        <span key={genre} className="badge badge-pill badge-warning mr-1">{genre}</span>
      ))}
    </Fragment>
  );
};

GenresList.propTypes = {
  genres: PropTypes.array
};
