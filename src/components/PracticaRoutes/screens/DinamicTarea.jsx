import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { arrayTareas } from "../constante";

const DinamicTarea = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const tarea = arrayTareas.find((tarea) => tarea.id === id);

  if(!tarea) {

    return (
        <div>
            <h1>Opps ! No se encontro el item</h1>
        </div>
    )
  }

  return (
    <>
      <button onClick={() => navigate(-1)}>Volver</button>
      {tarea && (
        <>
          <div>
            <h4>{tarea.nombre}</h4>
            <h4>{tarea.descripcion}</h4>
            <h4>{tarea.completado ? "Completado : " + "✅" : "No Completado : " +"❌"}</h4>
          </div>{" "}
        </>
      )}
    </>
  );
};

export default DinamicTarea;
