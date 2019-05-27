import React, { useGlobal } from "reactn";
import { createBrowserHistory } from 'history';
import MovieController from "controllers/movie-controller";

const history = createBrowserHistory();

export default function SearchField() {
  const [searchTerm, setSearch] = useGlobal("search");
  const [_, setMovies] = useGlobal("movies");

  function handleChange(e) {
    const search = e.target.value;

    setSearch(search);
    history.push({
      search: search ? `?q=${search}` : null
    });

    MovieController.searchMovies(search).then(movies => setMovies(movies));
  }

  return (
    <input
      className="form-control rounded-pill"
      placeholder="Search..."
      value={searchTerm}
      onChange={handleChange}
    />
  );
}
