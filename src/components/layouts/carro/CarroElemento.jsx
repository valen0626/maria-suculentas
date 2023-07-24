import Header from "../../helpers/Header"

const CarroElemento = ({ carroItems, total }) => {
    
  return (
    <section>
        <section className="headerCarro"></section>
        <section >
      <h2>Carrito de compras</h2>
      <ul>
        {carroItems.map((item) => (
          <li key={item.nombre}>
            {item.nombre} - ${item.precio}
          </li>
        ))}
      </ul>
      <p>Total: ${total}</p>
        {/* <section className="listaCarro">
            <table>
                <thead>
                    <tr>
                        <th>eliminar</th>
                        <th>imagen</th>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>m</td>
                        <td>k</td>
                        <td>edd</td>
                        <td>ew</td>
                        <td>ede</td>
                        <td>dec</td>
                    </tr>
                    <tr>
                        <td>m</td>
                        <td>k</td>
                        <td>edd</td>
                        <td>ew</td>
                        <td>ede</td>
                        <td>dec</td>
                    </tr>
                </tbody>
            </table>
        </section>
        </section>
         */}
    </section>
    </section>
  )
}

export default CarroElemento