import { useContext } from "react";
import { GlobalContext } from "../provider/GlobalProvider";
import Tarea from "./Tarea";

/* eslint-disable react/prop-types */
const Usuario = ({
  id,
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
  navigate,
}) => {
  // const { tareas } = useContext(GlobalContext);
  // console.log(tareas);

  // const findTarea = tareas.tareas.find((tarea) => tarea.userId == id);

  return (
    <div>
      <div>
        <button onClick={() => navigate(-1)}>Volver</button>
        <h4> Id : {id}</h4>
        <h4> Nombre : {name}</h4>
        <h4> Nick Name : {username}</h4>
        <h4> Email : {email}</h4>
        <dl>
          <dt>Direccion</dt>
          <dd>{address.street}</dd>
          <dd>{address.suite}</dd>
          <dd>{address.city}</dd>
          <dd>{address.zipcode}</dd>
        </dl>
        <h4>Cel : {phone}</h4>
        <h4>Web : {website}</h4>
        <dl>
          <dt>Company</dt>
          <dd>{company.name}</dd>
          <dd>{company.catchPhrase}</dd>
          <dd>{company.bs}</dd>
        </dl>
      </div>
      <h4>Tarea</h4>
      {findTarea && <Tarea {...findTarea} navigate={navigate} />}
    </div>
  );
};

export default Usuario;
