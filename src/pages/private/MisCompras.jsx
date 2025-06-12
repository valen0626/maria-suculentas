import { useEffect, useState } from "react";
import { pedidosCliente } from "../../services/pedidosService";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const MisCompras = () => {
    const { usuario } = useContext(AuthContext);
    const [pedidos, setPedidos] = useState([]);

    useEffect(() => {
        const cargarPedidos = async () => {
            if (usuario?.IdCliente) {
                const pedidosUsuario = await pedidosCliente(usuario.IdCliente);

                const pedidosOrdenados = pedidosUsuario
                    .map(p => ({
                        ...p,
                        fechaDate: new Date(p.fecha.seconds * 1000)
                    }))
                    .sort((a, b) => b.fechaDate - a.fechaDate);

                setPedidos(pedidosOrdenados);
            }
        };
        cargarPedidos();
    }, [usuario]);


    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold">Mis Compras</h1>

            {pedidos.length === 0 ? (
                <p className="text-gray-500 text-center">Aún no tienes compras registradas.</p>
            ) : (
                <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                    {pedidos.map((pedido, index) => (
                        <div
                            key={pedido.id}
                            className="border border-gray-200 rounded-2xl p-6 shadow-sm bg-white flex flex-col md:flex-row md:justify-between md:items-center gap-4"
                        >
                            {/* Info izquierda */}
                            <div>
                                <h2 className="text-lg font-semibold text-gray-800">
                                    Pedido #{String(index + 1).padStart(4, "0")}
                                </h2>
                                <p className="text-sm text-gray-500 mt-1">
                                    Fecha:{" "}
                                    <span className="font-medium text-gray-700">
                                        {pedido.fechaDate.toLocaleDateString("es-CO", {
                                            day: "2-digit",
                                            month: "long",
                                            year: "numeric",
                                        })}
                                    </span>
                                </p>
                                <p className="text-sm text-gray-500 mt-1">
                                    Estado:{" "}
                                    <span className="font-semibold text-green-600">
                                        {pedido.estado}
                                    </span>
                                </p>
                            </div>

                            {/* Info derecha */}
                            <div className="text-right">
                                <p className="text-lg font-semibold text-gray-800">
                                    {new Intl.NumberFormat("es-CO", {
                                        style: "currency",
                                        currency: "COP",
                                        minimumFractionDigits: 0,
                                    }).format(pedido.total)}
                                </p>
                                <button
                                    className="mt-3 text-sm text-blue-600 hover:underline"
                                    onClick={() => {
                                        // Aquí podrías navegar a una ruta con useNavigate
                                        console.log("Ver detalles de:", pedido.id);
                                    }}
                                >
                                    Ver detalles
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MisCompras;
