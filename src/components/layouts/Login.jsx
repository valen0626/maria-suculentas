import { Link } from "react-router-dom"
import Header from "../helpers/Header"

const Login = () => {
  return (
    <section className="registrate-login">
        <form action="">
            <h1>Iniciar sesion</h1>
            <input type="text" placeholder="Nombre de Usuario" />
            <input type="password" placeholder="Contraseña" />
            <Link to={'/'}>Volver</Link>
            <Link>Ingresar</Link>
            <h5>¿No tienes cuenta aún?</h5>
            <Link to={'/registrate'}>Crear cuenta</Link>
        </form>
    </section>
  )
}

export default Login