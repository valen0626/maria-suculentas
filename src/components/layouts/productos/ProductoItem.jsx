
const ProductoItem = ({productoItem}) => {
  return (
    <section className="listaProductos">
        <section key={productoItem.nombre} className="producto">
          <img src={productoItem.imagen} alt={productoItem.nombre} />
          <a class="link" data-bs-toggle="modal" data-bs-target="#exampleModal">
            {productoItem.nombre}
          </a>
          <h5>{productoItem.precio}</h5>
        </section>
    </section>
  );
};

export default ProductoItem;
