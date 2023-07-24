import Header from "../../helpers/Header"
import { listaCarro, setListaCarro } from "./CarroContext"

const CarroCompras = () => {
  return (
    <section>
        <Header/>
        <section className="headerCarro"></section>
        <section className="vistaCarrito">
        {
            listaCarro.map((productoItem)=>(
                <section key={productoItem.nombre} className="producto">
                  <img src={productoItem.imagen} alt={productoItem.nombre} />
                  <a class="link" data-bs-toggle="modal" data-bs-target="#exampleModal">{productoItem.nombre}</a>
                  <h5>{productoItem.precio}</h5>
                </section>
            ))
        }
        <section className="listaCarro">
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
        
    </section>
  )
}

export default CarroCompras