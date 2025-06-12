import { useContext, useEffect, useState } from 'react'
import { editarPerfilSoloDatos } from '../../services/UsuarioService';
import { AuthContext } from '../../context/authContext';
import { CarroContexto } from '../../context/CarroContexto';
import { useNotificacion } from '../../context/NotificacionContext';

const initFormCliente = {
  nombres: localStorage.getItem("Nombres"),
  apellidos: localStorage.getItem("Apellidos"),
  celular: localStorage.getItem("Celular"),
  correo: localStorage.getItem("Correo")
}
const Perfil = () => {
  const { usuario, cerrarSesion } = useContext(AuthContext)
  const { favoritos } = useContext(CarroContexto)

  const [formCliente, setFormCliente] = useState(initFormCliente)

  const { mostrarNotificacion } = useNotificacion();

  useEffect(() => {
    setFormCliente({
      nombres: usuario.Nombres,
      apellidos: usuario.Apellidos,
      correo: usuario.Correo,
      celular: usuario.Celular === "undefined" ? "" : usuario.Celular,
    })
  }, [usuario])

  const cambiarDatos = (e) => {
    const { name, value } = e.target
    setFormCliente({ ...formCliente, [name]: value })
  }

  const editarDatosPerfil = (e) => {
    e.preventDefault()
    editarPerfilSoloDatos(formCliente, mostrarNotificacion)
  }
  return (
    <>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">👋 Hola, {usuario.Nombres}</h2>
        <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Información personal</h3>
          <form className="space-y-4" onSubmit={editarDatosPerfil}>
            <div>
              <label className="text-sm font-medium">Email</label>
              <p className="text-gray-600">{formCliente.correo}</p>
            </div>
            <div>
              <label className="text-sm font-medium">Nombre</label>
              <input
                type='text'
                name='nombres'
                value={formCliente.nombres}
                onChange={cambiarDatos}
                className="w-full mt-1 p-2 border rounded-md"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Apellidos</label>
              <input
                type='text'
                name='apellidos'
                value={formCliente.apellidos}
                onChange={cambiarDatos}
                className="w-full mt-1 p-2 border rounded-md"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Celular</label>
              <input
                name='celular'
                value={formCliente.celular}
                onChange={cambiarDatos}
                className="w-full mt-1 p-2 border rounded-md"
              />
            </div>
            <button
              type='submit'
              className="mt-4 px-4 py-2 bg-gray-400 font-semibold text-white rounded hover:bg-green-700"
            >
              Guardar cambios
            </button>
          </form>
        </div>
      </div>

      {/* <div className="bg-white shadow rounded-xl p-6">
  <h3 className="text-lg font-semibold mb-4">Historial de pedidos</h3>
  {historial.length > 0 ? (
    <ul className="space-y-3">
      {historial.map((pedido) => (
        <li key={pedido.id} className="text-sm text-gray-700">
          Pedido #{pedido.id} – {pedido.fecha} – {pedido.estado}
        </li>
      ))}
    </ul>
  ) : (
    <p className="text-gray-500">No has hecho pedidos todavía.</p>
  )}
</div> */}

    </>
  )
}

export default Perfil