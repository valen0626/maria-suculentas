import { useContext, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { AuthContext } from "../../context/authContext";
import { ingresarClienteAuth, traerUnCliente } from '../../services/authService';

const initFormIngresar = {
  correo: "",
  contraseña: "",
}
const Ingresar = () => {
  const navigate = useNavigate()
  const { iniciarSesion } = useContext(AuthContext)
  const [formIngresar, setFormIngresar] = useState(initFormIngresar)
  const [usuarioVerificado, setUsuarioVerificado] = useState()
  const [message, setMessage] = useState(null);
  const [load, setLoad] = useState(false);

  const cambiarDatos = ({ target: { name, value } }) => {
    setFormIngresar({ ...formIngresar, [name]: value })
  }

  useEffect(() => {
    if (usuarioVerificado) {
      (async () => {
        const usuarioDb = await traerUnCliente(usuarioVerificado)
        iniciarSesion(usuarioDb)
        if (usuarioDb.Rol === "admin") {
          navigate("/admin")
        }else{
          navigate("/")
        }
      })()
    }
  }, [usuarioVerificado, iniciarSesion, navigate])

  const enviarDatos = (e) => {
    e.preventDefault()
    setMessage(null);
    ingresarClienteAuth(formIngresar).then((res) => {
      if (res.idUsuario) {
        setUsuarioVerificado(res)
        setLoad(true)
      } else if (res === "noVerificado") {
        setMessage({ type: 'error', text: 'Verifica tu correo' })
      } else if (res === "contrasenaIncorrecta") {
        setMessage({ type: 'error', text: 'Credenciales inválidas.' })
      } else {
        setMessage({ type: 'error', text: 'Error al iniciar sesión' });
      }

    })
  }

  return (
    <>
      {load ? (
        <div className="h-screen flex justify-center items-center bg-white">
          <div className="w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <section className="max-w-md mx-auto">
          <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">

            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-10 mb-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Ingresa a tu cuenta</h2>
            </div>
            {message && (
              <div
                className={`p-2 rounded text-sm ${message.type === 'error' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
                  }`}
              >
                {message.text}
              </div>
            )}
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" action="#" method="POST" onSubmit={enviarDatos}>
                <div>
                  <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Correo</label>
                  <div className="mt-2">
                    <input type="email" name='correo' value={formIngresar.correo} onChange={cambiarDatos} autoComplete="email" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-green-600 sm:text-sm/6" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">Contraseña</label>
                    <div className="text-sm">
                      <a href="#" className="font-semibold text-green-600 hover:text-green-500"><Link to={"/recuperar-contrasena"}>Olvidó su contraseña?</Link></a>
                    </div>
                  </div>
                  <div className="mt-2">
                    <input type="password" name='contraseña' value={formIngresar.contraseña} onChange={cambiarDatos} autoComplete="current-password" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-green-600 sm:text-sm/6" />
                  </div>
                </div>

                <div>
                  <button type="submit" className="flex w-full justify-center rounded-md bg-green-500 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-green-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Ingresar</button>
                </div>
              </form>

              <p className="mt-10 text-center text-sm/6 text-gray-500">
                ¿Aún no tienes una cuenta?
                <a href="#" className="font-semibold text-green-600 hover:text-green-500"><Link to={"/registrar"}> Registrar</Link></a>
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default Ingresar