import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./screens/Home";
import Contacto from "./screens/Contacto";
import Carrito from "./screens/Carrito";
import Auth from "./screens/Auth";
import WithNavbarAndFooter from "./layout/Layout";
import DinamicTarea from "./screens/DinamicTarea";

const PracticaRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Auth />} />

          <Route path="/" element={<WithNavbarAndFooter />}>
            <Route index element={<Home />} />
            <Route path="contacto" element={<Contacto />} />
            <Route path="carrito" element={<Carrito />} />
            <Route path="/:id" element={<DinamicTarea />} />
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
    // Aca va la config de rutas
  );
};

export default PracticaRoutes;
