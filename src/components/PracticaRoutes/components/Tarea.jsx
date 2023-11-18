import { useContext } from "react";
import { GlobalContext } from "../provider/GlobalProvider";
import Usuario from "./Usuario";

/* eslint-disable react/prop-types */
const Tarea = ({ id, title, userId, completed, navigate }) => {
  const { usuarios } = useContext(GlobalContext);

  const author = usuarios.users.find((user) => user.id == userId);

  return (
    <div>
      <button onClick={() => navigate(-1)}>Volver</button>
      <h4> Id : {id}</h4>
      <h4> Titulo : {title}</h4>
      <h4> Usuario : {userId}</h4>
      <h4>{completed ? "Completado : " + "✅" : "No Completado : " + "❌"}</h4>
      <h2>Author</h2>
      {author && <Usuario {...author} navigate={navigate} />}
    </div>
  );
};

export default Tarea;
