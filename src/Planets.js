import React, { useContext } from "react";
import { Context } from "./App.js";
import { useNavigate } from "react-router-dom";

const People = () => {
  const { planets, setId } = useContext(Context);
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
      <li>
        {planets?.map((planet, idx) => {
          return (
            <div key={idx}>
              <div
                onClick={() => {
                  setId(planet.name);
                  navigate(`/planets/${planet.name}`, {});
                }}
              >
                <img
                  src="https://miro.medium.com/max/624/1*eu4dAuXCqJGM7vjKx3D8WA.png"
                  width="100px"
                />
                <h1>{planet.name}</h1>
              </div>
            </div>
          );
        })}
      </li>
    </div>
  );
};

export default People;
