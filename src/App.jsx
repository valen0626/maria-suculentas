import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/layouts/Home";
import Productos from "./components/layouts/productos/Productos";
import Login from "./components/layouts/Login";
import Registrate from "./components/layouts/Registrate";
import Contacto from "./components/layouts/Contacto";
import Quienesomos from "./components/layouts/Quienesomos";
import VistaCarro from "./components/layouts/carro/VistaCarro";
import { CarroProvider } from "./components/layouts/carro/CarroContexto";
import Terminos from "./components/layouts/Terminos";
import FormularioCompra from "./components/layouts/carro/FormularioCompra";
import ProdAgaves from "./components/layouts/productos/ProdAgaves";
import ProdAloes from "./components/layouts/productos/ProdAloes";
import ProdCactus from "./components/layouts/productos/ProdCactus";
import ProdMarijuana from "./components/layouts/productos/ProdMarijuana";

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
    element: <Login />
  },
  {
    path: '/registrate',
    element: <Registrate />
  },
  {
    path: '/echeveria',
    element: <Productos />
  },
  {
    path: '/agaves',
    element: <ProdAgaves />
  },
  {
    path: '/aloes',
    element: <ProdAloes />
  },
  {
    path: '/cactus',
    element: <ProdCactus />
  },
  {
    path: '/marijuana',
    element: <ProdMarijuana />
  },
  {
    path: '/contacto',
    element: <Contacto />
  },
  {
    path: '/quienesSomos',
    element: <Quienesomos />
  },
  {
    path: '/carrocompras',
    element: <VistaCarro/>
  },
  {
    path: '/terminosycondiciones',
    element: <Terminos/>
  },
  {
    path: '/formulariocompra',
    element: <FormularioCompra/>
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
