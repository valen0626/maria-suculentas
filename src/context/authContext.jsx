import { createContext, useEffect, useReducer } from "react";
import { signOut } from "firebase/auth";
import { auth, db } from "../services/firebase";
import { onSnapshot, doc } from "firebase/firestore";

const initialState = {
  usuario: {},
};

const AuthContext = createContext({
  usuario: {},
  iniciarSesion: () => {},
  cerrarSesion: () => {},
});

function authReducer(state, action) {
  switch (action.type) {
    case "NUEVA_SESION":
      return { ...state, usuario: action.payload };
    case "CERRAR_SESION":
      return { ...state, usuario: {} };
    default:
      return state;
  }
}

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const idToken = localStorage.getItem("IdToken");
    const idCliente = localStorage.getItem("IdCliente");
    const rol = localStorage.getItem("Rol");

    if (idToken && idCliente && rol) {
      const ref = doc(db, rol === "administrador" ? "Personales" : "clientes", idCliente);

      const unsubscribe = onSnapshot(ref, (docSnap) => {
        const data = docSnap.data();
        if (data && data.IdToken === idToken) {
          const userData = {
            ...data,
            IdCliente: idCliente,
            IdToken: idToken,
            Rol: rol,
          };
          dispatch({ type: "NUEVA_SESION", payload: userData });
        } else {
          cerrarSesion();
        }
      });

      return () => unsubscribe();
    }
  }, []);

  function iniciarSesion(userData) {
    Object.entries(userData).forEach(([key, value]) =>
      localStorage.setItem(key, value)
    );

    dispatch({ type: "NUEVA_SESION", payload: userData });
  }

  function cerrarSesion() {
    localStorage.clear();
    signOut(auth).then(() =>
      dispatch({ type: "CERRAR_SESION" })
    );
  }

  return (
    <AuthContext.Provider
      value={{
        usuario: state.usuario,
        iniciarSesion,
        cerrarSesion,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
