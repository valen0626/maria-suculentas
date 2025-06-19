import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";

const RutaAdmin = () => {
  const { usuario } = useContext(AuthContext);
  const existeUsuario = usuario && Object.keys(usuario).length > 0;

  if (!existeUsuario) return <Navigate to="/ingresar" />; 
  if (usuario.Rol !== "admin") return <Navigate to="/" />;

  return <Outlet />; 
};

export default RutaAdmin;
