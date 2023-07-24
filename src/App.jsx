import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/layouts/Home";
import Productos from "./components/layouts/productos/Productos";
import Login from "./components/layouts/Login";
import Registrate from "./components/layouts/Registrate";
import Echeveria from "./components/layouts/productos/Echeveria";
import Contacto from "./components/layouts/Contacto";
import Quienesomos from "./components/layouts/Quienesomos";
import CarroCompras from './components/layouts/carro/CarroCompras'
import CarroProvider from "./components/layouts/carro/CarroContext";

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
    element: <CarroCompras/>
  }
]);

function App() {
  return (
    <>
    <CarroProvider>
      <RouterProvider router={router} />
      </CarroProvider>
    </>
  );
}

export default App;
