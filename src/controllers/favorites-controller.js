const StorageKey = "favorites";

export default class FavoritesController {

  static addToFavorites(movie) {
    this.setFavorites((favorites) => ({ ...favorites, [movie.id]: true }));
  }

  static removeFromFavorites(movie) {
    this.setFavorites((favorites) => ({ ...favorites, [movie.id]: false }));
  }

  static isFavorite(movie) {
    return !!this.getFavorites()[movie.id];
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

  static getFavorites() {
    return JSON.parse(localStorage.getItem(StorageKey)) || {};
  }

  static setFavorites(callback) {
    const oldFavorites = this.getFavorites();
    const newFavorites = callback(oldFavorites);

    localStorage.setItem(StorageKey, JSON.stringify(newFavorites));
  }
}
