import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      
      <nav>
        <ul>
          <li className="nav-item"><img src="./public/img/logo.jpeg" alt="logo" className="logo"/></li>
          <li className="nav-item">
            <Link className="links" to={"/"}>
            Home
            </Link>
          </li>
          <li className="nav-item links">
              Productos
            <ul>
              <li className="listaProd"><Link to={'/agaves'}className="linkCategoria">AGAVES</Link></li>
              <li className="listaProd"><Link to={'/aloes'}className="linkCategoria">ALOE</Link></li>
              <li className="listaProd"><Link to={'/echeveria'} className="linkCategoria">ECHEVERIA</Link></li>
              <li className="listaProd"><Link to={'/cactus'}className="linkCategoria">CACTUS</Link></li>
              <li className="listaProd"><Link to={'/marijuana'}className="linkCategoria">MARIASUCULENTAS</Link></li>
            </ul>
          </li>
          <li className="nav-item">
            <Link className="links" to={"/quienesSomos"}>
              ¿Quienes somos?
            </Link>
          </li>
          <li className="nav-item">
            <Link className="links" to={'/contacto'}>Contactanos</Link>
          </li>
          <li className="nav-item"><Link className="links" to={'/carrocompras'}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-cart4"
            viewBox="0 0 20 20"
          >
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
          </svg>
        </Link></li>
        <li className="nav-item"><Link className="btn " to={'/login'}>Iniciar sesion</Link></li>
        </ul>

      </nav>
    </header>
  );
};

export default Header;
