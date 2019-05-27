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
    this.productionCompanies = movie.production_companies;
    this.productionCountries = movie.production_countries;
    this.releaseDate = movie.release_date;
    this.revenue = movie.revenue;

    this.recommendations = movie.similar.results.map((apiMovie) => MovieRecord.parse(apiMovie));
  }

  getGenres() {
    return this.genres.map(genreMap => genreMap.name);
  }
}
