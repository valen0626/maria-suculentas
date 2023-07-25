import Header from "../../helpers/Header";
import { CarroContexto } from "./CarroContexto";
import { useContext } from "react";

const VistaCarro = () => {
  const { total, carroItems, eliminarProducto } = useContext(CarroContexto);

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
                    <td><input type="button" value="Eliminar" onClick={() => eliminarProducto(item.nombre)} /></td>
                    <td><img src={item.imagen} alt="" /></td>
                    <td>{item.nombre}</td>
                    <td>{item.precio}</td>
                    <td>1</td>
                    <td>{item.precio}</td>
                  </tr>
                ))}
            </tbody>
          </table>
          <h1>${total}</h1>
                  
        </section>
      </section>
    </section>
  );
};
export default VistaCarro;
