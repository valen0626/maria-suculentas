import { Link } from "react-router-dom"
import Header from "../../helpers/Header"
import { dataBase } from "../config/backConfig"
import { getDocs, collection } from 'firebase/firestore'
import { useContext, useEffect, useState } from "react"
import { CarroContexto } from "../carro/CarroContexto"

const ProdMarijuana = () => {
  const {añadirAlCarro} = useContext(CarroContexto)

  const [listaProductos, setListaProductos] = useState([])
  const mostrarLista = async () => {
    const productosCollection = collection(dataBase, 'mari-juana')
    const data = await getDocs(productosCollection)
    setListaProductos(data.docs.map((doc) => ({ ...doc.data() })))
    console.log(data.docs.map((doc) => ({ ...doc.data() })));
  }
  useEffect(() => {
    mostrarLista()
  }, [])
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
          <Link to={"/agaves"}className="linkCategoria">AGAVES</Link>
          <Link to={'/aloes'}className="linkCategoria">ALOE</Link>
          <Link to={'/echeveria'} className="linkCategoria">ECHEVERIA</Link>
          <Link to={'/cactus'}className="linkCategoria">CACTUS</Link>
          <Link to={'/marijuana'}className="linkCategoria">MARIASUCULENTAS</Link>
          
        </section>
        
        <section className="listaProductos">
          {
            listaProductos.map((productoItem) => (
              <section key={productoItem.nombre} className="producto">
                <img src={productoItem.imagen} alt={productoItem.nombre} />
                <a class="link" data-bs-toggle="modal" data-bs-target={`#${productoItem.nombre}`} >{productoItem.nombre}</a>
                <h5>${productoItem.precio}</h5>
                <input type="button" value="Comprar" onClick={() => añadirAlCarro(productoItem,1)} />
                <div class="modal fade " id={`${productoItem.nombre}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-lg">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Detalles del producto</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <img src={productoItem.imagen} alt={productoItem.iamgen} />
                    <section>
                      <h2>{productoItem.nombre}</h2>
                      <h4>Descripción</h4>
                      <p>{productoItem.descripcion}</p>
                      <h5>${productoItem.precio}</h5>
                      <input type="button" value="Comprar" onClick={() => añadirAlCarro(productoItem,1)}/>
                    </section>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                  </div>
                </div>
              </div>
            </div>
              </section>
            )
            )
          }
        </section>
      </section>
    </section>
  )

}

export default ProdMarijuana