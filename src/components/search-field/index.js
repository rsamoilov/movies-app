import React, { useGlobal } from "reactn";
import withSearch from "components/hocs/with-search";
import MovieController from "controllers/movie-controller";

function SearchField(props) {
  const [_, setMovies] = useGlobal("movies");

  const { setQuery, getQuery } = props;

  function handleChange(e) {
    const searchQuery = e.target.value;
    setQuery(searchQuery);

    MovieController.fetchMovies(searchQuery).then(movies => setMovies(movies));
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
