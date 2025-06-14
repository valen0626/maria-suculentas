import { Link } from "react-router-dom";

const Pagina404 = () => {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center px-6 text-center space-y-6">
      <h1 className="text-6xl font-bold text-green-700">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800">¡Uy! Página no encontrada</h2>
      <p className="text-gray-600 max-w-md">
        Lo sentimos, la página que estás buscando no existe o fue movida. 
        Revisa la dirección o vuelve al inicio.
      </p>
      <Link
        to="/"
        className="inline-block px-6 py-2 bg-green-600 text-white rounded-xl shadow hover:bg-green-700 transition"
      >
        Volver al inicio
      </Link>
    </div>
  );
};

export default Pagina404;
