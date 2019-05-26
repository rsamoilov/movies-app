import React, { setGlobal, useGlobal, useEffect } from "reactn";
import InitialDataController from "controllers/initial-data-controller";
import MoviesColumn from "components/movies-column/index";
import MovieInfo from "components/movie-info/index";

import 'App.scss';

setGlobal({
  isLoading: true,
  movies: null,
  selectedMovie: null,
  searchTerm: ""
});

function App() {
  const [isLoading, setLoading] = useGlobal("isLoading");

  useEffect(() => {
    InitialDataController.loadData().then(() => setLoading(false));
  }, []);

  if(isLoading) {
    return <div>Loading...</div>;
  }

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
