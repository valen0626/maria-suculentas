import { EstadoContexto } from "../../context/UIContext"
import { Navigate } from "react-router-dom";
import { useContext } from "react";

const RutaCliente = (props) => {
    const { layout: Layout, component: Component } = props
    const { usuario } = useContext(EstadoContexto)
    const exiteUsuario = Object.keys(usuario).length
    return exiteUsuario && usuario.Rol === "cliente" ? (
        <Layout><Component/></Layout>
    ) : (
        <Navigate to={"/ingresar"}/>
    )
}

export default RutaCliente