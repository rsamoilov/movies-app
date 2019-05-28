export default class LocationSearch {
  constructor(search) {
    this.query = search.slice(3);
  }

  setQuery(query) {
    this.query = query;
  }

  getQuery() {
    return this.query;
  }

  toString() {
    return this.query ? `?q=${this.query}` : "";
  }
}
