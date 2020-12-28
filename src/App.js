import "./App.css";
import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Movies from "./Movies";
import { Button, Container } from "react-bootstrap";
const url = "https://josenauto.github.io/api/our-movies-api.json";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const removeMovie = (id) => {
    const newMovies = movies.filter((movie) => movie.id !== id);
    setMovies(newMovies);
  };

  const fetchMovies = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const movies = await response.json();
      setLoading(false);
      setMovies(movies);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);
  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  if (movies.length === 0) {
    return (
      <div className="text-center">
        <h2>No movies left</h2>
        <Button onClick={fetchMovies}>Refresh</Button>
      </div>
    );
  } else {
    return (
      <div>
        <Container>
          <Movies movies={movies} removeMovie={removeMovie} />
        </Container>
      </div>
    );
  }
}

export default App;
