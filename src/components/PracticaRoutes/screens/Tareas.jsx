import { useContext } from "react";
import Tareas from "../components/Tareas";
// import useTarea from "../hooks/useTarea";
import { GlobalContext } from "../provider/GlobalProvider";

const TareaScreen = () => {
  const { tareas } = useContext(GlobalContext);

  if (tareas.loading) {
    return <h1> Cargando...</h1>;
  }

  if (!tareas.loading && tareas.error) {
    return <h1>Algo Salio Mal !! </h1>;
  }

  return (
    <div>
      {tareas.tareas.map((tarea, index) => (
        <div
          key={index}
          style={{
            padding: "10px",
            border: "1px solid black",
            width: "600px",
            margin: "20px auto",
          }}
        >
          <Tareas {...tarea} />
        </div>
      ))}
    </div>
  );
};

export default TareaScreen;
