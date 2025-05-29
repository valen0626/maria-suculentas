import { useState } from 'react'
import {recuperarContraseña} from "../../../controllers/Sesion"

const RecuperarContraseña = () => {
  const [formCorreo, setFormCorreo]= useState("")
  const cambiarDatos = (e)=>{
    setFormCorreo(e.target.value)
  }

  const enviarDatos = (e)=>{
    e.preventDefault()
    recuperarContraseña(formCorreo).then((res)=>{
      if (res === "correcto") {
        console.log("Verifique su correo electronico");
      }else{
        console.log("Error enviando correo");
      }
    })
    setFormCorreo("")
  }
  return (
    <>
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Recuperar contraseña
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6" onSubmit={enviarDatos}>
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Correo de registro
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  onChange={cambiarDatos}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Enviar
              </button>
            </div>
          </form>

        </div>
      </div>
    </>
  )
}

export default RecuperarContraseña