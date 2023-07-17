import { Link } from "react-router-dom"
import Header from "../helpers/Header"

const Registrate = () => {
  return (
    <section className="registrate-login">
        <form action="">
            <h1>Registrarse</h1>
            <input type="text" placeholder="Nombres y Apellidos" />
            <input type="text" placeholder="Correo" />
            <input type="password" placeholder="Contraseña" />
            <Link to={'/'}>Volver</Link>
            <Link>Registrarse</Link>
        </form>
    </section>
  )
}

export default Registrate