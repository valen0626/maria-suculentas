import Enlaces from "./Enlaces";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-800 text-white px-6 py-10 mt-[4rem]">
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-3 items-start">

        {/* Enlaces de navegación */}
        <div>
          <h2 className="text-lg font-semibold text-green-400 mb-3">Navegación</h2>
          <Enlaces />
        </div>

        {/* Frase o descripción */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold text-green-400 mb-3">Sobre nosotros</h2>
          <p className="text-sm text-gray-300">
            En María Suculentas cultivamos bienestar 🌿. 
            Te ofrecemos plantas que alegran, sanan y decoran tus espacios 
            de forma natural y amorosa.
          </p>
        </div>

        {/* Redes sociales */}
        <div className="text-center md:text-right">
          <h2 className="text-lg font-semibold text-green-400 mb-3">Síguenos</h2>
          <div className="flex justify-center md:justify-end gap-4 text-xl">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hover:text-green-500 transition"
            >
              <FaWhatsapp />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-pink-400 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-400 text-xs sm:text-sm">
        © 2025 María Suculentas | Medellín - Colombia
      </div>
    </footer>
  );
};

export default Footer;
