import genres from "records/genres-list";
import configuration from "records/configuration";

export default class MovieRecord {
  static parse(apiMovie) {
    return new MovieRecord({
      id: apiMovie.id,
      title: apiMovie.title,
      posterPath: apiMovie.poster_path,
      originalTitle: apiMovie.original_title,
      rating: apiMovie.vote_average,
      _genreIds: apiMovie.genre_ids
    });
  }

  constructor(movie) {
    this.id = movie.id;
    this.title = movie.title;
    this.posterPath = movie.posterPath;
    this.originalTitle = movie.originalTitle;
    this.rating = movie.rating;
    this._genreIds = movie._genreIds;
  }

  getGenres() {
    return this._genreIds.map(genreId => genres.get(genreId));
  }

  getPosterURL(sizeIndex = 3) {
    return configuration.getImageUrl(this.posterPath, sizeIndex);
  }
}
