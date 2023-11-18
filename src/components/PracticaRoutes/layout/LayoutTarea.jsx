import useTarea from "../hooks/useTarea";
import Tarea from "../components/Tarea";

const LayoutTarea = () => {
  const { loading, error, tarea, navigate } = useTarea(false);
  if (loading) {
    return <h1> Cargando...</h1>;
  }

  if (!loading && error) {
    return <h1>Algo Salio Mal !! </h1>;
  }

  return (
    <div style={{ margin: 100 }}>
      <Tarea {...tarea} navigate={navigate} />
    </div>
  );
};

export default LayoutTarea;
