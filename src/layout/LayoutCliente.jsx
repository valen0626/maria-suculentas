import Menu from '../../components/Menu/Menu'
import { Link } from 'react-router-dom'
import "./Layouts.css";
import SidebarCliente from '../../components/sidebars/SidebarCliente';
import CalcularPantalla from "../../util/CalcularPantalla";

const LayoutCliente = ({ children }) => {
  const { ancho } = CalcularPantalla()
  return (
    <>
      {<Menu />}
      <div className='navegacion-clientes-links'>
        <Link className='link'>Por hoy</Link>
        <Link className='link'>Promocion</Link>
        <Link className='link'>Vende</Link>
        <Link className='link'>Envíos</Link>
        <Link className='link'>Gana</Link>
        <Link className='link'>Auspicios</Link>
      </div>
      <div className='navegacion-perfil'>
        <Link className='link' to={"/"}>Inicio</Link>
        <span>/</span>
        <Link className='link'>Mi perfil</Link>
        <span>/</span>
        <Link className='link'>Datos personales</Link>
      </div>
      <div className='content-perfil'>
        {/* {ancho > 800 ? (
      <SidebarCliente/>
      ):(
        <></>
      )} */}
        <SidebarCliente />
        <section className='section-perfil-cliente'>
          {children}
        </section>
      </div>
    </>
  )
}

export default LayoutCliente