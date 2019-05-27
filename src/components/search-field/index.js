import React, { useGlobal } from "reactn";
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

export default function SearchField() {
  const [searchTerm, setSearch] = useGlobal("search");

  function handleChange(e) {
    const search = e.target.value;

    setSearch(search);
    history.push({
      search: search ? `?q=${search}` : null
    });
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
