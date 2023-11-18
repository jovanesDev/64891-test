import useDinamic from "../hooks/useDinamic";
import LayoutTarea from "../layout/LayoutTarea";
import LayoutUser from "../layout/LayoutUser";

const Dinamic = () => {
  // tareas , usuarios
  const {
    location: { state },
  } = useDinamic();

  if (state.tarea) {
    return <LayoutTarea />;
  }
  if (state.usuario) {
    return <LayoutUser />;
  }
};

export default Dinamic;
