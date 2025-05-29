
const Nav = () => {
    return (
        <nav>
            <svg xmlns="http://www.w3.org/2000/svg" className="icono-menu" width="40" height="40" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg>
            <div className="navbar-left">
                <img src="./public/img/logo.jpeg" alt="logo" className="logo-navbar"/>
                <ul>
                    <li>Productos</li>
                    <li>Ventas</li>
                    <li>Usuarios</li>
                    <li>Inventario</li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li>Cerrar sesión</li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav