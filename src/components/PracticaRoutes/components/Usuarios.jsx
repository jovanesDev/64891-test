/* eslint-disable react/prop-types */
const Usuarios = ({ id, name, username, email, navigate }) => {
  return (
    <div>
      <h3>Id : {id}</h3>
      <h1 style={{ margin: "30px auto" }}> Nombre : {name}</h1>
      <h1 style={{ margin: "30px auto" }}> Nick Name : {username}</h1>
      <h1 style={{ margin: "30px auto" }}> Email : {email}</h1>
      <button
        onClick={() =>
          navigate("/usuarios/" + id, {
            state: {
              usuario: true,
            },
          })
        }
      >
        Ver Mas
      </button>
    </div>
  );
};

export default Usuarios;
