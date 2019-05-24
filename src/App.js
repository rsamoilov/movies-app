import React, { setGlobal } from 'reactn';
import MoviesColumn from "movies-column/index";
import 'App.css';

setGlobal({
  movies: null,
  selectedMovie: null,
  searchTerm: ""
});

function App() {
  return (
    <div className="App container-fluid">
      <MoviesColumn />
    </div>
  );
}

export default App;
