import { useContext } from "react"
import { CarroContexto } from "../../context/CarroContexto"

const ConfirmarPedido = () => {
    const { carroItems, subtotal } = useContext(CarroContexto)

    const datos = {

    }

    const handleChange = (e) =>{

    }

    const handleCheckout = async (e)=>{

    }

    return (
        <div className="max-w-5xl mx-auto py-10 px-4 grid md:grid-cols-2 gap-8">
            {/* Dirección de envío */}
            <div>
                <h2 className="text-xl font-semibold mb-4">Dirección de envío</h2>
                <form onSubmit={handleCheckout} className="space-y-4">
                    <input
                        name="nombre"
                        placeholder="Nombre completo"
                        className="w-full border p-2 rounded"
                        value={datos.nombre}
                        onChange={handleChange}
                        required
                    />
                    <input
                        name="telefono"
                        placeholder="Teléfono"
                        className="w-full border p-2 rounded"
                        value={datos.telefono}
                        onChange={handleChange}
                        required
                    />
                    <input
                        name="direccion"
                        placeholder="Dirección"
                        className="w-full border p-2 rounded"
                        value={datos.direccion}
                        onChange={handleChange}
                        required
                    />
                    <input
                        name="ciudad"
                        placeholder="Ciudad"
                        className="w-full border p-2 rounded"
                        value={datos.ciudad}
                        onChange={handleChange}
                        required
                    />
                </form>
            </div>

            {/* Resumen del pedido */}
            <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold mb-4">Resumen del pedido</h2>
                <ul className="divide-y">
                    {carroItems.map((item) => (
                        <li key={item.id} className="py-2 flex justify-between">
                            <span>{item.nombre} x{item.cantidad}</span>
                            <span>${item.precio * item.cantidad}.000</span>
                        </li>
                    ))}
                </ul>
                <div className="mt-4 flex justify-between font-semibold text-lg">
                    <span>Total:</span>
                    <span>${subtotal}.000</span>
                </div>
                <button
                    onClick={handleCheckout}
                    className="mt-6 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
                >
                    Confirmar pedido
                </button>
            </div>
        </div>

    )
}

export default ConfirmarPedido