import MovieRecord from "./movie-record";

export default class MovieInfoRecord extends MovieRecord {
  static parse(apiMovie) {
    return new MovieInfoRecord(apiMovie);
  }

  constructor(movie) {
    super(movie);

    this.budget = movie.budget;
    this.genres = movie.genres;
    this.imdbId = movie.imdb_id;
    this.overview = movie.overview;
    this.posterPath = movie.poster_path;
    this.productionCompanies = movie.production_companies;
    this.productionCountries = movie.production_countries;
    this.releaseDate = movie.release_date;
    this.revenue = movie.revenue;
  }
}
