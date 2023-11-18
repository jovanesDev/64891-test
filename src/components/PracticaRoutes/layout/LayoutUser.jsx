import Usuario from "../components/Usuario";
import useUser from "../hooks/useUser";

const LayoutUser = () => {
  const { loading, error, user, navigate } = useUser(false);
  if (loading) {
    return <h1> Cargando...</h1>;
  }

  if (!loading && error) {
    return <h1>Algo Salio Mal !! </h1>;
  }

  return (
    <div style={{ margin: 100 }}>
      <Usuario {...user} navigate={navigate} />
    </div>
  );
};

export default LayoutUser;
