import MovieRecord from "records/movie-record";

export default class MovieCollection {
  static parse(apiMovies) {
    return new MovieCollection({
      currentPage: apiMovies.page,
      total: apiMovies.total_results,
      movies: (apiMovies.results || []).map(m => MovieRecord.parse(m))
    });
  }

  constructor(collection) {
    this.currentPage = collection.currentPage;
    this.total = collection.total;
    this.movies = collection.movies;
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
      movies: [...this.movies, ...otherCollection.movies]
    });
  }
}
