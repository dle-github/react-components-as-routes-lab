import React from "react";
import { directors } from "../data";

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((dir) => (
        <div>
          <h2>{dir.name}</h2>
          {dir.movies.map((movie) => (
            <li>{movie}</li>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Directors;
