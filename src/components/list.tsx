import MovieItem from "./movie";
import { DBData } from "../firebase/getData";
interface Props {
  movies: DBData[];
  picked: string;
}
export default function MovieList({ movies, picked }: Props) {
  return (
    <>
      {movies
        .sort((a, b) => Number(a.watched) - Number(b.watched))
        .map(({ name, watched, id }) => (
          <MovieItem
            title={name}
            watched={watched}
            id={id}
            key={id}
            focus={name === picked}
          />
        ))}
    </>
  );
}
