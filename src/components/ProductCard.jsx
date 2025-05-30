import { useContext, useState } from "react";
import SelectorCantidad from "../components/SelectorCantidad/SelectorCantidad";
import { CarroContexto } from "../context/CarroContexto";

function ProductCard({ producto }) {
  const {
    agregarAlCarro,
    carroItems,
    marcarFavorito,
    favoritos,
    eliminarFavorito,
  } = useContext(CarroContexto);
  const [cantidad, setCantidad] = useState(1);

  return (
    <div className="border border-gray-500 shadow-sm rounded-lg">
      <img
        src={producto.imagen}
        alt={producto.nombre}
        className="w-full h-44 object-cover rounded-t-lg"
      />
      <div className="flex justify-between p-2">
        <div className="py-2">
          <a
            className="font-semibold text-gray-900"
            data-bs-toggle="modal"
            data-bs-target={`#${producto.imagen}`}
          >
            {producto.nombre}
          </a>
          <p className="font-semibold text-gray-900">${producto.precio}</p>
        </div>
        <div className="flex flex-column items-end">
          {favoritos.some((item) => item.nombre === producto.nombre) ? (
            <i
              className="bi bi-heart-fill px-2"
              style={{ color: "red", fontSize: "25px" }}
              onClick={() => eliminarFavorito(producto)}
            ></i>
          ) : (
            <i
              className="bi bi-heart px-2"
              style={{ fontSize: "25px" }}
              onClick={() => marcarFavorito(producto)}
            ></i>
          )}
          <figure onClick={() => agregarAlCarro(producto, 1)}>
            {carroItems.some((item) => item.nombre === producto.nombre) ? (
              <SelectorCantidad cantidad={cantidad} setCantidad={setCantidad} />
            ) : (
              <img
                src="/iconos/bt_add_to_cart.svg"
                alt="add-to-cart"
                className="h-10 w-10"
              />
            )}
          </figure>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
