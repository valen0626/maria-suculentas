import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../services/firebase";
import ProductCard from "../../components/ProductCard";
import CategoryFilters from "../../components/CategoryFilters";

function ProductosPage() {
  const { categoria } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const colRef = collection(db, "productos"); // asumiendo que todos los productos están en esta colección
        const q = query(colRef, where("categoria", "==", categoria));
        const snapshot = await getDocs(q);
        const productosData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProductos(productosData);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };

    obtenerProductos();
  }, [categoria]);

  return (
      <CategoryFilters categoria={categoria.toUpperCase()}>
        <div className="listaProductos">
          {productos.map((producto) => (
            <ProductCard key={producto.id} producto={producto} />
          ))}
        </div>
      </CategoryFilters>
  );
}

export default ProductosPage;
