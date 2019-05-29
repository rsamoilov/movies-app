import MovieRecord from "records/movie-record";

export default class MovieCollection {
  static parse(apiMovies) {
    return new MovieCollection(apiMovies);
  }

  constructor(apiMovies) {
    this.currentPage = apiMovies.page;
    this.total = apiMovies.total_results;
    this.movies = (apiMovies.results || []).map(m => MovieRecord.parse(m))
  }

  getMovies() {
    return this.movies;
  }

  hasMore() {
    return this.total !== this.movies.length;
  }

  merge(otherCollection) {
    const newCollection = new MovieCollection({});

    newCollection.currentPage = otherCollection.currentPage;
    newCollection.total = otherCollection.total;
    newCollection.movies = [...this.movies, ...otherCollection.movies];

    return newCollection;
  }
}
