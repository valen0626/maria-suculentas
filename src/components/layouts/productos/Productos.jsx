import { Link } from "react-router-dom"
import Header from "../../helpers/Header"
import { dataBase } from "../config/backConfig"
import {getDocs, collection} from 'firebase/firestore'
import { useEffect, useState } from "react"

const Productos = () => {
  const [listaProductos, setListaProductos] = useState([])
    const mostrarLista = async()=>{
        const productosCollection = collection(dataBase, 'productos')
        const data = await getDocs(productosCollection)
        setListaProductos(data.docs.map((doc)=>({...doc.data()})))
        console.log(data.docs.map((doc)=>({...doc.data()})));
    }
    useEffect(()=>{
      mostrarLista()
    }, [])
  
    const [carroItems, setCarroItems] = useState([]);
    const [total, setTotal] = useState(0);
    const añadirAlCarro = (productoItem) => {
      const nuevoProducto = [...carroItems, productoItem];
      const nuevoTotal = total + productoItem.precio;
      setCarroItems(nuevoProducto);
      setTotal(nuevoTotal);
      return carroItems
    };
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
          <Link className="linkCategoria">AGAVES</Link>
          <Link className="linkCategoria">ALOE</Link>
          <Link to={'/echeveria'} className="linkCategoria">ECHEVERIA</Link>
          <Link className="linkCategoria">CACTUS</Link>
          <Link className="linkCategoria">OTRAS SUCULENTAS</Link>
          <Link className="linkCategoria">ACEITES ESENCIALES</Link>
        </section>
        <section className="listaProductos">
          {
            listaProductos.map((productoItem) => (
                <section key={productoItem.nombre} className="producto">
                  <img src={productoItem.imagen} alt={productoItem.nombre} />
                  <a class="link" data-bs-toggle="modal" data-bs-target="#exampleModal">{productoItem.nombre}</a>
                  <h5>{productoItem.precio}</h5>
                  <input type="button" value="Comprar" onClick={()=>añadirAlCarro(productoItem)}/>
                </section>
              )
            )
          }
          <section className="producto">
            <img src="/Echeveria-colorata.jpg" alt="" />
            <a class="link" data-bs-toggle="modal" data-bs-target="#exampleModal">Echeveria colorata</a>
            <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-lg">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Detalles del producto</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <img src="/Echeveria-colorata.jpg" alt="echeveria-colorata" />
                    <section>
                      <h2>Echeveria colorata 'Hibrida'</h2>
                      <h4>Descripción</h4>
                      <p>Esta planta forma parte de la Surreal Succulents Online Rare Plant Fair.
                      Este es un híbrido único, elegido de nuestra colección para esta oportunidad única de poseer este Echeveria único.
                      </p>
                      <h5>$15,000</h5>
                      <input className="cantidad" type="number"/>
                      <input type="button" value="Comprar" />
                    </section>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                  </div>
                </div>
              </div>
            </div>
            <h5>$15,000</h5>
            <input type="button" value="Comprar" />
          </section>
      </section>
    </section>
    </section>
  )
  
}

export default Productos