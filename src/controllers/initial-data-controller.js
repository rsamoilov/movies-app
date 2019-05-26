import genres from "records/genres-list";

export default class InitialDataController {
  static loadData() {
    return this.loadGenres();
  }

  static loadGenres() {
    return fetch(
      `http://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`
    ).then(response => response.json()).
      then(json => json.genres).
      then(apiGenres => genres.setGenres(apiGenres));
  }
}
