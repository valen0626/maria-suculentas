import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../App";

// Layouts
import LayoutGeneral from "../layout/LayoutGeneral";
import LayoutCliente from "../layout/LayoutCliente";

// Páginas públicas
import Inicio from "../pages/public/Inicio";
import Pagina404 from "../pages/public/Pagina404";
import Contacto from "../pages/public/Contacto";
import ProductosPage from "../pages/public/ProductosPage";
import ProductDetail from "../pages/public/ProductDetail"
import Favoritos from "../pages/public/Favoritos";
import ConfirmarPedido from "../pages/public/ConfirmarPedido";

// Páginas de auth
import Ingresar from "../pages/public/Ingresar";
import Registrar from "../pages/public/Registrar";

// Páginas cliente 
import Perfil from "../pages/private/Perfil";
import RutaPrivada from "./RutaPrivada";

// Páginas admin


// Protección de rutas 


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
            path:"confirmarPedido",
            element: <ConfirmarPedido/>
          },
          {
            path: "contacto",
            element: <Contacto />,
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
        ]
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
            element: <LayoutCliente />,
            children: [
              {
                path: "perfil",
                element: <Perfil />
              }
            ]
          }
        ]
      },

  // Admin 
  // {
  //   path: "/admin",
  //   element: (
  //     <RutaProtegida>
  //       <VistaAdmin />
  //     </RutaProtegida>
  //   ),
  // },
  ]}

]);