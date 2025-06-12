import { motion } from 'framer-motion';
import Carruselinicio from '../../components/Carrusel/Carruselinicio';

const Inicio = () => {
  return (
    <div className="w-full space-y-12 px-4">
      {/* Hero de bienvenida con imagen al lado */}
      <section className="flex flex-col-reverse md:flex-row items-center gap-6 bg-white p-4 rounded-xl shadow-xl">
        {/* Texto */}
        <motion.div
          className="flex-1 text-center md:text-left space-y-2"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-2xl md:text-3xl font-bold text-green-700">
            Bienvenido a nuestra tienda de suculentas
          </h1>
          <p className="text-base text-gray-700 font-medium">
            Plantas que alegran y sanan tu espacio 🌱
          </p>
        </motion.div>

        {/* Imagen */}
        <motion.img
          src="/img/fondo inicio.jpg"
          alt="Suculentas"
          className="flex-1 max-w-xs md:max-w-sm object-contain"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        />
      </section>


      {/* Descripción adicional */}
      <motion.div
        className="max-w-3xl mx-auto text-center space-y-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold text-green-700">
          Cuidado fácil, belleza duradera
        </h2>
        <p className="text-base text-gray-700">
          “Las suculentas no necesitan un riego diario gracias a su capacidad para almacenar agua en sus hojas, tallos y raíces. Son ideales para quienes aman las plantas, pero no tienen tiempo de cuidarlas a diario.”
        </p>
      </motion.div>

      {/* Carrusel de productos */}
      <motion.section
        className="text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Nuestros productos 100% naturales
        </h2>
        <div className="max-w-4xl mx-auto">
          <Carruselinicio />
        </div>
      </motion.section>
    </div>
  );
};

export default Inicio;
