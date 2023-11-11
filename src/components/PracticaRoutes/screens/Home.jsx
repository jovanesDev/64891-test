import React from "react";
import { useNavigate } from "react-router-dom";
import { arrayTareas } from "../constante";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      {arrayTareas.map(({ id, nombre }, index) => (
        <div
          style={{
            padding: "10px",
            border: "1px solid black",
            width: "200px",
            margin: "20px auto",
          }}
          key={index}
        >
          <h4>{nombre}</h4>
          <button onClick={() => navigate("/" + id)}>Ver Mas !</button>
        </div>
      ))}
    </>
  );
};

export default Home;
