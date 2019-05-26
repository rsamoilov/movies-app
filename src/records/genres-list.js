class GenresList {
  constructor() {
    this._genresMap = {};
  }

  setGenres(apiGenres) {
    this._genresMap = apiGenres.reduce(
      (acc, val) => Object.assign(acc, { [val.id]: val.name }),
      {}
    );
  }

  get(genreId) {
    return this._genresMap[genreId];
  }
}

export default new GenresList();
