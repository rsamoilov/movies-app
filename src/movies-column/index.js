import React, { useEffect, useGlobal } from 'reactn';
import MovieController from 'controllers/movie-controller';

export default function MoviesColumn() {
  const [movies, setMovies] = useGlobal("movies");

  useEffect(() => {
    async function fetchData() {
      const response = await MovieController.getMovies();
      setMovies(response.results);
    }  

    fetchData();
  }, []);

  if (movies === null) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <div className="col-4">
      <div className="list-group">
        {movies.map((movie) =>
          <a key={movie.id} href="#" className="list-group-item list-group-item-action">{movie.title}</a>
        )}
      </div>
    </div>
  );
}
