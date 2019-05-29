import MovieRecord from "./movie-record";

export default class MovieInfoRecord extends MovieRecord {
  static parse(apiMovie) {
    return new MovieInfoRecord({
      id: apiMovie.id,
      title: apiMovie.title,
      posterPath: apiMovie.poster_path,
      originalTitle: apiMovie.original_title,
      rating: apiMovie.vote_average,
      budget: apiMovie.budget,
      genres: apiMovie.genres,
      imdbId: apiMovie.imdb_id,
      overview: apiMovie.overview,
      releaseDate: apiMovie.release_date,
      revenue: apiMovie.revenue,
      recommendations: apiMovie.similar.results.map((apiMovie) => MovieRecord.parse(apiMovie))
    });
  }

  constructor(movie) {
    super(movie);

    this.budget = movie.budget;
    this.genres = movie.genres;
    this.imdbId = movie.imdbId;
    this.overview = movie.overview;
    this.releaseDate = movie.releaseDate;
    this.revenue = movie.revenue;
    this.recommendations = movie.recommendations;
  }

  getGenres() {
    return this.genres.map(genreMap => genreMap.name);
  }
}
