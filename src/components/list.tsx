import MovieItem from "./movie";
import { GetMovies } from "../firebase/getData";

export default function MovieList() {
  const movies = GetMovies();

  return (
    <>
      {movies
        .sort((a, b) => Number(a.watched) - Number(b.watched))
        .map(({ name, watched, id }) => (
          <MovieItem title={name} watched={watched} id={id} key={id} />
        ))}
    </>
  );
}
