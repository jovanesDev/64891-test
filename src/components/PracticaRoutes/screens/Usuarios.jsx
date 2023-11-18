import { useContext } from "react";
import Usuarios from "../components/Usuarios";
import { GlobalContext } from "../provider/GlobalProvider";

const UsuarioScreen = () => {
  const { usuarios } = useContext(GlobalContext);
  if (usuarios.loading) {
    return <h1> Cargando...</h1>;
  }

  if (!usuarios.loading && usuarios.error) {
    return <h1>Algo Salio Mal !! </h1>;
  }

  return (
    <div>
      {usuarios.users.map((user, index) => (
        <div
          key={index}
          style={{
            padding: "10px",
            border: "1px solid black",
            width: "600px",
            margin: "20px auto",
          }}
        >
          <Usuarios {...user} navigate={usuarios.navigate}/>
        </div>
      ))}
    </div>
  );
};

export default UsuarioScreen;
