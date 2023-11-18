/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";

const Tareas = ({ id, title }) => {
  const navigate = useNavigate();
  return (
    <div>
      <h3>Id : {id}</h3>
      <h1 style={{ margin: "30px auto" }}> Titulo : {title}</h1>
      <button
        onClick={() =>
          navigate("/tareas/" + id, {
            state: {
              tarea: true,
            },
          })
        }
      >
        Ver Mas
      </button>
    </div>
  );
};

export default Tareas;
