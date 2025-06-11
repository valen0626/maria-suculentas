import { useState } from "react";

export function useCantidad(inicial = 1, min = 1, max = 20) {
  const [cantidad, setCantidad] = useState(inicial);

  const incrementar = () => {
    if (cantidad < max) setCantidad(cantidad + 1);
  };

  const decrementar = () => {
    if (cantidad > min) setCantidad(cantidad - 1);
  };

  const cambiarCantidad = (valor) => {
    const nuevaCantidad = parseInt(valor);
    if (!isNaN(nuevaCantidad) && nuevaCantidad >= min && nuevaCantidad <= max) {
      setCantidad(nuevaCantidad);
    }
  };

  return {
    cantidad,
    setCantidad: cambiarCantidad,
    incrementar,
    decrementar,
  };
}
