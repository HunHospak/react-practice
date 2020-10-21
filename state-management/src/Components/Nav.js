import React, { useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "./MovieContext";

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <nav>
      <h3>Adam</h3>
      <p>List of movies: {movies.length}</p>
    </nav>
  );
};

export default Nav;
