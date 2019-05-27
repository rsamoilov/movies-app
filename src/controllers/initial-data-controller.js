import genres from "records/genres-list";
import configuration from "records/configuration";

export default class InitialDataController {
  static loadData() {
    return Promise.all([
      this.loadGenres(),
      this.loadConfiguration()
    ]);
  }

  static loadGenres() {
    return fetch(
      `http://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`
    ).then(response => response.json()).
      then(json => json.genres).
      then(apiGenres => genres.setGenres(apiGenres));
  }

  static loadConfiguration() {
    return fetch(
      `http://api.themoviedb.org/3/configuration?api_key=${process.env.REACT_APP_API_KEY}`
    ).then(response => response.json()).
      then(json => configuration.setConfiguration(json));
  }
}
