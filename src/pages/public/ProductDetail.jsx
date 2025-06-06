import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "../../hooks/useProduct";
import { CarroContexto } from "../../context/CarroContexto";

const ProductDetail = () => {
  const {
    agregarAlCarro,
    carroItems,
    marcarFavorito,
    favoritos,
    eliminarFavorito,
  } = useContext(CarroContexto);
  const { id } = useParams();
  const producto = useProduct(id);
  const [ cantidad, setCantidad] = useState(1)

  return (
    <>
      <main className="p-5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="max-h-[500px] object-contain"
            />
          </div>
          <div className="space-y-6">
            <h1 className="text-3xl font-semibold">{producto.nombre}</h1>
            <span className="text-xl font-semibold text-green-600">
              ${producto.precio}
            </span>
            <p className="text-gray-600">{producto.descripcion}</p>

            <span className="font-semibold">Tamaño:</span>
            <div className="flex gap-2">
              <button className="px-5 py-1 text-sm border rounded-full bg-gray-100 focus:bg-green-100 focus:text-green-800 font-medium">
                10cm
              </button>
              <button className="px-5 py-1 text-sm border rounded-full bg-gray-100 focus:bg-green-100 focus:text-green-800 font-medium">
                20cm
              </button>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex border rounded-xl overflow-hidden">
                <button onClick={()=> disminuir(producto.nombre)} className="w-7 h-7 text-gray-800 hover:bg-gray-200">−</button>
                <input
                  id="contador"
                  type="number"
                  min="1"
                  value={cantidad}
                  onChange={e => {
                    const value = parseInt(e.target.value, 10);
                    if (!isNaN(value) && value > 0) obtenerCantidad(producto.nombre, value);
                  }}
                  className="w-5 text-center focus:outline-none appearance-none no-spinner" />
                <button onClick={()=> aumentar(producto.nombre)} className="w-7 h-7 text-gray-800 hover:bg-gray-200">+</button>
              </div>
              <button
                onClick={() => agregarAlCarro(producto, cantidad)}
                className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-500 transition"
              >
                Añadir al carro
              </button>

              {favoritos.some((item) => item.nombre === producto.nombre) ? (
                <i
                  className="bi bi-heart-fill"
                  style={{ color: "red", fontSize: "25px" }}
                  onClick={() => eliminarFavorito(producto)}
                ></i>
              ) : (
                <i
                  className="bi bi-heart"
                  style={{ fontSize: "25px" }}
                  onClick={() => marcarFavorito(producto)}
                ></i>
              )}
            </div>
            <div></div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProductDetail;
