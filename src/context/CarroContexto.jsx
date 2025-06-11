import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'

export const CarroContexto = createContext();

export const CarroProvider = ({ children }) => {
  const [carroItems, setCarroItems] = useState([])
  const [favoritos, setFavoritos] = useState([])

  useEffect(() => {
    const carritoGuardado = localStorage.getItem('carrito');
    const misFavoritos = localStorage.getItem('favoritos')
    if (carritoGuardado) {
      setCarroItems(JSON.parse(carritoGuardado));
    }

    if (misFavoritos) {
      setFavoritos(JSON.parse(misFavoritos))
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carroItems));
  }, [carroItems]);

  useEffect(()=>{
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
  },[favoritos])

  const agregarAlCarro = (producto, cantidad) => {
    const existe = carroItems.find((item) => item.id === producto.id);

    if (existe) {
      setCarroItems((prev) =>
        prev.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + cantidad }
            : item
        )
      );
    } else {
      setCarroItems((prev) => [...prev, { ...producto, cantidad }]);
    }
  };

  const actualizarCantidad = (itemId, nuevaCantidad) => {
    setCarroItems((prev) =>
      prev.map((item) =>
        item.id === itemId ? { ...item, cantidad: nuevaCantidad } : item
      )
    );
  };

  const quitarDelCarro = (productNombre) => {
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
        quitarDelCarro,
        marcarFavorito,
        eliminarFavorito,
        actualizarCantidad,
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

