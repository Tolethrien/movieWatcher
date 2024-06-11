import { collection, doc, setDoc } from "firebase/firestore";
import db from "../firebase/firebase";
import { useState } from "react";
interface Props {
  onClose: () => void;
}
export default function AddNewMovie({ onClose }: Props) {
  const [name, setName] = useState("");
  console.log(name);
  const submitTitle = (event: React.FormEvent) => {
    event.preventDefault();
    if (name.length === 0) onClose();
    const ref = doc(collection(db, "movies"));
    setDoc(ref, { name, watched: false });
    onClose();
  };
  return (
    <form onSubmit={submitTitle}>
      <div className="MovieTile AddFilmTile">
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
