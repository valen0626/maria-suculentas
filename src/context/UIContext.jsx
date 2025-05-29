import { createContext, useReducer } from "react";

const initialState = {
  sidebar: false,
};

const UIContext = createContext({
  sidebar: false,
  cambiarEstadoSidebar: () => {},
});

function uiReducer(state, action) {
  switch (action.type) {
    case "CAMBIAR_ESTADO_SIDEBAR":
      return { ...state, sidebar: action.payload };
    default:
      return state;
  }
}

function UIProvider({ children }) {
  const [state, dispatch] = useReducer(uiReducer, initialState);

  const cambiarEstadoSidebar = (estado) => {
    dispatch({ type: "CAMBIAR_ESTADO_SIDEBAR", payload: estado });
  };

  return (
    <UIContext.Provider value={{ sidebar: state.sidebar, cambiarEstadoSidebar }}>
      {children}
    </UIContext.Provider>
  );
}

export { UIContext, UIProvider };
