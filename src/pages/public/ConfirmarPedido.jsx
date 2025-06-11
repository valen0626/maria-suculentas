import { useContext, useEffect } from "react";
import { CarroContexto } from "../../context/CarroContexto";
import { AuthContext } from "../../context/authContext";
import { getDirecciones } from "../../services/UsuarioService";
import { calcularSubtotal, calcularDescuento, calcularEnvio, calcularTotal } from "../../utils/checkoutUtils";
import { usePedido } from "../../hooks/usePedido";
import { useNotificacion } from "../../context/NotificacionContext";
import { useValidarFormulario } from "../../hooks/useValidarFormulario";

const ConfirmarPedido = () => {
    const { carroItems } = useContext(CarroContexto);
    const { usuario } = useContext(AuthContext);
    const { mostrarNotificacion } = useNotificacion();

    const camposIniciales = {
        nombre: "",
        correo: "",
        telefono: "",
        direccionPrincipal: "",
        complemento: "",
        ciudad: "",
        departamento: "",
        instrucciones: "",
        metodoPago: "tarjeta",
    };

    const camposObligatorios = [
        "nombre",
        "correo",
        "telefono",
        "direccionPrincipal",
        "ciudad",
        "departamento",
        "metodoPago",
    ];

    const {
        formulario,
        errores,
        handleChange,
        validarCampos,
        setFormulario,
    } = useValidarFormulario(camposIniciales, camposObligatorios);

    const { confirmarPedido } = usePedido({
        carroItems,
        formCheckout: formulario,
        usuario,
    });

    useEffect(() => {
        const direccionesExistentes = async () => {
            const resultado = await getDirecciones(usuario.IdCliente);
            if (resultado.direcciones) {
                setFormulario(resultado.direcciones);
            } else {
                setFormulario({
                    nombre: usuario.Nombres + " " + usuario.Apellidos,
                    correo: usuario.Correo,
                    telefono: usuario.Celular || "",
                });
            }
        };
        direccionesExistentes();
    }, [usuario]);

    const handleCheckout = async (e) => {
        e.preventDefault();
        const esValido = validarCampos();
        if (!esValido) {
            mostrarNotificacion("error", "Faltan campos requeridos");
            return;
        }

        const resultado = await confirmarPedido();
        if (resultado.exito) {
            mostrarNotificacion("exito", "Pedido creado con éxito");
            // Vaciar carrito, redirigir, etc.
        } else {
            mostrarNotificacion("error", "Error al crear el pedido");
        }
    };

    return (
        <div className="max-w-5xl mx-auto py-10 px-4 grid md:grid-cols-2 gap-8">
            {/* Formulario de Checkout */}
            <div>
                <form onSubmit={handleCheckout} className="space-y-4">
                    <div className="flex flex-col gap-3">
                        <h2 className="text-xl font-semibold mb-2">Información del cliente</h2>
                        <div>
                            {errores.nombre && <p className="text-red-500 text-sm">{errores.nombre}</p>}
                            <input
                                name="nombre"
                                placeholder="Nombre completo"
                                className={`w-full border-[1px] p-2 rounded ${errores.nombre ? "border-red-500" : "border-gray-300"}`}
                                value={formulario.nombre}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            {errores.correo && <p className="text-red-500 text-sm">{errores.correo}</p>}
                            <input
                                name="correo"
                                placeholder="Correo electrónico"
                                className={`w-full border-[1px] p-2 rounded ${errores.correo ? "border-red-500" : "border-gray-300"}`}
                                value={formulario.correo}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            {errores.telefono && <p className="text-red-500 text-sm">{errores.telefono}</p>}
                            <input
                                name="telefono"
                                placeholder="Teléfono"
                                className={`w-full border-[1px] p-2 rounded ${errores.telefono ? "border-red-500" : "border-gray-300"}`}
                                value={formulario.telefono}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h2 className="text-xl font-semibold mb-2">Dirección de envío</h2>
                        <div>
                            {errores.direccionPrincipal && <p className="text-red-500 text-sm">{errores.direccionPrincipal}</p>}
                            <input
                                name="direccionPrincipal"
                                placeholder="Dirección principal"
                                className={`w-full border-[1px] p-2 rounded ${errores.direccionPrincipal ? "border-red-500" : "border-gray-300"}`}
                                value={formulario.direccionPrincipal}
                                onChange={handleChange}
                            />
                        </div>
                        <input
                            name="complemento"
                            placeholder="Complemento / apartamento / torre (opcional)"
                            className="w-full border-[1px] p-2 rounded"
                            value={formulario.complemento}
                            onChange={handleChange}
                        />
                        <div>
                            {errores.ciudad && <p className="text-red-500 text-sm">{errores.ciudad}</p>}
                            <input
                                name="ciudad"
                                placeholder="Ciudad"
                                className={`w-full border-[1px] p-2 rounded ${errores.ciudad ? "border-red-500" : "border-gray-300"}`}
                                value={formulario.ciudad}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            {errores.departamento && <p className="text-red-500 text-sm">{errores.departamento}</p>}
                            <input
                                name="departamento"
                                placeholder="Departamento"
                                className={`w-full border-[1px] p-2 rounded ${errores.departamento ? "border-red-500" : "border-gray-300"}`}
                                value={formulario.departamento}
                                onChange={handleChange}
                            />
                        </div>
                        <input
                            name="instrucciones"
                            placeholder="Instrucciones de entrega"
                            className="w-full border-[1px] p-2 rounded"
                            value={formulario.instrucciones}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-3">Método de pago</h2>
                        {errores.metodoPago && <p className="text-red-500 text-sm">{errores.metodoPago}</p>}
                        <select
                            name="metodoPago"
                            className={`w-full border-[1px] p-2 rounded ${errores.metodoPago ? "border-red-500" : "border-gray-300"}`}
                            value={formulario.metodoPago}
                            onChange={handleChange}
                        >
                            <option value="tarjeta">Tarjeta de crédito / débito</option>
                            <option value="transferencia">Transferencia / PSE</option>
                            <option value="contraentrega">Contraentrega</option>
                        </select>
                    </div>
                </form>
            </div>

            {/* Resumen del pedido */}
            <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold mb-4">Resumen del pedido</h2>
                <ul className="divide-y">
                    {carroItems.map((item) => (
                        <li key={item.id} className="py-2 flex justify-between">
                            <span>{item.nombre} x{item.cantidad}</span>
                            <span>${item.precio * item.cantidad}</span>
                        </li>
                    ))}
                </ul>
                <div className="mt-4 flex justify-between font-semibold text-lg">
                    <span>Costo de envío:</span>
                    {calcularEnvio(calcularSubtotal(carroItems) - calcularDescuento(carroItems)) === 0
                        ? "GRATIS"
                        : `$${calcularEnvio(calcularSubtotal(carroItems) - calcularDescuento(carroItems))}`}
                </div>
                <div className="mt-4 flex justify-between font-semibold text-lg">
                    <span>Descuentos:</span>
                    <span>${calcularDescuento(carroItems)}</span>
                </div>
                <div className="mt-4 flex justify-between font-semibold text-lg">
                    <span>Total a pagar:</span>
                    <span>${calcularTotal(carroItems)}</span>
                </div>
                <button
                    onClick={handleCheckout}
                    className="mt-6 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
                >
                    Pagar ahora
                </button>
            </div>
        </div>
    );
};

export default ConfirmarPedido;
