import { useContext } from "react";
import { Context } from "./App";
import { useNavigate } from "react-router-dom";

const Person = () => {
  const { people, id, favorites, setFavorites } = useContext(Context);
  const navigate = useNavigate();
  const person = people.find((char) => {
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
        width="100px"
        height="100px"
        onClick={() => {
          setFavorites([...favorites, person]);
          console.log(favorites);
        }}
      >
        Add Favorite
      </button>
      <li>
        <div className="Person">
          <img
            src="https://image.winudf.com/v2/image/Y29tLmRhd2F5LnN0ZXBoZW4ubXlhcHBsaWNhdGlvbl9zY3JlZW5fMF8xNTIyNDE4Njk5XzAwOA/screen-0.jpg?h=500&fakeurl=1&type=.jpg"
            width="100px"
          />
          <h1>{person.name}</h1>
          <h2>Height: {person.height}</h2>
          <h3>Birth Year: {person.birth_year}</h3>
          <h4>Eye Color: {person.eye_color}</h4>
        </div>
      </li>
    </div>
  );
};

export default Person;
