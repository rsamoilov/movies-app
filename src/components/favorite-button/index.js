import React, { useGlobal } from "reactn";
import PropTypes from "prop-types";
import classNames from "classnames";
import Octicon, { Star } from '@githubprimer/octicons-react';
import FavoritesController from "controllers/favorites-controller";
import MovieRecord from "records/movie-record";

import "./index.scss";

export default function FavoriteButton({ movie }) {
  const [_, setCurrentFavoriteId] = useGlobal("favorite");
  const isFavorite = FavoritesController.isFavorite(movie);

  function handleClick(e) {
    e.preventDefault();
    FavoritesController.toggleFavorite(movie);
    setCurrentFavoriteId(movie.id);
  }

  return (
    <div
      onClick={handleClick}
      className={classNames("FavoriteButton", { "FavoriteButton__selected": isFavorite })}
    >
      <Octicon height={24}><Star /></Octicon>
    </div>
  );
}

FavoriteButton.propTypes = {
  movie: PropTypes.instanceOf(MovieRecord)
};
