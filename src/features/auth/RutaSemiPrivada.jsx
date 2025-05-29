import { useContext } from 'react'
import { EstadoContexto } from "../../context/UIContext"
import { Navigate } from 'react-router-dom'

const RutaSemiPrivada = (props) => {
  const { layout: Layout, component: Component } = props
  const { usuario } = useContext(EstadoContexto)
  const exiteUsuario = Object.keys(usuario).length

  if (!exiteUsuario) {
    return <Layout><Component /></Layout>
  } else {
    return <Navigate to={"/"} />
  }
}

export default RutaSemiPrivada