import { useContext, useEffect, useRef, useState } from 'react'
import "./Perfil.css"
import { editarPerfilConFoto, editarPerfilSinFoto, editarPerfilSoloDatos } from '../../services/UsuarioService';
import { AuthContext } from '../../context/authContext';

const initFormCliente = {
  idCliente: "",
  nombres: localStorage.getItem("Nombres"),
  apellidos: localStorage.getItem("Apellidos"),
  celular: localStorage.getItem("Celular"),
  fechaNacimiento: "",
}
const Perfil = () => {
  const { usuario } = useContext(AuthContext)
  const [foto, setFoto] = useState(undefined)
  const [fotoVista, setFotoVista] = useState(undefined)
  const [formCliente, setFormCliente] = useState(initFormCliente)
  const [fotoFirebase, setFotoFirebase] = useState("")

  const imagenRef = useRef()
  useEffect(() => {
    setFormCliente({
      idCliente: usuario.IdCliente,
      nombres: usuario.Nombres,
      apellidos: usuario.Apellidos,
      correo: usuario.Correo,
      celular: usuario.Celular === "undefined" ? "" : usuario.Celular,
      fechaNacimiento: usuario.FechaNacimiento === "undefined" ? "2021-01-01" : usuario.FechaNacimiento,
    })
    if (usuario.FotoUrl !== "undefined") {
      setFotoVista(usuario.FotoUrl)
      setFotoFirebase(usuario.FotoUrl)
    }
  }, [usuario])

  useEffect(() => {
    if (!foto) {
      return
    }
    const fotoCargada = new FileReader()
    fotoCargada.onload = () => {
      setFotoVista(fotoCargada.result)
    }
    fotoCargada.readAsDataURL(foto)
  }, [foto])

  function cambiarImagen(e) {
    let fotoSeleccionado
    if (e.target.files && e.target.files.length === 1) {
      fotoSeleccionado = e.target.files[0]
      setFoto(fotoSeleccionado)
    }
    imagenRef.current.value = ""
  }

  function cambiarImagenSubir() {
    imagenRef.current.click()
  }

  function eliminarImagen() {
    setFoto(undefined)
    if (fotoFirebase) {
      setFotoVista(fotoFirebase)
    } else {
      setFotoVista(undefined)
    }
    imagenRef.current.value = ""
  }

  const cambiarDatos = ({ target: { name, value } }) => {
    setFormCliente({ ...formCliente, [name]: value })
  }

  const guardarFoto = (e) => {
    e.preventDefault()
    const userId = usuario.IdCliente
    if (foto === undefined) {
      editarPerfilSinFoto(fotoVista, userId)
      setFoto(undefined)
      setFotoVista(fotoVista)
    } else {
      editarPerfilConFoto(foto, userId)
      setFoto(undefined)
      setFotoVista(fotoVista)
    }
  }
  const editarDatosPerfil = (e) => {
    e.preventDefault()
    editarPerfilSoloDatos(formCliente)
  }
  return (
    <>
      <section className='container-perfil'>
        <form onSubmit={editarDatosPerfil}>
          <div className="space-y-12">
              <h2 className="text-base/7 font-semibold text-gray-900">Mi información</h2>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label htmlFor="nombres" className="block text-sm/6 font-semibold text-gray-900">
                    Nombres
                  </label>
                  <div className="mt-2">
                    <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                      <input
                        id="nombres"
                        name='nombres'
                        type="text"
                        placeholder="janesmith"
                        required
                        autoComplete='given-name'
                        value={formCliente.nombres}
                        onChange={cambiarDatos}
                        className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                      />
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label htmlFor="apellidos" className="block text-sm/6 font-semibold text-gray-900">
                    Apellidos
                  </label>
                  <div className="mt-2">
                    <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                      <input
                        id="apellidos"
                        name='apellidos'
                        placeholder='Escriba sus apellidos'
                        type="text"
                        required
                        autoComplete='family-name'
                        value={formCliente.apellidos}
                        onChange={cambiarDatos}
                        className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                      />
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <label htmlFor="correo" className="block text-sm/6 font-semibold text-gray-900">
                    Correo
                  </label>
                  <div className="mt-2">
                    <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                      <input
                        id="correo"
                        name='correo'
                        placeholder='Correo electronico'
                        type="email"
                        disabled
                        value={formCliente.correo}
                        onChange={cambiarDatos}
                        className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                      />
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <label htmlFor="celular" className="block text-sm/6 font-semibold text-gray-900">
                    Número de celular
                  </label>
                  <div className="mt-2">
                    <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                      <input
                        id="celular"
                        name='celular'
                        placeholder='Numero de celular'
                        type="number"
                        required
                        autoComplete='tel'
                        value={formCliente.celular}
                        onChange={cambiarDatos}
                        className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                      />
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <label htmlFor="fechaNacimiento" className="block text-sm/6 font-semibold text-gray-900">
                    Fecha de nacimiento
                  </label>
                  <div className="mt-2">
                    <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                      <input
                        id="fechaNacimiento"
                        name='fechaNacimiento'
                        type="date"
                        required
                        autoComplete='bday'
                        value={formCliente.fechaNacimiento}
                        onChange={cambiarDatos}
                        className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                      />
                    </div>
                  </div>
                </div>
              </div>
            <input type="submit" value="Guardar cambios" className='primary-button' />
          </div>
      
        </form>

        <div className='container-foto-perfil'>
          <figure>
            {fotoVista === undefined && (
              <div>
                <img src="../../../public/iconos/foto_perfil.jpg" alt="foto de perfil" />
                <button type='button' onClick={cambiarImagenSubir} className='secondary-button'>Cambiar perfil</button>
              </div>
            )}
            {fotoVista && (
              <>
                <img src={fotoVista} alt="vista previa foto" />
                <button type="button" onClick={cambiarImagenSubir} className='secondary-button'>Editar</button>
                {foto !== undefined && (
                  <>
                    <button type="button" onClick={eliminarImagen} className='secondary-button'>Cancelar</button>
                    <button type="button" onClick={guardarFoto} className='secondary-button'>Guardar</button>
                  </>
                )}
              </>
            )}
            <input type="file" ref={imagenRef}
              accept='.jpg, .png, .jpeg'
              onChange={cambiarImagen}
              style={{ display: "none" }} />
          </figure>
        </div>
      </section>
    </>
  )
}

export default Perfil