import { usePaginatedProducts } from "../../hooks/usePaginatedProducts";
import { formatearCOP } from "../../utils/formatear";

const ProductosAdmin = () => {
    const { productos, fetchNext, loading, noMore } = usePaginatedProducts();

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-green-800">Gestión de Productos</h2>
                <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">
                    + Nuevo producto
                </button>
            </div>

            <div className="bg-white shadow rounded-xl overflow-x-auto">
                <table className="min-w-full text-sm text-left">
                    <thead className="text-gray-600 border-b">
                        <tr>
                            <th className="py-3 px-4">Nombre</th>
                            <th className="py-3 px-4">Precio</th>
                            <th className="py-3 px-4">Stock</th>
                            <th className="py-3 px-4">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productos.map((p) => (
                            <tr key={p.id} className="border-b hover:bg-gray-50">
                                <td className="py-2 px-4">{p.nombre}</td>
                                <td className="py-2 px-4">{formatearCOP(p.precio)}</td>
                                <td className="py-2 px-4">{p.stock}</td>
                                <td className="py-2 px-4 space-x-2">
                                    <button className="text-blue-600 hover:underline">Editar</button>
                                    <button className="text-red-600 hover:underline">Eliminar</button>
                                </td>
                            </tr>
                        ))}
                        <tr className="border-t">
                            <td colSpan={4} className="text-center py-4">
                                {!noMore ? (
                                    <button
                                        onClick={fetchNext}
                                        disabled={loading}
                                        className="px-6 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 disabled:opacity-50 transition"
                                    >
                                        {loading ? "Cargando..." : "Cargar más"}
                                    </button>
                                ) : (
                                    <span className="text-gray-500 text-sm">No hay más productos.</span>
                                )}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductosAdmin