const PedidosAdmin = () => {
  const pedidos = [
    { id: "P001", cliente: "Valeria", total: 20000, estado: "Pagado" },
    { id: "P002", cliente: "Carlos", total: 15000, estado: "Pendiente" },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-green-800">Gestión de Pedidos</h2>

      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="text-gray-600 border-b">
            <tr>
              <th className="py-3 px-4">ID</th>
              <th className="py-3 px-4">Cliente</th>
              <th className="py-3 px-4">Total</th>
              <th className="py-3 px-4">Estado</th>
              <th className="py-3 px-4">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {pedidos.map((p) => (
              <tr key={p.id} className="border-b hover:bg-gray-50">
                <td className="py-2 px-4">{p.id}</td>
                <td className="py-2 px-4">{p.cliente}</td>
                <td className="py-2 px-4">${p.total}</td>
                <td className="py-2 px-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    p.estado === "Pagado" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                  }`}>
                    {p.estado}
                  </span>
                </td>
                <td className="py-2 px-4 space-x-2">
                  <button className="text-blue-600 hover:underline">Ver</button>
                  <button className="text-red-600 hover:underline">Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PedidosAdmin