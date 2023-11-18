import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{display:'flex',flex:1,justifyContent:"space-around",alignItems:"center",padding:4,border:"1px solid black"}}>
      <h4>Mi App</h4>
      <ul style={{display:"flex",flex:1,justifyContent:"space-around"}}>
        <li>
          <NavLink to={'/'}>Inicio</NavLink>
        </li>
        <li>
          <NavLink to={'/tareas'}>Tareas</NavLink>
        </li>
        <li>
          <NavLink to={'/usuarios'}>Usuarios</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
