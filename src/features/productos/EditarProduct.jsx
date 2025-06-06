import React from 'react'

const EditarProduct = () => {
  return (
    <section>
        <form onSubmit={handleSubmit}>
            <label htmlFor="imagen">Imagen</label>
            <input type="file" name="imagen" id="imagen" onChange={handleChange} placeholder='Agregue una imagen del producto'/>

            <label htmlFor="nombre">Nombre</label>
            <input type="text" name="nombre" id='nombre' onChange={handleChange} placeholder='Nombre del producto'/>

            <label htmlFor="precio">Precio</label>
            <input type="text" name="precio" id='precio' onChange={handleChange} placeholder='Precio'/>

            <label htmlFor="descripcion">Descripcion</label>
            <textarea type="text" name="descripcion" id="descripcion" onChange={handleChange} placeholder='Descripcion del producto'/>

            <button>Crear producto</button>
        </form>
    </section>
  )
}

export default EditarProduct