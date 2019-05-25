import React, { setGlobal } from 'reactn';
import MoviesColumn from "components/movies-column/index";
import MovieInfo from "components/movie-info/index";
import 'App.scss';

setGlobal({
  movies: null,
  selectedMovie: null,
  searchTerm: ""
});

function App() {
  return (
    <div className="App container-fluid">
      <div className="row">
        <div className="col-4 App__sidebar">
          <MoviesColumn />
        </div>
        <div className="col-8 App__container">
          <MovieInfo />
        </div>
      </div>
    </div>
  );
}

export default App;
