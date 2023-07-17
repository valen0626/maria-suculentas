import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/layouts/Home";
import Productos from "./components/layouts/Productos";
import Login from "./components/layouts/Login";
import Registrate from "./components/layouts/Registrate";

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
