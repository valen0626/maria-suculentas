import { createContext, useState } from "react";

export const CarroContexto = createContext();

export const CarroProvider = ({ children }) => {
  const [carroItems, setCarroItems] = useState([]);

  const calculateSubtotal = (productoItem) => {
    return productoItem.precio * productoItem.cantidad;
  };

  const total = ()=>{
    return carroItems.reduce((total, item) => total + calculateSubtotal(item), 0);
  }
  const añadirAlCarro = (productoItem) => {
    const estaEnCarro = carroItems.some((item) => item.nombre === productoItem.nombre);
    if (!estaEnCarro) {
        setCarroItems([...carroItems,{ ...productoItem, cantidad: 1 }]);
      } else {
        console.log("El producto ya está en el carro de compras.");
      }
  };

  const eliminarProducto = (productNombre) => {
    const updatedCarroItems = carroItems.filter((item) => item.nombre !== productNombre);
    setCarroItems(updatedCarroItems);
  };

  return (
    <CarroContexto.Provider value={{ total, carroItems, añadirAlCarro, eliminarProducto }}>
      {children}
    </CarroContexto.Provider>
  );
};
