import React, { useGlobal } from "reactn";
import withSearch from "components/hocs/with-search";
import MovieController from "controllers/movie-controller";

let searchTimeoutId = null;

function SearchField(props) {
  const [_, setMovies] = useGlobal("movies");
  const { setQuery, getQuery, getPage } = props;

  function handleChange(e) {
    clearTimeout(searchTimeoutId);

    const searchQuery = e.target.value;
    setQuery(searchQuery);
    setMovies(null);

    searchTimeoutId = setTimeout(
      () => MovieController.fetchMovies(searchQuery, getPage()).then(movies => setMovies(movies)),
      200
    );
  }

  return (
    <input
      className="form-control rounded-pill"
      placeholder="Search..."
      value={getQuery()}
      onChange={handleChange}
    />
  );
}

export default withSearch(SearchField);
