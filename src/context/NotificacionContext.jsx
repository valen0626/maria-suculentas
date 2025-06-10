import { createContext, useContext, useState, useCallback } from "react";
import PopupMensaje from "../components/PopupMensaje";

const NotificacionContext = createContext();

export function NotificacionProvider({ children }) {
  const [visible, setVisible] = useState(false);
  const [tipo, setTipo] = useState("exito");
  const [mensaje, setMensaje] = useState("");

  const mostrarNotificacion = useCallback((tipo, mensaje) => {
    setTipo(tipo);
    setMensaje(mensaje);
    setVisible(true);
    setTimeout(() => setVisible(false), 3000);
  }, []);

  return (
    <NotificacionContext.Provider value={{ mostrarNotificacion }}>
      {children}
      <PopupMensaje
        tipo={tipo}
        mensaje={mensaje}
        visible={visible}
        onClose={() => setVisible(false)}
      />
    </NotificacionContext.Provider>
  );
}

export function useNotificacion() {
  return useContext(NotificacionContext);
}
