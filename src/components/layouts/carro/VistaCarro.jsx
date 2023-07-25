import { useState } from "react";
import Header from "../../helpers/Header";
import { CarroContexto } from "./CarroContexto";
import { useContext } from "react";

const VistaCarro = () => {
  const {
    total,
    carroItems,
    eliminarProducto,
  } = useContext(CarroContexto);

  const [cantidad, setCantidad] = useState(1);
  const [subtotal, setSubtotal] = useState(0)

  // const calculateSubtotal = (precio, cantidad) => {
  //   return parseInt(precio) * parseInt(cantidad);
  // };

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
                  <td>{item.precio}</td>
                  <td>
                    <input
                      type="number"
                      placeholder="Cantidad"
                      value={cantidad}
                      onChange={(e) => setCantidad(item.nombre, e.target.value)}
                    ></input>
                  </td>
                  <td>
                    {setSubtotal(cantidad*item.precio)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h1>${subtotal}</h1>
        </section>
      </section>
    </section>
  );
};
export default VistaCarro;
