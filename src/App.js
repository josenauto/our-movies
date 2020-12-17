import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
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
      <div>
        <h2>no tours left</h2>
        <button onClick={fetchTours}>refresh</button>
      </div>
    );
  } else {
    return (
      <div>
        <Tours tours={tours} removeTour={removeTour} />
      </div>
    );
  }
}

export default App;
