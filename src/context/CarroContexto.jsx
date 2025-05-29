import { createContext, useState } from "react";
import PropTypes from 'prop-types'

export const CarroContexto = createContext();

export const CarroProvider = ({ children }) => {
  const [carroItems, setCarroItems] = useState([])
  const [favoritos, setFavoritos] = useState([])

  const obtenerCantidad = (itemNombre, nuevaCantidad) => {
    setCarroItems((itemAnterior) =>
      itemAnterior.map((item) => (item.nombre === itemNombre ? { ...item, cantidad: nuevaCantidad } : item))
    );
  };

  const agregarAlCarro = (productoItem, cantidad) => {
    const estaEnCarro = carroItems.some(
      (item) =>item.nombre === productoItem.nombre
    );
    if (!estaEnCarro) {
      console.log(carroItems)
      setCarroItems((itemAnterior) => [...itemAnterior, { ...productoItem, cantidad }]);
    }
  };

  const eliminarProducto = (productNombre) => {
    const updatedCarroItems = carroItems.filter(
      (item) => item.nombre !== productNombre
    );
    setCarroItems(updatedCarroItems);
  };

  const marcarFavorito = (productoItem) => {
    const estaEnFavoritos = favoritos.some(
      (item) => item.nombre === productoItem.nombre
    );
    if (!estaEnFavoritos) {
      setFavoritos((itemAnterior) => [...itemAnterior, productoItem]);
    }
  }

  const eliminarFavorito = (producto) => {
    const updatedFavoritoItems = favoritos.filter(
      (item) => item.nombre !== producto.nombre
    );
    setFavoritos(updatedFavoritoItems);
  }

  return (
    <CarroContexto.Provider
      value={{
        carroItems,
        agregarAlCarro,
        eliminarProducto,
        obtenerCantidad,
        marcarFavorito,
        eliminarFavorito,
        favoritos
      }}
    >
      {children}
    </CarroContexto.Provider>
  );
};

CarroProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

