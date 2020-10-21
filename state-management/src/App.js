import React from "react";
import "./App.css";
import MovieList from "./Components/MovieList";
import { MovieProvider } from "./Components/MovieContext";
import Nav from "./Components/Nav";
import AddMovie from "./Components/AddMovie";

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
