import { useState } from "react";
import "./App.css";
import AddNewMovie from "./components/addMovie";
import MovieList from "./components/list";

function App() {
  const [isNewOpen, setIsNewOpen] = useState(false);

  return (
    <>
      <div className="Wrapp">
        <div className="Head">
          <h2>Movie List</h2>
          <button className="AddButton" onClick={() => setIsNewOpen(true)}>
            Add Movie
          </button>
        </div>
        <div className="list">
          {isNewOpen && <AddNewMovie onClose={() => setIsNewOpen(false)} />}
          <MovieList />
        </div>
      </div>
    </>
  );
}

export default App;
