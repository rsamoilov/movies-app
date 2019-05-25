export default class MovieRecord {
  static parse(apiMovie) {
    return {
      id: apiMovie.id,
      title: apiMovie.title,
      originalTitle: apiMovie.original_title,
      overview: apiMovie.overview,
      rating: apiMovie.vote_average,
      poster: apiMovie.poster_path
    };
  }
}
