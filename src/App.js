import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import { Button, Container, Row } from "react-bootstrap";
const url = "https://josenauto.github.io/api/our-movies-api.json";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);
  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  if (tours.length === 0) {
    return (
      <div className="text-center">
        <h2>No tours left</h2>
        <Button onClick={fetchTours}>Refresh</Button>
      </div>
    );
  } else {
    return (
      <div>
        <Container>
          <Tours tours={tours} removeTour={removeTour} />
        </Container>
      </div>
    );
  }
}

export default App;
