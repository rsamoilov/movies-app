import React, { setGlobal, useGlobal, useEffect } from "reactn";
import { BrowserRouter, Route } from "react-router-dom";
import classNames from "classnames";
import InitialDataController from "controllers/initial-data-controller";
import WelcomeMessage from "components/welcome-message/index";
import MoviesColumn from "components/movies-column/index";
import MovieInfo from "components/movie-info/index";

import 'App.scss';

setGlobal({
  isLoading: true,
  movies: null,
  selectedMovie: null,
  favorite: null
});

function App() {
  const [isLoading, setLoading] = useGlobal("isLoading");
  const [selectedMovie, _] = useGlobal("selectedMovie");

  useEffect(() => {
    InitialDataController.loadData().then(() => setLoading(false));
  }, []);

  if(isLoading) {
    return (
      <div className="col-1 mx-auto mt-5">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <div className="App container-fluid">
        <div className="row pt-2">
          <Route
            path="/"
            render={props =>
              <React.Fragment>
                <div className={classNames("col-12 col-lg-4 App__sidebar", { "d-none d-lg-block": selectedMovie })}>
                  <MoviesColumn {...props} />
                </div>
                {!selectedMovie && (
                  <WelcomeMessage />
                )}
              </React.Fragment>
            }
          />
          <Route
            path="/movies/:id"
            render={props =>
              <div className={classNames("col-12 col-lg-8 App__container", { "d-none d-lg-block": !selectedMovie })}>
                <MovieInfo {...props} />
              </div>
            }
          />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
