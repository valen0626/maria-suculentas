import { useState } from "react";
import Header from "../../helpers/Header";
import { CarroContexto } from "./CarroContexto";
import { useContext } from "react";

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
      <section className="headerCarro"></section>
      <section className="vistaCarrito">
        <h1>Carrito de Compras</h1>
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
                    <input
                      type="button"
                      value="Eliminar"
                      onClick={() => eliminarProducto(item.nombre)}
                    />
                  </td>
                  <td>
                    <img src={item.imagen} alt="" />
                  </td>
                  <td>{item.nombre}</td>
                  <td>${item.precio}</td>
                  <td>
                    <input
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
            </tbody>
            <tfoot>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>Total: </td>
                <td>${calcularTotal()}.000</td>
              </tr>
            </tfoot>
          </table>
          <input type="button" value="Realizar compra" />
        </section>
      </section>
    </section>
  );
};
export default VistaCarro;
