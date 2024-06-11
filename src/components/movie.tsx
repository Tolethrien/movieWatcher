import { deleteMovie, updateMovie } from "../firebase/getData";

interface Props {
  title: string;
  watched: boolean;
  id: string;
}
export default function MovieItem({ title, watched = false, id }: Props) {
  return (
    <>
      <div className="MovieTile">
        <h2 className={`MovieTitle ${watched && "watched"}`}>{title}</h2>
        <div className="MovieButts">
          <button onClick={() => updateMovie(id, !watched)}>
            {!watched ? "Done" : "Again?"}
          </button>
          <button onClick={() => deleteMovie(id)}>Delete</button>
        </div>
      </div>
    </>
  );
}
