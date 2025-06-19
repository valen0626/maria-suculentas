import { useContext, useState, useEffect } from "react";
import { CarroContexto } from "../../context/CarroContexto";
import { Link } from "react-router-dom";
import { formatearCOP } from "../../utils/formatear";

function ProductCard({ producto }) {
  const {
    agregarAlCarro,
    quitarDelCarro,
    actualizarCantidad,
    carroItems,
    marcarFavorito,
    eliminarFavorito,
    favoritos,
  } = useContext(CarroContexto);
  const agotado = producto.stock === 0;

  const [cantidad, setCantidad] = useState(1);
  const estaEnCarro = carroItems.some(item => item.id === producto.id);

  useEffect(() => {
    if (estaEnCarro) {
      const item = carroItems.find(i => i.id === producto.id);
      setCantidad(item.cantidad);
    }
  }, [carroItems]);

  const aumentar = () => {
    const nuevaCantidad = cantidad + 1;
    setCantidad(nuevaCantidad);
    if (estaEnCarro) actualizarCantidad(producto.id, nuevaCantidad);
  };

  const disminuir = () => {
    if (cantidad > 1) {
      const nuevaCantidad = cantidad - 1;
      setCantidad(nuevaCantidad);
      if (estaEnCarro) actualizarCantidad(producto.id, nuevaCantidad);
    }
  };

  const handleInputChange = (e) => {
    const nuevaCantidad = parseInt(e.target.value);
    if (!isNaN(nuevaCantidad) && nuevaCantidad >= 1) {
      setCantidad(nuevaCantidad);
      if (estaEnCarro) actualizarCantidad(producto.id, nuevaCantidad);
    }
  };

  const handleAgregar = () => {
    agregarAlCarro(producto, cantidad);
  };

  const handleQuitar = () => {
    quitarDelCarro(producto.id);
    setCantidad(1);
  };

  return (
    <div className="bg-white border h-full border-gray-200 rounded-lg shadow-sm hover:shadow-md transition duration-300 flex flex-col relative">
      <Link to={`/producto/${producto.id}`} className="block">
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className={`w-full h-44 object-cover rounded-t-lg ${agotado ? "grayscale opacity-60" : ""
            }`}
        />

        {agotado && (
          <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full shadow">
            Agotado
          </div>
        )}
      </Link>

      <div className="p-2 flex flex-col justify-between flex-grow">
        <div className="flex justify-between items-start">
          <div>
            <Link
              to={`/producto/${producto.id}`}
              className="text-lg font-semibold text-gray-800 hover:text-green-600"
            >
              {producto.nombre}
            </Link>
            <p className="text-green-700 text-sm font-bold mt-1">
              {formatearCOP(producto.precio)}
            </p>
          </div>
          <div className="ml-2">
            {favoritos.some(item => item.id === producto.id) ? (
              <i
                className="bi bi-heart-fill text-red-500 text-xl cursor-pointer"
                onClick={() => eliminarFavorito(producto)}
              ></i>
            ) : (
              <i
                className="bi bi-heart text-gray-600 text-xl cursor-pointer"
                onClick={() => marcarFavorito(producto)}
              ></i>
            )}
          </div>
        </div>

        {!agotado && (
          <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            {estaEnCarro ? (
              <>
                <div className="flex items-center justify-center border rounded-full overflow-hidden w-fit mx-auto sm:mx-0">
                  <button
                    onClick={disminuir}
                    className="px-2 py-1 text-gray-700 hover:bg-gray-100"
                  >
                    −
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={cantidad}
                    onChange={handleInputChange}
                    className="w-9 text-center outline-none appearance-none no-spinner"
                  />
                  <button
                    onClick={aumentar}
                    className="px-2 py-1 text-gray-700 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={handleQuitar}
                  className="text-red-600 mx-auto hover:text-red-800 text-sm underline"
                >
                  Quitar
                </button>
              </>
            ) : (
              <button
                onClick={handleAgregar}
                className="bg-green-600 mx-auto text-white py-1 px-4 rounded-full hover:bg-green-500 transition w-full sm:w-auto"
              >
                Añadir al carrito
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );

}

export default ProductCard;
