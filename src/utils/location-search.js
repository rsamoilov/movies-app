export default class LocationSearch {
  constructor(search) {
    this.params = { query: "", page: 1 };

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
    this.params.page = page ? parseInt(page) : 1;
  }

  getPage() {
    return this.params.page;
  }

  toString() {
    return Object.entries(this.params).
      filter(([key, val]) => !this.isEmptyParam(val)).
      map(keyVal => encodeURI(keyVal.join("="))).
      join("&");
  }

  isEmptyParam(param) {
    return !param || param === 1;
  }
}
