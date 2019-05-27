import React, { useGlobal } from "reactn";
import PropTypes from "prop-types";
import Octicon, { Star } from '@githubprimer/octicons-react';
import FavoritesController from "controllers/favorites-controller";
import MovieRecord from "records/movie-record";

import "./index.scss";

export default function FavoriteButton({ movie }) {
  const [_, setCurrentFavoriteId] = useGlobal("favorite");
  const isFavorite = FavoritesController.isFavorite(movie);

  function handleClick() {
    FavoritesController.toggleFavorite(movie);
    setCurrentFavoriteId(movie.id);
  }

  return (
    <div onClick={handleClick} className={isFavorite ? "FavoriteButton__selected" : ""}>
      <Octicon height={24}><Star /></Octicon>
    </div>
  );
}

FavoriteButton.propTypes = {
  movie: PropTypes.instanceOf(MovieRecord)
};
