import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../App";

// Layouts
import LayoutGeneral from "../layout/LayoutGeneral";
import LayoutAdmin from "../layout/LayoutAdmin";

// Páginas públicas
import Inicio from "../pages/public/Inicio";
import Pagina404 from "../pages/public/Pagina404";
import Contacto from "../pages/public/Contacto";
import ProductosPage from "../features/productos/ProductosPage";
import ProductDetail from "../features/productos/ProductDetail"
import Favoritos from "../pages/public/Favoritos";
import ConfirmarPedido from "../pages/public/ConfirmarPedido";

// Páginas de auth
import Ingresar from "../pages/public/Ingresar";
import Registrar from "../pages/public/Registrar";

// Páginas cliente 
import Perfil from "../pages/private/Perfil";
import MisCompras from "../pages/private/MisCompras";

// Páginas admin
import Dashboard from "../pages/admin/Dashboard";

// Protección de rutas 
import RutaAdmin from "./RutaAdmin";
import RutaPrivada from "./RutaPrivada";
import ProductosAdmin from "../pages/admin/ProductosAdmin";
import PedidosAdmin from "../pages/admin/PedidosAdmin";
import UsuariosAdmin from "../pages/admin/UsuariosAdmin";
import InventarioAdmin from "../pages/admin/InventarioAdmin";


export const router = createBrowserRouter([
  // Ruta raíz
  {
    path: "/",
    element: <App />,
    children: [
      //Rutas publicas
      {
        path: "/",
        element: <LayoutGeneral />,
        children: [
          {
            index: true,
            element: <Inicio />
          },
          {
            path: "productos",
            element: <ProductosPage />,
          },
          {
            path: "producto/:id",
            element: <ProductDetail />,
          },
          {
            path: "favoritos",
            element: <Favoritos />,
          },
          {
            path: "contacto",
            element: <Contacto />,
          },
        ]
      },
      // Página 404
      {
        path: "*",
        element: <Navigate to="/pagina-no-encontrada" replace />,
      },
      {
        path: "pagina-no-encontrada",
        element: <Pagina404 />
      },
      // Sin layout     
      {
        path: "confirmarPedido",
        element: <ConfirmarPedido />
      },
      // Auth
      {
        path: "ingresar",
        element: <Ingresar />,
      },
      {
        path: "registrar",
        element: <Registrar />,
      },


      // Cliente (puedes protegerla con un componente luego)
      {
        path: "cliente/",
        element: <RutaPrivada />,
        children: [
          {
            path: "",
            element: <LayoutGeneral />,
            children: [
              {
                path: "perfil",
                element: <Perfil />
              },
              {
                path: "misPedidos",
                element: <MisCompras />
              }
            ]
          },
        ]
      },

      //Admin 
      {
        path: "admin/",
        element: <RutaAdmin/>,
        children: [
          {
            path: "",
            element: <LayoutAdmin/>,
            children:[
              {
                index: true,
                element: <Dashboard/>
              },
              {
                path: "productos",
                element: <ProductosAdmin/>
              },
              {
                path: "pedidos",
                element: <PedidosAdmin/>
              },
              {
                path: "usuarios",
                element: <UsuariosAdmin/>
              },
              {
                path: "inventario",
                element: <InventarioAdmin/>
              },
            ]
          }
        ]
      },
    ]
  }

]);