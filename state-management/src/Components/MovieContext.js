import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "Harry Potter",
      price: "$10",
      id: 20123,
    },
    {
      name: "Dark Knight Rises",
      price: "$14",
      id: 20124,
    },
    {
      name: "Inception",
      price: "$12",
      id: 20125,
    },
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
