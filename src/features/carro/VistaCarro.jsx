import { useContext } from "react";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { CarroContexto } from "../../context/CarroContexto";

const VistaCarro = ({ open, setOpen }) => {
  const {
    carroItems,
    quitarDelCarro,
    actualizarCantidad,
    obtenerCantidad,
  } = useContext(CarroContexto);

  const calcularTotal = () =>
    carroItems.reduce(
      (total, item) => total + parseInt(item.precio) * item.cantidad,
      0
    );

  const cambioCantidad = (nombre, nuevaCantidad) => {
    obtenerCantidad(nombre, nuevaCantidad);
  };

  return (
    <Dialog open={open} onClose={setOpen} className="fixed z-[60]">
      <DialogBackdrop className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0" />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700 bg-white shadow-xl flex flex-col h-full">
              {/* Header */}
              <div className="flex items-start justify-between p-4 sm:px-5">
                <DialogTitle className="text-lg font-medium text-gray-900">
                  Carro de compras
                </DialogTitle>
                <button
                  onClick={() => setOpen(false)}
                  className="text-gray-400 hover:text-gray-500 p-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>

                </button>
              </div>

              {/* Lista de productos */}
              <div className="flex-1 overflow-y-auto px-4 py-2 sm:px-5">
                <ul role="list" className="-my-8 divide-y divide-gray-200">
                  {carroItems.map((item) => (
                    <li key={item.id} className="flex gap-4 py-4">
                      {/* Imagen del producto */}
                      <div className="w-20 h-20 shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          src={item.imagen}
                          alt={item.nombre}
                          className="object-cover w-full h-full"
                        />
                      </div>

                      {/* Detalles del producto */}
                      <div className="flex flex-col flex-1 justify-between">
                        {/* Nombre y precio */}
                        <div className="flex justify-between items-start">
                          <p className="text-base font-medium text-gray-900 max-w-[60%] break-words">
                            {item.nombre}
                          </p>
                          <p className="text-base font-medium text-gray-900">${item.precio}</p>
                        </div>

                        {/* Controles */}
                        <div className="flex items-center mt-2">
                          <div className="flex border rounded-xl overflow-hidden w-fit">
                            <button
                              className="w-7 h-7 text-gray-800 hover:bg-gray-200"
                              onClick={() =>
                                actualizarCantidad(item.id, Math.max(item.cantidad - 1, 1))
                              }
                            >
                              −
                            </button>
                            <input
                              type="number"
                              min="1"
                              value={item.cantidad}
                              onChange={(e) => {
                                const nueva = parseInt(e.target.value);
                                if (nueva >= 1) actualizarCantidad(item.nombre, nueva);
                              }}
                              className="w-10 text-center appearance-none no-spinner focus:outline-none"
                            />
                            <button
                              className="w-7 h-7 text-gray-800 hover:bg-gray-200"
                              onClick={() =>
                                actualizarCantidad(item.nombre, item.cantidad + 1)
                              }
                            >
                              +
                            </button>
                          </div>

                          <button
                            onClick={() => quitarDelCarro(item.nombre)}
                            className="ml-4 text-green-600 text-sm hover:text-green-700"
                          >
                            Eliminar
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer */}
              <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Subtotal</p>
                  <p>${calcularTotal()}.000</p>
                </div>
                <p className="mt-1 text-sm text-gray-500">
                  Los gastos de envío e impuestos se calculan al finalizar la
                  compra.
                </p>

                <div className="mt-6">
                  <Link
                    to="/formulariocompra"
                    className="flex justify-center items-center px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-medium rounded-md shadow"
                  >
                    Pagar
                  </Link>
                </div>

                <div className="mt-6 text-center text-sm text-gray-500">
                  <button
                    onClick={() => setOpen(false)}
                    className="text-green-600 hover:text-green-700 font-medium"
                  >
                    Continuar comprando<span> →</span>
                  </button>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default VistaCarro;
