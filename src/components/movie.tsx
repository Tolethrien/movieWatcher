import { deleteMovie, updateMovie } from "../firebase/getData";

interface Props {
  title: string;
  watched: boolean;
  id: string;
  focus: boolean;
}
export default function MovieItem({
  title,
  watched = false,
  id,
  focus,
}: Props) {
  return (
    <>
      <div className={`MovieTile ${focus ? "focus" : ""}`}>
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
