import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/layouts/Home";
import Productos from "./components/layouts/productos/Productos";
import Login from "./components/layouts/Login";
import Registrate from "./components/layouts/Registrate";
import Contacto from "./components/layouts/Contacto";
import Quienesomos from "./components/layouts/Quienesomos";
import VistaCarro from "./components/layouts/carro/VistaCarro";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/productos",
    element: <Productos />,
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/registrate',
    element: <Registrate/>
  },
  {
    path:'/echeveria',
    element: <Productos/>
  },
  {
  path: '/contacto',
  element: <Contacto />
  },
  {
    path: '/quienesSomos',
    element: <Quienesomos/>
  },
  {
    path: '/carrocompras',
    element: <VistaCarro/>
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
