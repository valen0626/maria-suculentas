import { RouterProvider } from "react-router-dom";
import { CarroProvider } from "./context/CarroContexto";
import { AuthProvider } from "./context/authContext";
import { UIProvider } from "./context/UIContext";
import { router } from "./routes/routes";

function App() {
  return (
    <AuthProvider>
      <UIProvider>
        <CarroProvider>
          <RouterProvider router={router} />
        </CarroProvider>
      </UIProvider>
    </AuthProvider>
  );
}

export default App;
