export default class LocationSearch {
  constructor(search) {
    this.params = {}

    search.replace("?", "").split("&").forEach(keyValue => {
      const [key, value] = keyValue.split("=");

      key === "page"  && this.setPage(value);
      key === "query" && this.setQuery(value);
    });
  }

  setQuery(query) {
    this.params.query = decodeURI(query);
  }

  getQuery() {
    return this.params.query;
  }

  setPage(page) {
    this.params.page = parseInt(page);
  }

  getPage() {
    return this.params.page;
  }

  toString() {
    return Object.entries(this.params).
      filter(([key, val]) => !!val).
      map(keyVal => encodeURI(keyVal.join("="))).
      join("&");
  }
}
