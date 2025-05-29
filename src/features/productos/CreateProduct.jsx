// import { useState, useContext } from 'react'
// import { productContext } from '../ProductContext'

// const CreateProduct = () => {
//     const { createProduct, subirImagenes, obtenerUrl } = useContext(productContext)

//     const valueInicial = {
//         imagen: '',
//         nombre: '',
//         categoria: 'selecciona',
//         precio: '',
//         descripcion: '',
//         stock: '',
//     }

//     const [product, setProduct] = useState(valueInicial)
//     const [error, setError] = useState('')
//     const [file, setFile] = useState({})
//     const [imagen, setImagen] = useState({})

//     const handleChange = async (e) => {
//         const { name, value } = e.target
//         setProduct({ ...product, [name]: value })
//         if (name === 'imagen') {
//             const file = e.target.files[0]
//             setFile(file)
//             await subirImagenes(file, file.name)
//             const urlImagen = await obtenerUrl(file, file.name)
//             setImagen(urlImagen)
//             setProduct({ ...product, ['imagen']: imagen })
//         }
//         console.log(product);
//     }

//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         try {
//             await createProduct(product)
//             setError('Producto creado con éxito..')
            
//         } catch (error) {
//             console.log(error);
//             setError(error.message)
//         }
//         setProduct({ ...valueInicial })
//     }

             
    
//     return (
//         <section className='form-container'>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="imagen">Imagen</label>
//                 <input type='file' name="imagen" id="imagen" onChange={handleChange} placeholder='Agregue una imagen del producto' required />

//                 <label htmlFor="nombre">Nombre</label>
//                 <input type="text" name="nombre" id='nombre' onChange={handleChange} value={product.nombre} placeholder='Nombre del producto' required />

//                 <label htmlFor="categoria">Categoria</label>
//                 <input list="categoria" onChange={handleChange} required />
//                     <datalist id="categoria" >
//                         <option value="mari-juana">Maria suculentas</option>
//                         <option value="cactus">Cactus</option>
//                         <option value="aloes">Aloe</option>
//                         <option value="agaves">Agave</option>
//                         <option value="productos">Echeveria</option>
//                     </datalist>
                 
//                 <label htmlFor="precio">Precio</label>
//                 <input type="text" name="precio" id='precio' onChange={handleChange} value={product.precio} placeholder='Precio' required />

//                 <label htmlFor="stock">Stock</label>
//                 <input type="text" name="stock" id="stock" onChange={handleChange} value={product.stock} placeholder="Cantidad en stock" required />

//                 <label htmlFor="descripcion">Descripcion</label>
//                 <textarea type="text" name="descripcion" id="descripcion" onChange={handleChange} value={product.descripcion} placeholder='Descripcion del producto' required />

//                 <button>Crear producto</button>
//             </form>

//         </section>
//     )
// }

// export default CreateProduct