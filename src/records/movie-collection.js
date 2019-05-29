import MovieRecord from "records/movie-record";

export default class MovieCollection {
  static parse(apiMovies) {
    return new MovieCollection({
      currentPage: apiMovies.page,
      total: apiMovies.total_results,
      movies: apiMovies.results.map(m => MovieRecord.parse(m)),
      perPage: apiMovies.results.length
    });
  }

  constructor(collection) {
    this.currentPage = collection.currentPage;
    this.total = collection.total;
    this.movies = collection.movies;
    this.perPage = collection.perPage;
  }

  getMovies() {
    return this.movies;
  }

  hasMore() {
    return this.total !== this.movies.length;
  }

  merge(otherCollection) {
    return new MovieCollection({
      currentPage: otherCollection.currentPage,
      total: otherCollection.total,
      movies: [...this.movies, ...otherCollection.movies],
      perPage: this.perPage
    });
  }
}
