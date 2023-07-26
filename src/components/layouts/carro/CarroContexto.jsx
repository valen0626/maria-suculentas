import { createContext, useState } from "react";

export const CarroContexto = createContext();

export const CarroProvider = ({ children }) => {
  const [carroItems, setCarroItems] = useState([])

  const obtenerCantidad = (itemNombre, nuevaCantidad) => {
    setCarroItems((itemAnterior) =>
      itemAnterior.map((item) => (item.nombre === itemNombre ? { ...item, cantidad: nuevaCantidad } : item))
    );
  };

  const añadirAlCarro = (productoItem, cantidad) => {
    const estaEnCarro = carroItems.some(
      (item) => item.nombre === productoItem.nombre
    );
    if (!estaEnCarro) {
      setCarroItems((itemAnterior) => [...itemAnterior, { ...productoItem, cantidad }]);
    }
  };

  const eliminarProducto = (productNombre) => {
    const updatedCarroItems = carroItems.filter(
      (item) => item.nombre !== productNombre
    );
    setCarroItems(updatedCarroItems);
  };

  return (
    <CarroContexto.Provider
      value={{
        carroItems,
        añadirAlCarro,
        eliminarProducto,
        obtenerCantidad,
      }}
    >
      {children}
    </CarroContexto.Provider>
  );
};
