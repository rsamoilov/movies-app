import React, { setGlobal, useGlobal, useEffect } from "reactn";
import { BrowserRouter, Route } from "react-router-dom";
import InitialDataController from "controllers/initial-data-controller";
import MoviesColumn from "components/movies-column/index";
import MovieInfo from "components/movie-info/index";

import 'App.scss';

setGlobal({
  isLoading: true,
  movies: null,
  selectedMovie: null,
  favorite: null,
  search: ""
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
    <BrowserRouter>
      <div className="App container-fluid">
        <div className="row pt-2">
          <div className="col-4 App__sidebar">
            <MoviesColumn />
          </div>
          <div className="col-8 App__container">
            <Route path="/movies/:id" component={MovieInfo} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
