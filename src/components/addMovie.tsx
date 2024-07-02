import { useState } from "react";
import { addMovie } from "../firebase/getData";
interface Props {
  onClose: () => void;
  forwardedRef: React.RefObject<HTMLFormElement>;
}
export default function AddNewMovie({ onClose, forwardedRef }: Props) {
  const [name, setName] = useState("");
  const submitTitle = (event: React.FormEvent) => {
    event.preventDefault();
    if (name.length === 0) onClose();
    addMovie(name);
    onClose();
  };

  return (
    <form
      onSubmit={submitTitle}
      className="MovieTile AddFilmTile"
      ref={forwardedRef}
    >
      <div className="addFilmTileFlex">
        <input
          autoFocus
          className={`MovieTitle`}
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <div className="MovieButts">
          <button type="submit">Add</button>
          <button onClick={onClose}>X</button>
        </div>
      </div>
    </form>
  );
}
