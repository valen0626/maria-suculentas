import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { verificarCuentaCorreo, actualizarCuentaContraseña } from '../../../controllers/Sesion'

const Verificar = () => {
  const [confirmarCorreo, setConfirmarCorreo]=useState("esperando")
  const [correoCliente, setCorreoCliente]=useState("")
  const [formContraseña, setFormContraseña]= useState("")
  const [confirmarContraseña, setConfirmarContraseña]=useState("esperando")

  const cambiarDatos = (e)=>{
    setFormContraseña(e.target.value)
  }

  const useQuery =()=>{
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery()
  let codigoVerificacion= query.get("oobCode")
  let modoVerificacion = query.get("mode")

  useEffect(()=>{
    if (codigoVerificacion !== null && modoVerificacion === "verifyEmail") {
      verificarCuentaCorreo(codigoVerificacion).then((res)=>{
        if (res === "error") {
          setConfirmarCorreo(res)
        }else if (res === "expirado") {
          setConfirmarCorreo(res)
        }else{
          setConfirmarCorreo("correcto")
          setCorreoCliente(res)
        }
      })
    }
  },[codigoVerificacion, modoVerificacion])

  const actualizarContraseña = (e)=>{
    e.preventDefault()
    actualizarCuentaContraseña(codigoVerificacion, formContraseña).then((res)=>{
      if (res === "cambiado") {
        setConfirmarContraseña("cambiado")
      }else if (res === "no") {
        setConfirmarContraseña("no")
      }else{
        setConfirmarContraseña("error")
      }
    })
  }
  return (
    <div>
      {modoVerificacion === "verifyEmail" && (
        <div>
          <p>Esperando confirmacion del correo:</p>
          {confirmarCorreo === "esperando" && <h3>Procesando...</h3>}
          {confirmarCorreo === "error" && <h3>Error confirmando correo</h3>}
          {confirmarCorreo === "expirado" && (<h3>Codigo de verificación expirado</h3>)}
          {confirmarCorreo === "correcto" && (
            <><h3>Bienvenido, su correo ha sido verificado.</h3>
              <Link to={"/ingresar"}>Iniciar sesión</Link>
            </>
          )}
        </div>
      )} 
      {modoVerificacion === "resetPassword" && (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Cambio de contraseña
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6" onSubmit={actualizarContraseña}>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="contrasena" className="block text-sm/6 font-medium text-gray-900">
                  Nueva contraseña
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name='contrasena'
                  type="password"
                  required
                  value={formContraseña}
                  onChange={cambiarDatos}
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Actualizar
              </button>
            </div>
            <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"><Link to={"/ingresar"}>Volver</Link></button>

          </form>
          <div>
            {confirmarContraseña === "esperando" && <h3>Procesando...</h3>}
            {confirmarContraseña === "error" && <h3>Error cambiando contraseña</h3>}
            {confirmarContraseña === "no" && (
              <h3>No se pudo cambiar la contraseña</h3>
            )}
            {confirmarContraseña === "cambiado" && (
              <>
                <h3>Contraseña cambiada con éxito</h3>
                <Link to={"/ingresar"}>Iniciar sesión</Link>
              </>
            )}
          </div>
        </div>
      </div>
      )}
    </div>
  )
}

export default Verificar