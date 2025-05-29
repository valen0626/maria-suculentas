import { useContext, useState } from 'react'
import "./Menu.css"
import { useNavigate, Link } from 'react-router-dom'
import { UIContext } from '../../context/UIContext'
import { CarroContexto } from "../../context/CarroContexto";
import { apiCategoria } from './apiCategoria'
import CalcularPantalla from '../../utils/CalcularPantalla'
import VistaCarro from '../../features/carro/VistaCarro';
import { AuthContext } from '../../context/authContext';

const Menu = () => {
  const navigate = useNavigate()
  const { usuario } = useContext(AuthContext)
  const { cambiarEstadoSidebar } = useContext(UIContext)
  const { carroItems } = useContext(CarroContexto)
  const exiteUsuario = Object.keys(usuario).length

  const [formBusqueda, setFormBusqueda] = useState("")
  const { ancho } = CalcularPantalla()
  const [dataCategoria] = useState(apiCategoria)

  const cambiarDatosBusqueda = (e) => {
    setFormBusqueda(e.target.value)
  }

  const [botonMenu, setBotonMenu] = useState(false)
  const cambiarBotonMenu = () => {
    setBotonMenu(!botonMenu)
    cambiarEstadoSidebar(false)
  }

  const [botonPerfil, setBotonPerfil] = useState(true)
  const cambiarEstadoBotonPerfil = () => {
    setBotonPerfil(!botonPerfil)
    cambiarEstadoSidebar(true)
  }

  const estadoBotonCerrar = () => {
    setBotonCategoria(false)
    setBotonMenu(false)
  }

  const [tipoCategoria, setTipoCategoria] = useState({
    menuCategoria: "agaves",
  })

  const activarCategoria = (e) => {
    setTipoCategoria({ ...tipoCategoria, menuCategoria: e.target.dataset.categoria })
  }

  const buscarProducto = () => {
    navigate(`/busqueda/productos=${formBusqueda}`)
    setFormBusqueda("")
  }

  const [open, setOpen] = useState(false)

  return (
    <>
      <nav >
        <div className='nav-menu-logo'>
          <figure className='navbar-boton-menu'>
            {ancho <= 800 ? (<>
              <img src="/iconos/icon_menu.svg" alt="icono de menu" onClick={cambiarBotonMenu} />
            </>) : (<></>)
            }
          </figure>

          <div className='navbar-menu-logo'>
            {ancho <= 500 ? (
              <Link to={"/"}>
                <img src="/iconos/icono-maria.jpeg" alt="icono de maria suculentas" className="icono-navbar" />
              </Link>) : (
              <Link to={"/"}>
                <img src="/iconos/logo-maria.jpeg" alt="logo de maria suculentas" className="logo-navbar" />
              </Link>)
            }
          </div>
        </div>

        <div className='navbar-search'>
          <input type="text" onChange={cambiarDatosBusqueda} size={"15"} placeholder='Buscar productos' value={formBusqueda} />
          <button disabled={!formBusqueda} onClick={buscarProducto}>
            {formBusqueda ? (
              <Link to={"/busqueda"}>
                <img src="/iconos/buscar.svg" alt="icono de lupa" />
              </Link>) : (
              <img src="/iconos/buscar.svg" alt="icono de lupa" />
            )}
          </button>
        </div>

        <div className={botonMenu && ancho <= 1000 ? "nav-link-menu nav-link-menu-activo"
          : "nav-link-menu"}>

          <div className='navbar-links'>
            {ancho <= 800 && (
              <>
                {exiteUsuario ? (
                  usuario.Rol === "administrador" ? (
                    <Link to={"/administrador/reportes"}>Perfil</Link>
                  ) : (
                    <p onClick={cambiarEstadoBotonPerfil}>Perfil</p>
                  )
                ) : (
                  <></>
                )}
                <hr />
                {!exiteUsuario && (
                  <>
                    <Link to={"/registrar"}>Registrar</Link>
                    <Link to={"/ingresar"}>Ingresar</Link>
                    <hr />
                  </>
                )}
              </>
            )}
          </div>
        </div>

        <div className="navbar-iconos">
          {exiteUsuario ? (
            usuario.Rol === "administrador" ? (
              <Link to={"/administrador/reportes"}>
                <img src="/iconos/perfil.svg" alt="Icono de perfil de usuario" className='navbar-icon-perfil' />
              </Link>
            ) : (
              <Link to={"/cliente/perfil"} >
                <img src="/iconos/perfil.svg" alt="Icono de perfil de usuario" className='navbar-icon-perfil' />
              </Link>
            )
          ) : (
            <Link to={"/ingresar"} className='login'>
              <span>Iniciar sesión</span>
              <img src="/iconos/login.svg" alt="Icono de perfil de usuario" />
            </Link>
          )}
          <div className='navbar-icon-shopping' onClick={() => setOpen(prev => !prev)} >
            <figure>
              <img src="/iconos/icon_shopping_cart.svg" alt="" />
              <figcaption>{carroItems?.length}</figcaption>
            </figure>
          </div>
          <VistaCarro open={open} setOpen={setOpen} />
        </div>
      </nav>
      <div className='nav-contenedor-categorias'>   
        {dataCategoria.map(item => <Link key={item.nombre} onMouseOver={activarCategoria} to={item.link}>{item.nombre}</Link>)}
      </div>
    </>
  )
}

export default Menu