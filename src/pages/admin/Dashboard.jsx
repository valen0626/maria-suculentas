import { useEffect, useState } from "react";
import { useCounts } from "../../hooks/useCounts";
import { getPedidosRecientes } from "../../services/pedidosService";
import { formatearCOP } from "../../utils/formatear";

const Dashboard = () => {
  const stats = useCounts();
  const [pedidosRecientes, setPedidosRecientes] = useState([]);

  useEffect(() => {
    const getPedidos = async () => {
      const respuesta = await getPedidosRecientes();
      if (respuesta.status) {
        const pedidos = respuesta.data
          .map(p => ({
            ...p,
            fechaDate: new Date(p.fecha.seconds * 1000)
          }))
        setPedidosRecientes(pedidos);
      }
    };

    getPedidos();
  }, []);

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-green-800">
        Dashboard de Administración
      </h1>

      {/* Tarjetas resumen */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card titulo="Productos" valor={stats.productos} />
        <Card titulo="Pedidos del día" valor={stats.ventasHoy} />
        <Card titulo="Pedidos totales" valor={stats.pedidos} />
        <Card titulo="Ingresos hoy" valor={stats.ingresosHoy} />
      </div>

      {/* Pedidos recientes */}
      <section className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Pedidos recientes</h2>
        <div className="overflow-x-auto">
          {pedidosRecientes.length == 0 ? (
            <h1 className="text-center">No hay pedidos para mostrar</h1>
          ) : (
            <table className="min-w-full table-auto text-left text-sm">
              <thead className="text-gray-500 border-b">
                <tr>
                  <th className="py-2 px-4">ID</th>
                  <th className="py-2 px-4">Cliente</th>
                  <th className="py-2 px-4">Fecha</th>
                  <th className="py-2 px-4">Total</th>
                  <th className="py-2 px-4">Estado</th>
                </tr>
              </thead>
              <tbody>
                {pedidosRecientes.map((pedido) => (
                  <tr
                    key={pedido.id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="py-2 px-4">{pedido.id}</td>
                    <td className="py-2 px-4">{pedido.cliente.nombreCliente}</td>
                    <td className="py-2 px-4">{pedido.fechaDate.toLocaleDateString("es-CO", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })}</td>
                    <td className="py-2 px-4">{formatearCOP(pedido.total)}</td>
                    <td className="py-2 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${pedido.estado === "Pagado"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                          }`}
                      >
                        {pedido.estado}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </section>
    </div>
  );
};

const Card = ({ titulo, valor }) => (
  <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-2">
    <h3 className="text-sm text-gray-500">{titulo}</h3>
    <p className="text-2xl font-bold text-green-700">{valor}</p>
  </div>
);

export default Dashboard;
