import { useContext } from "react";
import { Context } from "./App.js";
import { useNavigate } from "react-router-dom";
import { PlanetsContext } from "./App.js";

const Home = () => {
  const navigate = useNavigate();
  const context = useContext(Context);
  // const planets = useContext(PlanetsContext);
  return (
    <div>
      <button
        onClick={() => {
          navigate(`/people`);
        }}
      >
        People
      </button>
      <button
        onClick={() => {
          navigate(`/planets`);
        }}
      >
        Planets
      </button>
      <button
        onClick={() => {
          navigate(`/favorites`);
        }}
      >
        Favorites
      </button>
      <div>
        <img
          src="data:image/jpeg;base64,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"
          width="300px"
        />
      </div>
    </div>
  );
};

export default Home;
