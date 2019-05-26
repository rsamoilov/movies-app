import genres from "records/genres-list";

export default class MovieRecord {
  static parse(apiMovie) {
    return new MovieRecord(apiMovie);
  }

  constructor(movie) {
    this.id = movie.id;
    this.title = movie.title;
    this.originalTitle = movie.original_title;
    this.overview = movie.overview;
    this.rating = movie.vote_average;
    this.poster = movie.poster_path;
    this._genreIds = movie.genre_ids;
  }

  getGenres() {
    return this._genreIds.map(genreId => genres.get(genreId));
  }
}
