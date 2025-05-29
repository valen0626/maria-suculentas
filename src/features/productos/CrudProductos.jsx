// import { dataBase } from "../../config/backConfig"
// import { getDoc, doc, collection, getDocs, setDoc } from 'firebase/firestore'
// import { useContext, useEffect, useState } from "react"
// import { Link } from "react-router-dom";
// import { productContext } from '../ProductContext'

// const CrudProductos = () => {
//   const valueInicial = {
//     url: '',
//     nombre: '',
//     categoria:'selecciona',
//     precio: '',
//     descripcion: '',
//     stock:'',
//   }
//   const { deleteProduct, updateProduct, subirImagenes, obtenerUrl } = useContext(productContext)
//   const [listaProductos, setListaProductos] = useState([])
//   const [productId, setProductId] = useState('')
//   const [product, setProduct] = useState(valueInicial)
//   const [file, setFile] = useState({})
//   const [imagen, setImagen] = useState({})

//   const handleChange = async (e) => {
//     const { name, value } = e.target
//     setProduct({ ...product, [name]: value })
//     if (name === 'imagen') {
//       const file = e.target.files[0]
//       setFile(file)
//       await subirImagenes(file, file.name)
//       const urlImagen = await obtenerUrl(file, file.name)
//       setImagen(urlImagen)
//       setProduct({ ...product, ['imagen']: imagen })
//     }
//     console.log(product);
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()

//     setProduct({ ...valueInicial })

//   }

//   const ponerCampos = async (id) =>{
//     const cityRef = doc(dataBase, 'aloes', id);
//     await setDoc(cityRef, { stock: '10' }, { categoria: 'aloes' },{ descripcion: '' });
//   }

//   const docProduct = async (id) => {
//     try {
//       const doc_ref = doc(dataBase, "aloes", id)
//       const docProduct = await getDoc(doc_ref)
//       setProduct(docProduct.data())
//       ponerCampos(id)
//       console.log(productId);
//       console.log(product);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   useEffect(() => {
//     if (productId !== '') {
//       docProduct(productId)
//     }
//   }, [productId])
  
//   useEffect(() => {
//     const mostrarLista = async () => {
//       try {
//         const productosCollection = collection(dataBase, 'aloes')
//         const data = await getDocs(productosCollection)
//         setListaProductos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     mostrarLista()
//   }, [listaProductos])
//   return (
//     <section className="containner-products">
//       <button className="btn-primary btn-new-product"><Link className="link-form" to={'/createProduct'}>
//         <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
//           <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
//           <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
//         </svg>Nuevo producto</Link></button>
//       <section className="listaProductos">
//         {
//           listaProductos.map((productoItem) => (
//             <section key={productoItem.id} className="producto">
//               <img src={productoItem.imagen} alt={productoItem.nombre} />
//               <div className="product-info">
//                 <p>
//                   <a class="link" >{productoItem.nombre}</a>
//                   <p>${productoItem.precio}</p>
//                 </p>
//                 <div className="buttons-crud">
//                   <button data-bs-toggle="modal" data-bs-target={`#${productoItem.id}`} onClick={() => docProduct(productoItem.id)}>
//                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
//                       <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
//                       <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
//                     </svg>Editar</button>
//                   <button onClick={() => deleteProduct(productoItem)}>
//                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
//                       <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
//                       <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
//                     </svg>Eliminar</button>
//                 </div>
//               </div>
//               <div class="modal fade " id={`${productoItem.id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                 <div class="modal-dialog modal-lg">
//                   <div class="modal-content">
//                     <div class="modal-header">
//                       <h1 class="modal-title fs-5" id="exampleModalLabel">Editar producto</h1>
//                       <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                     </div>
//                     <div class="form-container">
//                       <form onSubmit={handleSubmit}>
//                         <label htmlFor="imagen">Imagen</label>
//                         <input type="file" name="imagen" id="imagen" onChange={handleChange} placeholder='Agregue una imagen del producto' />
//                         <input type="text" name="url" id="url" placeholder="Url de la imagen" value={product.imagen} />

//                         <label htmlFor="nombre">Nombre</label>
//                         <input type="text" name="nombre" id='nombre' onChange={handleChange} value={product.nombre} placeholder='Nombre del producto' />

//                         <label htmlFor="precio">Precio</label>
//                         <input type="text" name="precio" id='precio' onChange={handleChange} value={product.precio} placeholder='Precio' />

//                         <label htmlFor="stock">Stock</label>
//                         <input type="text" name="stock" id="stock" onChange={handleChange} value={product.stock} placeholder="Cantidad en stock"/>

//                         <label htmlFor="descripcion">Descripcion</label>
//                         <textarea type="text" name="descripcion" id="descripcion" onChange={handleChange} value={product.descripcion} placeholder='Descripcion del producto' />

//                         <button onClick={() => updateProduct(productoItem.id, product)}>editar</button>
//                       </form>
//                     </div>
                    
//                   </div>
//                 </div>
//               </div>
//             </section>

//           )
//           )
//         }

//       </section>
//     </section>
//   )
// }

// export default CrudProductos