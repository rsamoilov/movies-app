import MovieRecord from "records/movie-record";
import MovieInfoRecord from "records/movie-info-record";

export default class MovieStore {
  static fetchMovies(searchTerm) {
    const moviesPromise = searchTerm ? this.searchMovies(searchTerm) : this.getMovies();

    return moviesPromise.
      then(response => response.json()).
      then(json => json.results.map(m => MovieRecord.parse(m)));
  }

  static getMovies() {
    return fetch(
      `http://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`
    );
  }

  static searchMovies(searchTerm) {
    const query = encodeURI(searchTerm);

    return fetch(
      `http://api.themoviedb.org/3/search/movie?query=${query}&api_key=${process.env.REACT_APP_API_KEY}`
    );
  }

  static getMovie(id) {
    return fetch(
      `http://api.themoviedb.org/3/movie/${id}?&append_to_response=similar&api_key=${process.env.REACT_APP_API_KEY}`
    ).then(response => response.json()).
      then(json => MovieInfoRecord.parse(json));
  }
}
