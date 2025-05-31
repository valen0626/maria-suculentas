import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import CategoryFilters from "../../components/CategoryFilters";
import { obtenerProductos } from "../../services/productService"

function ProductosPage() {
  const { categoria } = useParams();
  const [productos, setProductos] = useState([]);

  const listaProductos = async () => {
    const productosData = await obtenerProductos(categoria)
    setProductos(productosData);
  }

  useEffect(() => {
    listaProductos()
  }, [categoria]);

  return (
    <CategoryFilters categoria={categoria.toUpperCase()}>
      <div className="grid grid-cols-3 gap-4 md:grid-cols-4">
        {productos.map((producto) => (
            <ProductCard key={producto.id} producto={producto} />
        ))}
      </div>
    </CategoryFilters>
  );
}

export default ProductosPage;
