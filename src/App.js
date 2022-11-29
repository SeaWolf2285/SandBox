import React from "react";
import "./styles.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import People from "./People.js";
import Planets from "./Planets.js";
import Home from "./Home.js";
import Person from "./Person.js";
import Favorites from "./Favorites.js";
import Planet from "./Planet.js";
export const Context = React.createContext();
//export const PlanetsContext = React.createContext();

function App() {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [id, setId] = useState("");
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/people")
      .then((res) => res.json())
      .then((data) => setPeople(data.results));
    fetch("https://swapi.dev/api/planets")
      .then((res) => res.json())
      .then((data) => setPlanets(data.results));
    //.then(console.log(people));
  }, []);

  return (
    <div className="App">
      <Context.Provider
        value={{
          people,
          setPeople,
          planets,
          setPlanets,
          id,
          setId,
          favorites,
          setFavorites
        }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/people" element={<People />} />
            <Route path="/planets" element={<Planets />} />
            <Route path="/people/:id" element={<Person />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/planets/:id" element={<Planet />} />
          </Routes>
        </Router>
      </Context.Provider>
    </div>
  );
}

export default App;
