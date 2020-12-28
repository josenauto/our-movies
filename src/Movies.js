import React from "react";
import Movie from "./Movie";
import { Row } from "react-bootstrap";

const Movies = ({ movies, removeMovie }) => {
  return (
    <div>
      <div>
        <h2 className="text-center">Our movies</h2>
      </div>
      <div>
        <Row>
          {movies.map((movie) => {
            return <Movie key={movie.id} {...movie} removeMovie={removeMovie} />;
          })}
        </Row>
      </div>
    </div>
  );
};

export default Movies;
