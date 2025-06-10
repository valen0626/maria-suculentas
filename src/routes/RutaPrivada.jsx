import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/authContext";

function RutaPrivada() {
    const { usuario, cargando } = useContext(AuthContext);
    const existeUsuario = Object.keys(usuario).length
    if (cargando) {
        return (
            <div className="h-screen flex justify-center items-center bg-white">
                <div className="w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
        )
    }

    return existeUsuario ? <Outlet /> : <Navigate to="/ingresar" replace />;
}

export default RutaPrivada;
