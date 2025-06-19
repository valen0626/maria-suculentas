import { useSearchParams } from "react-router-dom";
import { useContext, useEffect, useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import CategoryFilters from "../../components/CategoryFilters";
import { obtenerProductos } from "../../services/productService";
import { CarroContexto } from "../../context/CarroContexto";

function ProductosPage() {
  const [productos, setProductos] = useState([]);
  const [filtrados, setFiltrados] = useState([]);
  const [loading, setLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const { favoritos } = useContext(CarroContexto);

  const categoriasParam = useMemo(() => searchParams.getAll("categoria"), [searchParams]);
  const ordenParam = searchParams.get("orden") || "";
  const favoritosParam = searchParams.get("favoritos") === "true";

  useEffect(() => {
    if (!categoriasParam || categoriasParam.length === 0) {
      setProductos([]);
      return;
    }

    const cargarProductos = async () => {
      try {
        setLoading(true);

        const resultadosPorCategoria = await Promise.all(
          categoriasParam.map((cat) => obtenerProductos(cat))
        );

        const allProductos = resultadosPorCategoria.flat();

        const productosConStock = allProductos.map((p) => ({
          ...p,
          stock: p.stock != null ? Number(p.stock) : 0
        }));

        const productosUnicos = Array.from(
          new Map(productosConStock.map((p) => [p.id, p])).values()
        );

        setProductos(productosUnicos);
      } catch {
        setProductos([]);
      } finally {
        setLoading(false);
      }
    };

    cargarProductos();
  }, [categoriasParam]);

  useEffect(() => {
    let lista = [...productos];

    if (favoritosParam) {
      lista = lista.filter((p) => favoritos.includes(p.nombre));
    }

    if (ordenParam === "precioAsc") {
      lista.sort((a, b) => a.precio - b.precio);
    } else if (ordenParam === "precioDesc") {
      lista.sort((a, b) => b.precio - a.precio);
    } else if (ordenParam === "nombreAsc") {
      lista.sort((a, b) => a.nombre.localeCompare(b.nombre));
    } else if (ordenParam === "nombreDesc") {
      lista.sort((a, b) => b.nombre.localeCompare(a.nombre));
    }

    setFiltrados(lista);
  }, [productos, ordenParam, favoritosParam, favoritos]);

  const handleFilterChange = (categoriasSeleccionadas) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.delete("categoria");
    categoriasSeleccionadas.forEach((cat) => newParams.append("categoria", cat));
    setSearchParams(newParams);
  };

  const handleSortChange = (nuevoOrden) => {
    const newParams = new URLSearchParams(searchParams);
    if (nuevoOrden) {
      newParams.set("orden", nuevoOrden);
    } else {
      newParams.delete("orden");
    }
    setSearchParams(newParams);
  };

  return (
    <div className="flex w-full flex-col md:flex-row min-h-screen">
      <CategoryFilters
        categoriasSeleccionadas={categoriasParam}
        onFilterChange={handleFilterChange}
        ordenSeleccionado={ordenParam}
        onSortChange={handleSortChange}
      />

      <main className="flex-1 p-8">
        {loading ? (
          <p className="text-gray-500 text-center mt-10">Cargando productos...</p>
        ) : filtrados.length === 0 ? (
          <p className="text-gray-500 text-center mt-10">No se encontraron productos.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6 items-center">
            {filtrados.map((producto) => (
              <ProductCard key={producto.id} producto={producto} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default ProductosPage;
