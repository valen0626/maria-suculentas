const UsuariosAdmin = () => {
  const usuarios = [
    { id: "U1", nombre: "Laura Méndez", email: "laura@gmail.com" },
    { id: "U2", nombre: "Diego Ortiz", email: "diego@gmail.com" },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-green-800">Usuarios Registrados</h2>

      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="text-gray-600 border-b">
            <tr>
              <th className="py-3 px-4">Nombre</th>
              <th className="py-3 px-4">Correo</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((u) => (
              <tr key={u.id} className="border-b hover:bg-gray-50">
                <td className="py-2 px-4">{u.nombre}</td>
                <td className="py-2 px-4">{u.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsuariosAdmin