import { useContext, useState } from "react";
import SelectorCantidad from "../components/SelectorCantidad/SelectorCantidad"
import { CarroContexto } from "../context/CarroContexto";

function ProductCard({ producto }) {
  const { agregarAlCarro, carroItems, marcarFavorito, favoritos, eliminarFavorito } = useContext(CarroContexto);
  const [ cantidad, setCantidad ]= useState(1)

  return (
    <div className="producto">
      <img src={producto.imagen} alt={producto.nombre} />
      <div className="product-info">
        <div>
          <a className="font-semibold text-gray-900" data-bs-toggle="modal" data-bs-target={`#${producto.imagen}`} >{producto.nombre}</a>
          <p className="font-semibold text-gray-900">${producto.precio}</p>
        </div>
        <div className="btns-prod">
          {favoritos.some((item) => item.nombre === producto.nombre) ? <i className="bi bi-heart-fill" style={{ color: 'red' }} onClick={() => eliminarFavorito(producto)}></i> : <i className="bi bi-heart" onClick={() => marcarFavorito(producto)}></i>}
          <figure onClick={() => agregarAlCarro(producto, 1)}>
            {carroItems.some((item) => item.nombre === producto.nombre)
              ?
              <SelectorCantidad cantidad={cantidad} setCantidad={setCantidad} />
              :
              <img src="/iconos/bt_add_to_cart.svg" alt="add-to-cart" />}
          </figure>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
