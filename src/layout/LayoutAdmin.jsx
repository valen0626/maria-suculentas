import { Outlet, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";

const LayoutAdmin = () => {
  const { cerrarSesion, usuario } = useContext(AuthContext);
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => setMenuAbierto(!menuAbierto);
  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar para pantallas grandes */}
      <aside className="w-64 bg-white shadow-md hidden md:flex flex-col">
        <SidebarNav cerrarSesion={cerrarSesion} />
      </aside>

      {/* Contenido principal */}
      <div className="flex-1 flex flex-col">
        {/* Topbar para móviles */}
        <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center md:hidden">
          <img src="/img/logo.jpeg" alt="Logo" className="w-20" />
          <button onClick={toggleMenu}>
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </header>

        {/* Menú desplegable en móviles */}
        {menuAbierto && (
          <div className="bg-white shadow-md px-6 py-4 md:hidden">
            <nav className="flex flex-col gap-2">
              <NavItem to="/admin" text="Dashboard" onClick={cerrarMenu} />
              <NavItem to="/admin/productos" text="Productos" onClick={cerrarMenu} />
              <NavItem to="/admin/pedidos" text="Pedidos" onClick={cerrarMenu} />
              <NavItem to="/admin/usuarios" text="Usuarios" onClick={cerrarMenu} />
              <NavItem to="/admin/inventario" text="Inventario" onClick={cerrarMenu} />
              <button
                onClick={() => {
                  cerrarMenu();
                  cerrarSesion();
                }}
                className="text-left text-red-600 hover:underline text-sm"
              >
                Cerrar sesión
              </button>
            </nav>
          </div>
        )}

        {/* Área principal */}
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

const SidebarNav = ({ cerrarSesion }) => (
  <>
    <div className="p-6 border-b">
      <img src="/img/logo.jpeg" alt="Logo" className="w-28 mx-auto" />
      <p className="text-center text-sm text-gray-500 mt-2">Admin Panel</p>
    </div>
    <nav className="flex flex-col gap-1 mt-4 px-4">
      <NavItem to="/admin" text="Dashboard" />
      <NavItem to="/admin/productos" text="Productos" />
      <NavItem to="/admin/pedidos" text="Pedidos" />
      <NavItem to="/admin/usuarios" text="Usuarios" />
      <NavItem to="/admin/inventario" text="Inventario" />
    </nav>
    <div className="mt-auto p-4">
      <button
        onClick={cerrarSesion}
        className="w-full text-sm bg-red-100 text-red-700 py-2 rounded hover:bg-red-200"
      >
        Cerrar sesión
      </button>
    </div>
  </>
);

const NavItem = ({ to, text, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `block px-3 py-2 rounded text-sm font-medium ${
        isActive
          ? "bg-green-100 text-green-800"
          : "text-gray-700 hover:bg-gray-100"
      }`
    }
  >
    {text}
  </NavLink>
);

export default LayoutAdmin;

