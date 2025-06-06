function FavoritoCard({ favorito, agregarAlCarro, eliminarFavorito }) {
  return (
    <div className="group relative w-auto rounded-xl border border-transparent hover:border-gray-300 transition duration-300 overflow-hidden shadow-sm hover:shadow-md bg-white">
      <img
        src={favorito.imagen}
        alt={favorito.nombre}
        className="w-full h-[180px] object-cover rounded-t-md"
      />
      <div className="p-2 transition-all duration-300 flex flex-col items-center bg-white/90 group-hover:bg-transparent">
        <span className="text-gray-800 font-medium group-hover:hidden">{favorito.nombre}</span>
        <span className="text-green-700 text-sm font-bold group-hover:hidden">${favorito.precio}</span>
        <button
          onClick={() => agregarAlCarro(favorito, 1)}
          className="hidden group-hover:block bg-green-600 text-white font-semibold text-sm px-3 py-1 mt-1 rounded-full hover:bg-green-500 transition w-full"
        >
          Añadir al carrito
        </button>
        <button
          onClick={() => eliminarFavorito(favorito)}
          className="hidden group-hover:block text-sm text-red-600 mt-1 underline underline-offset-2 hover:text-green-600 transition"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default FavoritoCard;
