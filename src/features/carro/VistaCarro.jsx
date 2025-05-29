import { CarroContexto } from "../../context/CarroContexto";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'


const VistaCarro = ({ open, setOpen }) => {
  const {
    carroItems,
    eliminarProducto,
    obtenerCantidad,
  } = useContext(CarroContexto);

  const cambioCantidad = (itemNombre, nuevaCantidad) => {
    obtenerCantidad(itemNombre, nuevaCantidad);
  };

  const calcularTotal = () => {
    return carroItems.reduce((total, item) => total + parseInt(item.precio) * item.cantidad, 0);
  };

  return (
    <>
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
            >
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-5">
                  <div className="flex items-start justify-between">
                    <DialogTitle className="text-lg font-medium text-gray-900">Carro de compras</DialogTitle>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                      >
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Cerrar panel</span>
                        X
                      </button>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="flow-root">
                      <ul role="list" className="-my-8 divide-y divide-gray-200">
                        {carroItems.map((product) => (
                          <li key={product.id} className="flex py-3">
                            <div className="size-20 shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img alt={product.imagen} src={product.imagen} className="size-full object-cover" />
                            </div>

                            <div className="ml-4 flex flex-1 flex-col">
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                  <h3>
                                    <a href={product.href}>{product.nombre}</a>
                                  </h3>
                                  <p className="ml-4">{product.precio}</p>
                                </div>
                              </div>
                              <div className="flex flex-1 items-end justify-between text-sm">
                                <p className="text-gray-500">Cantidad {product.cantidad}</p>

                                <div className="flex">
                                  <button type="button" onClick={() => eliminarProducto(product.nombre)} className="font-medium text-green-600 hover:text-green-700">
                                    Eliminar
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>${calcularTotal()}.000</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">Los gastos de envío e impuestos se calculan al finalizar la compra.</p>
                  <div className="mt-6">
                    <Link to={'/formulariocompra'} className="primary-button flex items-center justify-center px-6 py-3 shadow-sm" type="button" >Pagar</Link>
                  </div>
                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                      o{' '}
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="font-medium text-green-600 hover:text-green-700"
                      >
                        Continuar comprando
                        <span aria-hidden="true"> &rarr;</span>
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>


      {/* <section className="contenedorimg">
        <img src="./public/img/fondo inicio.jpg" alt="" className="imagenCarro"/>
        <h1>Carro de compras</h1>
      </section>
      <section className="vistaCarrito">
        
        <section className="listaCarro">
          <table>
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {carroItems.map((item) => (
                <tr key={item.nombre}>
                  <td>
                  <svg onClick={() => eliminarProducto(item.nombre)} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
</svg>
                  </td>
                  <td>
                    <img src={item.imagen} alt="" />
                  </td>
                  <td>{item.nombre}</td>
                  <td>${item.precio}</td>
                  <td>
                    <input
                      className="cantidad"
                      type="number"
                      placeholder="Cantidad"
                      // onChange={(e) => setCantidad(parseInt(e.target.value))}
                      onChange={(e) => cambioCantidad(item.nombre, parseInt(e.target.value))}
                      value={item.cantidad}
                    ></input>
                  </td>
                  <td>
                    ${item.cantidad*parseInt(item.precio)}.000</td>
                </tr>
              ))}
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><p>Total: </p></td>
                <td><p>${calcularTotal()}.000</p></td>
              </tr>
            </tbody>
          </table>
          <Link to={'/formulariocompra'} className="btnCarro" type="button" >Realizar compra</Link>
        </section>
      </section> */}
    </>  
  );
};
export default VistaCarro;
