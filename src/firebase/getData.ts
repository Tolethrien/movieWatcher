import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import db from "../firebase/firebase";
import { useEffect, useState } from "react";
interface DBData {
  name: string;
  id: string;
  watched: boolean;
}

export const updateMovie = (id: string, value: boolean) => {
  const ref = doc(db, "movies", id);
  updateDoc(ref, { watched: value });
};
export const deleteMovie = (id: string) => {
  const ref = doc(db, "movies", id);
  deleteDoc(ref);
};
export const GetMovies = () => {
  const [movies, setMovies] = useState<DBData[]>([]);
  const GetProjects = () => {
    const querySorted = query(collection(db, "movies"), orderBy("name", "asc"));

    onSnapshot(
      querySorted,
      (snap) => {
        setMovies(
          snap.docs.map((doc) => ({
            name: doc.data().name,
            id: doc.id,
            watched: doc.data().watched,
          })) as DBData[]
        );
      },
      (err) => console.log(err)
    );
  };
  useEffect(() => {
    GetProjects();
  }, []);

  return movies;
};
