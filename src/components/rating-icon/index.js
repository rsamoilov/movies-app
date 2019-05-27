import React from 'reactn';
import PropTypes from 'prop-types';
import Octicon, { Thumbsup } from '@githubprimer/octicons-react';
import MovieRecord from "records/movie-record";

export default function RatingIcon(props) {
  return (
    <div>
      <Octicon><Thumbsup /></Octicon> {props.movie.rating}
    </div>
  );
}

RatingIcon.propTypes = {
  movie: PropTypes.instanceOf(MovieRecord)
};
