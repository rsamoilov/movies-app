import React, { useGlobal } from "reactn";
import withSearch from "components/hocs/with-search";
import MovieController from "controllers/movie-controller";

let searchTimeoutId = null;

function SearchField(props) {
  const [_, setMovies] = useGlobal("movies");
  const { setQuery, getQuery } = props;

  function handleChange(e) {
    clearTimeout(searchTimeoutId);

    const searchQuery = e.target.value;
    setQuery(searchQuery);
    setMovies(null);

    searchTimeoutId = setTimeout(
      () => MovieController.fetchMovies(searchQuery).then(moviesCollection => setMovies(moviesCollection)),
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
