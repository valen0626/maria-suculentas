import { Link } from "react-router-dom";
import "./Sidebars.css"
import { useContext } from 'react';
import { AuthContext } from "../../context/authContext";
import { UIContext } from "../../context/UIContext";

const SidebarCliente = () => {
  const { cerrarSesion, usuario} = useContext(AuthContext)
  const { cambiarEstadoSidebar, sidebar } = useContext(UIContext)
  return (
    <>
      <section className={sidebar === false ? 'sidebar-cliente' : 'sidebar-cliente activo'}
        style={sidebar === true ? { zIndex: "9" } : { zIndex: "8" }}>
        <div className="controles-menu">
          <button onClick={() => cambiarEstadoSidebar(false)}>
            <img src="/iconos/icon_close.svg" alt="" />
          </button>
        </div>
        <figure className='sidebar-foto'>
          <img src={usuario.FotoUrl === "undefined" ||
            !usuario.FotoUrl ? "/iconos/foto_perfil.jpg"
            : usuario.FotoUrl} alt="foto de perfil" />
          <figcaption>{usuario.Nombres !== "undefined"
            ? usuario.Nombres + " " + usuario.Apellidos
            : "Nombre completo"}</figcaption>
        </figure>
        <div className='sidebar-container-links'>
          <Link to={"/cliente/perfil"} className='sidebar-link'>Mi perfil</Link>
          <Link className='sidebar-link'>Mis direcciones</Link>
        </div>

        <div className='sidebar-container-links'>
          <Link className='sidebar-link'>Mis compras</Link>
          <Link to={"/cliente/favoritos"} className='sidebar-link'>Mis favoritos</Link>
          <Link className='sidebar-link'>Productos Guardados</Link>
        </div>

        <div className='logout'>
          <span onClick={cerrarSesion}>Cerrar sesión</span>
        </div>
      </section>
    </>
  )
}

export default SidebarCliente