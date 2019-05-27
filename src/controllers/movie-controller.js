import MovieRecord from "records/movie-record";
import MovieInfoRecord from "records/movie-info-record";

export default class MovieStore {
  static getMovies() {
    return fetch(
      `http://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`
    ).then(response => response.json()).
      then(json => json.results.map(m => MovieRecord.parse(m)));
  }

  static getMovie(id) {
    return fetch(
      `http://api.themoviedb.org/3/movie/${id}?&append_to_response=similar&api_key=${process.env.REACT_APP_API_KEY}`
    ).then(response => response.json()).
      then(json => MovieInfoRecord.parse(json));
  }

  static searchMovies(searchTerm) {
    return fetch(
      `http://api.themoviedb.org/3/search/movie?query=${encodeURI(searchTerm)}&api_key=${process.env.REACT_APP_API_KEY}`
    ).then(response => response.json()).
      then(json => json.results.map(m => MovieRecord.parse(m)));
  }
}
