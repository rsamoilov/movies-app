export default class MovieStore {
  static getMovies() {
    return fetch(
      `http://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}
    `).then(response => response.json());
  }
}
