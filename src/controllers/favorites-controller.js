export default class FavoritesController {
  static addToFavorites(movie) {
    localStorage.setItem(this.getKey(movie), "1");
  }

  static removeFromFavorites(movie) {
    localStorage.removeItem(this.getKey(movie));
  }

  static isFavorite(movie) {
    return !!localStorage.getItem(this.getKey(movie));
  }

  static toggleFavorite(movie) {
    const isFavorite = this.isFavorite(movie);

    if (isFavorite) {
      this.removeFromFavorites(movie);
    } else {
      this.addToFavorites(movie);
    }

    return !isFavorite;
  }

  static getKey(movie) {
    return `favorites:${movie.id}`;
  }
}
