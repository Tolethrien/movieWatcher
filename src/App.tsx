import { useRef, useState } from "react";
import AddNewMovie from "./components/addMovie";
import MovieList from "./components/list";
import "./index.css";
import { GetMovies } from "./firebase/getData";
function App() {
  const [isNewOpen, setIsNewOpen] = useState(false);
  const [randomMovie, setRandomMovie] = useState("");
  const ref = useRef<HTMLFormElement>(null);

  const movies = GetMovies();

  const pickRandomMovie = () => {
    const filtered = movies.filter(
      (el) => el.watched !== true && el.name !== randomMovie
    );
    const random = filtered[Math.floor(Math.random() * filtered.length)];
    setRandomMovie(random.name);
  };
  const addNewMovie = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsNewOpen(true);
    window.addEventListener("mousedown", handleOutSideClick);
  };
  const handleOutSideClick = (event: MouseEvent) => {
    if (!ref.current?.contains(event.target as Node)) {
      window.removeEventListener("mousedown", handleOutSideClick);
      setIsNewOpen(false);
    }
  };
  return (
    <>
      <div className="Wrapp">
        <div className="Head">
          <h2>Movie List</h2>
          <button className="AddButton" onClick={addNewMovie}>
            Add Movie
          </button>
        </div>
        <div className="lowerLine">
          <button onClick={pickRandomMovie}>Feel Lucky?</button>
          <p>{"---->"}</p>
          <p>{randomMovie}</p>
        </div>
        <div className="list">
          {isNewOpen && (
            <AddNewMovie
              forwardedRef={ref}
              onClose={() => setIsNewOpen(false)}
            />
          )}
          <MovieList movies={movies} picked={randomMovie} />
        </div>
      </div>
    </>
  );
}

export default App;
