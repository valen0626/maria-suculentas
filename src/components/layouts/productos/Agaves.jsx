import Header from "../../helpers/Header"
import { Link } from "react-router-dom"

const Agaves = () => {
    return (
        <section>
            <Header />
            <section className="headerProductos">
            </section>

            <section className="seccionProd">
                <section className="categorias">
                    <h1>Buscar</h1>
                    <input type="search" placeholder="Buscar" name="Buscar" id="" />
                    <h1>Categorias</h1>
                    <Link to={'/agaves'} className="linkCategoria">AGAVES</Link>
                    <Link to={'/aloes'} className="linkCategoria">ALOES</Link>
                    <Link to={'/echeveria'} className="linkCategoria">ECHEVERIAS</Link>
                    <Link to={'/cactus'}className="linkCategoria">CACTUS</Link>
                    <Link to={'/marijuana'}className="linkCategoria">MARIASUCULENTAS</Link>
                    <Link className="linkCategoria"></Link>
                </section>
            </section>

            <section className="listaProductos">
          {
            listaProductos.map((productoItem) => (
                <section key={productoItem.nombre} className="producto">
                  <img src={productoItem.imagen} alt={productoItem.nombre} />
                  <a class="link" data-bs-toggle="modal" data-bs-target="#exampleModal">{productoItem.nombre}</a>
                  <h5>{productoItem.precio}</h5>
                  <input type="button" value="Comprar" />
                </section>
              )
            )
          }
          </section>
        </section>
    )
}

export default Agaves