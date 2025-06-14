const InventarioAdmin = () => {
  const inventario = [
    { id: "1", nombre: "Suculenta jade", stock: 10 },
    { id: "2", nombre: "Cactus oreja", stock: 2 },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-green-800">Inventario</h2>

      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="text-gray-600 border-b">
            <tr>
              <th className="py-3 px-4">Producto</th>
              <th className="py-3 px-4">Stock</th>
              <th className="py-3 px-4">Estado</th>
            </tr>
          </thead>
          <tbody>
            {inventario.map((item) => (
              <tr key={item.id} className="border-b hover:bg-gray-50">
                <td className="py-2 px-4">{item.nombre}</td>
                <td className="py-2 px-4">{item.stock}</td>
                <td className="py-2 px-4">
                  {item.stock <= 3 ? (
                    <span className="text-red-600 font-semibold">Stock bajo</span>
                  ) : (
                    <span className="text-green-600">OK</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InventarioAdmin