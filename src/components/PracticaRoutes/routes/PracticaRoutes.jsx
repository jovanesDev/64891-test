import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../screens/Home";
import Usuarios from "../screens/Usuarios";
import Tareas from "../screens/Tareas";
import Auth from "../screens/Auth";
import WithNavbarAndFooter from "../layout/Layout";
import Dinamic from "../screens/Dinamic";

const PracticaRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Auth />} />

          <Route path="/" element={<WithNavbarAndFooter />}>
            <Route index element={<Home />} />
            <Route path="tareas" element={<Tareas />} />
            <Route path="usuarios" element={<Usuarios />} />
            <Route path="/tareas/:id" element={<Dinamic />} />
            <Route path="/usuarios/:id" element={<Dinamic />} />
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
    // Aca va la config de rutas
  );
};

export default PracticaRoutes;
