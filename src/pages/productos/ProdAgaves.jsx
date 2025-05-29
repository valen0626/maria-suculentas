
import { dataBase } from "../../components/layouts/config/backConfig"
import { getDocs, collection } from 'firebase/firestore'
import { useContext, useEffect, useState } from "react"
import { CarroContexto } from "../../../features/carro/CarroContexto"
import SelectorCantidad from "../../SelectorCantidad"

const ProdAgaves = () => {
  const { agregarAlCarro, carroItems, marcarFavorito, favoritos, eliminarFavorito } = useContext(CarroContexto);
  const [cantidad, setCantidad] = useState(1);

  const [listaProductos, setListaProductos] = useState([])
  const mostrarLista = async () => {
    const productosCollection = collection(dataBase, 'agaves')
    const data = await getDocs(productosCollection)
    setListaProductos(data.docs.map((doc) => ({ ...doc.data() })))
  }
  useEffect(() => {
    mostrarLista()
  }, [])


  return (
    <section>
        <section className="listaProductos">
          {
            listaProductos.map((productoItem) => (
              <section key={productoItem.nombre} className="producto">
                <img src={productoItem.imagen} alt={productoItem.nombre} />
                <div className="product-info">
                  <div>
                    <a className="font-semibold text-gray-900" data-bs-toggle="modal" data-bs-target={`#${productoItem.imagen}`} >{productoItem.nombre}</a>
                    <p className="font-semibold text-gray-900">${productoItem.precio}</p>
                  </div>
                  <div className="btns-prod">
                    {favoritos.some((item) => item.nombre === productoItem.nombre) ? <i className="bi bi-heart-fill" style={{ color: 'red' }} onClick={() => eliminarFavorito(productoItem)}></i> : <i className="bi bi-heart" onClick={() => marcarFavorito(productoItem)}></i>}
                    <figure onClick={() => agregarAlCarro(productoItem, 1)}>
                      {carroItems.some((item) => item.nombre === productoItem.nombre) 
                       ? 
                      <SelectorCantidad cantidad={cantidad} setCantidad={setCantidad}/>
                       :
                      <img src=".\public\iconos\bt_add_to_cart.svg" alt="add-to-cart" />}
                    </figure>
                  </div>
                </div>


                <div className="modal fade " id={`${productoItem.imagen}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Detalles del producto</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <img src={productoItem.imagen} alt={productoItem.iamgen} />
                        <section>
                          <h2>{productoItem.nombre}</h2>
                          <h4>Descripción</h4>
                          <p>{productoItem.descripcion}</p>
                          <h5>${productoItem.precio}</h5>
                          <input type="button" value="Comprar" />
                        </section>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
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
  )

}

export default ProdAgaves