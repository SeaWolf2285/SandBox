import { useContext } from "react";
import { Context } from "./App";

import { useNavigate } from "react-router-dom";

const Planet = () => {
  const { planets, id, favorites, setFavorites } = useContext(Context);
  const navigate = useNavigate();
  const planet = planets.find((char) => {
    return char.name == id;
  });

  return (
    <div>
      <button
        onClick={() => {
          navigate(`/`);
        }}
      >
        Home
      </button>
      <button
        onClick={() => {
          setFavorites(planet);
          console.log(favorites);
        }}
      >
        Add Favorite
      </button>
      <li>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTku4lL_0lUq7F7M3-nVDAsBWFqC0ZY_pjdtQ&usqp=CAU"
            width="100px"
          />
          <h1>{planet.name}</h1>
          <h2>This Is A Planet</h2>
          <h3>Unlike Pluto...</h3>
        </div>
      </li>
    </div>
  );
};

export default Planet;
