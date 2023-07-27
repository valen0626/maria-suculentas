import { useState } from "react";
import Header from "../../helpers/Header";
import { CarroContexto } from "./CarroContexto";
import { useContext } from "react";
import { Link } from "react-router-dom";

const VistaCarro = () => {
  const {
    carroItems,
    eliminarProducto,
    obtenerCantidad,
  } = useContext(CarroContexto);

  const cambioCantidad = (itemNombre, nuevaCantidad) => {
    obtenerCantidad(itemNombre, nuevaCantidad);
  };

  const calcularTotal = () => {
    return carroItems.reduce((total, item) => total + parseInt(item.precio) * item.cantidad, 0);
  };

  return (
    <section>
      <Header />
      <section className="headerCarro">
      </section>
      <section className="contenedorimg">
        <img src="./public/img/fondo inicio.jpg" alt="" className="imagenCarro"/>
        <h1>Carro de compras</h1>
      </section>
      <section className="vistaCarrito">
        <section className="listaCarro">
          <table>
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {carroItems.map((item) => (
                <tr key={item.nombre}>
                  <td>
                  <svg onClick={() => eliminarProducto(item.nombre)} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
</svg>
                  </td>
                  <td>
                    <img src={item.imagen} alt="" />
                  </td>
                  <td>{item.nombre}</td>
                  <td>${item.precio}</td>
                  <td>
                    <input
                      className="cantidad"
                      type="number"
                      placeholder="Cantidad"
                      // onChange={(e) => setCantidad(parseInt(e.target.value))}
                      onChange={(e) => cambioCantidad(item.nombre, parseInt(e.target.value))}
                      value={item.cantidad}
                    ></input>
                  </td>
                  <td>
                    ${item.cantidad*parseInt(item.precio)}.000</td>
                </tr>
              ))}
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><h2>Total: </h2></td>
                <td><h4>${calcularTotal()}.000</h4></td>
              </tr>
            </tbody>
          </table>
          <Link to={'/formulariocompra'} className="btnCarro" type="button" >Realizar compra</Link>
        </section>
      </section>
    </section>
  );
};
export default VistaCarro;
