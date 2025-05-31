import { Navigate, createBrowserRouter } from "react-router-dom";

// Layouts
import LayoutGeneral from "../layout/LayoutGeneral";

// Páginas públicas
import Inicio from "../pages/public/Inicio";
import Pagina404 from "../pages/public/Pagina404";
import Contacto from "../pages/public/Contacto";
import ProductosPage from "../pages/public/ProductosPage";
import ProductDetail from "../pages/public/ProductDetail"

// Páginas de auth
import Ingresar from "../pages/public/Ingresar";
import Registrar from "../pages/public/Registrar";

// Páginas cliente 
import Perfil from "../pages/private/Perfil";

// Páginas admin


// Protección de rutas 


export const router = createBrowserRouter([
  // Ruta raíz
  {
    path: "/",
    element: <LayoutGeneral />,
    children: [
      {
        index: true,
        element: <Inicio />
      },
      {
        path: "productos/:categoria",
        element: <ProductosPage />,
      },
      {
        path: "producto/:id",
        element: <ProductDetail />,
      },
      {
        path: "contacto",
        element: <Contacto />,
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

  // Cliente (puedes protegerla con un componente luego)
  {
    path: "cliente/perfil",
    element: <LayoutGeneral><Perfil /></LayoutGeneral>,
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

]);