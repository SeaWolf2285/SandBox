import { Context } from "./App.js";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Favorites = () => {
  const { favorites } = useContext(Context);
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => {
          navigate(`/`);
        }}
      >
        Home
      </button>
      <h1>Favorites</h1>
      {favorites?.map((favorite, idx) => {
        return (
          <button
            key={idx}
            onClick={() => {
              navigate(`/people/${favorite.name}`);
            }}
          >
            {favorite.name}
          </button>
        );
      })}
    </div>
  );
};
export default Favorites;
