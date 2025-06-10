import { useContext, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { UIContext } from '../../context/UIContext'
import { CarroContexto } from "../../context/CarroContexto";
import { apiCategoria } from './apiCategoria'
import CalcularPantalla from '../../utils/CalcularPantalla'
import VistaCarro from '../../features/carro/VistaCarro';
import { AuthContext } from '../../context/authContext';

const Menu = () => {
  const navigate = useNavigate()
  const { usuario, cerrarSesion } = useContext(AuthContext)
  const { cambiarEstadoSidebar } = useContext(UIContext)
  const { carroItems } = useContext(CarroContexto)
  const existeUsuario = Object.keys(usuario).length

  const [formBusqueda, setFormBusqueda] = useState("")
  const [botonMenu, setBotonMenu] = useState(false)
  const [botonPerfil, setBotonPerfil] = useState(true)
  const [open, setOpen] = useState(false)
  const [tipoCategoria, setTipoCategoria] = useState({ menuCategoria: "agaves", })
  const [dataCategoria] = useState(apiCategoria)
  const [abierto, setAbierto] = useState(false)

  const { ancho } = CalcularPantalla()

  const cambiarDatosBusqueda = (e) => {
    setFormBusqueda(e.target.value)
  }

  const cambiarBotonMenu = () => {
    setBotonMenu(!botonMenu)
    cambiarEstadoSidebar(false)
  }

  const cambiarEstadoBotonPerfil = () => {
    setBotonPerfil(!botonPerfil)
    cambiarEstadoSidebar(true)
  }

  const estadoBotonCerrar = () => {
    setBotonCategoria(false)
    setBotonMenu(false)
  }

  const activarCategoria = (e) => {
    setTipoCategoria({ ...tipoCategoria, menuCategoria: e.target.dataset.categoria })
  }

  const buscarProducto = () => {
    navigate(`/busqueda/productos=${formBusqueda}`)
    setFormBusqueda("")
  }

  return (
    <>
      <nav className="flex items-center justify-between p-2 px-5 bg-white shadow-md sticky top-0 z-50">
        {/* Logo y Botón menú */}
        <div className="flex items-center gap-4">
          {ancho <= 800 && (
            <button onClick={cambiarBotonMenu} className="md:hidden">
              <img src="/iconos/icon_menu.svg" alt="icono de menu" className="w-6 h-6" />
            </button>
          )}

          <div className="flex-shrink-0">
            <Link to={"/"}>
              <img
                src={ancho <= 500 ? "/iconos/icono-maria.jpeg" : "/iconos/logo-maria.jpeg"}
                alt="logo maria suculentas"
                className={ancho <= 500 ? "w-10 h-10 object-cover rounded-full" : "w-32 h-auto object-contain"}
              />
            </Link>
          </div>
        </div>

        {/* Barra de búsqueda */}
        <div className="hidden md:flex items-center gap-2 flex-1 max-w-md mx-4">
          <input
            type="text"
            onChange={cambiarDatosBusqueda}
            placeholder="Buscar productos"
            value={formBusqueda}
            className="border border-gray-300 bg-gray-100 rounded px-3 py-1 w-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-300"
          />
          <button
            disabled={!formBusqueda}
            onClick={buscarProducto}
            className="disabled:opacity-50"
          >
            {formBusqueda ? (
              <Link to={"/busqueda"}>
                <img src="/iconos/buscar.svg" alt="lupa" className="w-5 h-5" />
              </Link>
            ) : (
              <img src="/iconos/buscar.svg" alt="lupa" className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Menú de enlaces (visible si está abierto en móviles) */}
        <div
          className={`${botonMenu && ancho <= 1000 ? "block" : "hidden"
            } absolute top-16 left-0 w-full bg-white shadow-md md:hidden p-4 z-40`}
        >
          <div className="flex flex-col gap-2">
            {existeUsuario ? (
              usuario.Rol === "administrador" ? (
                <Link to={"/administrador/reportes"}>Perfil</Link>
              ) : (
                <p onClick={cambiarEstadoBotonPerfil}>Perfil</p>
              )
            ) : null}
            <hr />
            {!existeUsuario && (
              <>
                <Link to={"/registrar"}>Registrar</Link>
                <Link to={"/ingresar"}>Ingresar</Link>
                <hr />
              </>
            )}
          </div>
        </div>

        {/* Iconos de usuario y carrito */}
        <div className="flex items-center gap-4">

          {existeUsuario ? (
            <>
              <div className="relative">
                <button onClick={() => setAbierto(!abierto)} className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                  <span className='text-sm font-semibold'>Mi cuenta</span>
                  <i class="bi bi-chevron-down"></i>
                </button>

                {abierto && (
                  <div className="absolute right-0 flex-column items-center mt-3 bg-white shadow-md rounded-lg p-2 w-52">
                    <Link
                      className="w-full px-2 py-1 mb-1 flex gap-2 text-gray-700 rounded hover:bg-green-100"
                      to={usuario.Rol === "administrador" ? "/administrador/reportes" : "/cliente/perfil"}
                    >
                      <i class="bi bi-person-circle text-xl"></i>
                      Mi cuenta
                    </Link>
                    <Link className="w-full px-2 py-1 mb-1 flex gap-2 text-gray-700 rounded hover:bg-green-100">
                    <i class="bi bi-journal-text text-xl"></i>
                      Compras
                    </Link>
                    <Link className="w-full px-2 py-1 mb-1 flex gap-2 text-gray-700 rounded hover:bg-green-100"
                     to={"/favoritos"}>
                      <i class="bi bi-bookmark-heart text-xl"></i>
                      Mi lista
                    </Link>
                    <button onClick={cerrarSesion} className="w-full border-[1px] font-semibold text-green-700 border-green-700 rounded py-2 my-2 hover:text-green-800">
                      Salir
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <Link to={"/ingresar"} className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
              <span className="text-sm font-semibold">Iniciar sesión</span>
            </Link>
          )}

          <div onClick={() => setOpen((prev) => !prev)} className="relative cursor-pointer">
            <img src="/iconos/icon_shopping_cart.svg" alt="carrito" className="w-6 h-6" />
            {carroItems?.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {carroItems.length}
              </span>
            )}
          </div>

        </div>

        <VistaCarro open={open} setOpen={setOpen} />
      </nav>

      {/* Categorías */}
      <div className="flex flex-wrap justify-center gap-4 py-2 bg-gray-100 font-semibold">
        {dataCategoria.map((item) => (
          <Link
            key={item.nombre}
            onMouseOver={activarCategoria}
            to={item.link}
            className="hover:text-green-600 transition"
          >
            {item.nombre}
          </Link>
        ))}
      </div>
    </>
  )
}

export default Menu