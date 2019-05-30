export default class LocationSearch {
  constructor(search) {
    this.params = { query: "" };

    search.replace("?", "").split("&").forEach(keyValue => {
      const [key, value] = keyValue.split("=");

      key === "query" && this.setQuery(value);
    });
  }

  setQuery(query) {
    this.params.query = decodeURI(query);
  }

  getQuery() {
    return this.params.query;
  }

  toString() {
    return Object.entries(this.params).
      filter(([key, val]) => !this.isEmptyParam(val)).
      map(keyVal => encodeURI(keyVal.join("="))).
      join("&");
  }

  isEmptyParam(param) {
    return !param;
  }
}
