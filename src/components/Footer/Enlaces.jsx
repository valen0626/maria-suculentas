import { Link } from 'react-router-dom';

const Enlaces = () => {
  return (
   
      <ul className="flex flex-col gap-2 text-sm">
        <li>
          <Link to="/" className="hover:text-green-300 transition">
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/productos?categoria=agaves" className="hover:text-green-300 transition">
            Productos
          </Link>
        </li>
        <li>
          <Link to="/registrar" className="hover:text-green-300 transition">
            Registrate
          </Link>
        </li>
        <li>
          <Link to="/contacto" className="hover:text-green-300 transition">
            Contacto
          </Link>
        </li>
      </ul>
   
  );
};

export default Enlaces;
