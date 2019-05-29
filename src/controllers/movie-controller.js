import MovieCollection from "records/movie-collection";
import MovieInfoRecord from "records/movie-info-record";

export default class MovieStore {
  static fetchMovies(searchQuery, page = 1) {
    const moviesPromise = searchQuery ? this.searchMovies(searchQuery, page) : this.getMovies(page);

    return moviesPromise.
      then(response => response.json()).
      then(json => MovieCollection.parse(json));
  }

  static getMovies(page) {
    return fetch(
      `http://api.themoviedb.org/3/movie/popular?page=${page}&api_key=${process.env.REACT_APP_API_KEY}`
    );
  }

  static searchMovies(searchQuery, page) {
    const query = encodeURI(searchQuery);

    return fetch(
      `http://api.themoviedb.org/3/search/movie?page=${page}&query=${query}&api_key=${process.env.REACT_APP_API_KEY}`
    );
  }

  static getMovie(id) {
    return fetch(
      `http://api.themoviedb.org/3/movie/${id}?&append_to_response=similar&api_key=${process.env.REACT_APP_API_KEY}`
    ).then(response => response.json()).
      then(json => MovieInfoRecord.parse(json));
  }
}
