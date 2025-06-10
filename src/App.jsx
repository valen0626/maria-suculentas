import { Outlet } from "react-router-dom";
import { CarroProvider } from "./context/CarroContexto";
import { AuthProvider } from "./context/authContext";
import { UIProvider } from "./context/UIContext";
import { NotificacionProvider } from "./context/NotificacionContext";

function App() {
  return (
    <AuthProvider>
      <UIProvider>
        <NotificacionProvider>
          <CarroProvider>
            <Outlet/>
          </CarroProvider>
        </NotificacionProvider>
      </UIProvider>
    </AuthProvider>
  );
}

export default App;
