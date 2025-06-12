import { useContext, useEffect } from "react";
import { CarroContexto } from "../../context/CarroContexto";
import { AuthContext } from "../../context/authContext";
import { getDirecciones } from "../../services/UsuarioService";
import { calcularSubtotal, calcularDescuento, calcularEnvio, calcularTotal } from "../../utils/checkoutUtils";
import { usePedido } from "../../hooks/usePedido";
import { useNotificacion } from "../../context/NotificacionContext";
import { useValidarFormulario } from "../../hooks/useValidarFormulario";
import { useNavigate } from "react-router-dom";
import { formatearCOP } from "../../utils/formatear";

const ConfirmarPedido = () => {
    const navigate = useNavigate()

    const { carroItems, vaciarCarro } = useContext(CarroContexto);
    const { usuario } = useContext(AuthContext);
    const { mostrarNotificacion } = useNotificacion();

    const camposIniciales = {
        nombre: "",
        correo: "",
        telefono: "",
        principal: "",
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
        "principal",
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
            if (resultado.direccion) {
                setFormulario({
                    ...resultado.direccion,
                    nombre: usuario.Nombres + " " + usuario.Apellidos,
                    correo: usuario.Correo,
                    telefono: usuario.Celular || "",
                });
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
            vaciarCarro()
            irAtras()
            // Vaciar carrito, redirigir, etc.
        } else {
            mostrarNotificacion("error", "Error al crear el pedido");
        }
    };

    const irAtras = () => {
        navigate(-1);
    };

    return (
        <div className="max-w-6xl mx-auto py-10 px-4 grid items-start md:grid-cols-2 gap-10">
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
                            {errores.principal && <p className="text-red-500 text-sm">{errores.principal}</p>}
                            <input
                                name="principal"
                                placeholder="Dirección principal"
                                className={`w-full border-[1px] p-2 rounded ${errores.principal ? "border-red-500" : "border-gray-300"}`}
                                value={formulario.principal}
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
                        <div className="flex w-full gap-4">
                            <div className="w-full">
                                {errores.ciudad && <p className="text-red-500 text-sm">{errores.ciudad}</p>}
                                <input
                                    name="ciudad"
                                    placeholder="Ciudad"
                                    className={`w-full border-[1px] p-2 rounded ${errores.ciudad ? "border-red-500" : "border-gray-300"}`}
                                    value={formulario.ciudad}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="w-full">
                                {errores.departamento && <p className="text-red-500 text-sm">{errores.departamento}</p>}
                                <input
                                    name="departamento"
                                    placeholder="Departamento"
                                    className={`w-full border-[1px] p-2 rounded ${errores.departamento ? "border-red-500" : "border-gray-300"}`}
                                    value={formulario.departamento}
                                    onChange={handleChange}
                                />
                            </div>
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
                        <h2 className="text-xl font-semibold mb-4">Método de pago</h2>
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
                            <span>{formatearCOP(item.precio * item.cantidad)}</span>
                        </li>
                    ))}
                </ul>
                <div className="mt-3 flex justify-between font-semibold text-lg">
                    <span>Costo de envío:</span>
                    {calcularEnvio(calcularSubtotal(carroItems) - calcularDescuento(carroItems)) === 0
                        ? "GRATIS"
                        : `${formatearCOP(calcularEnvio(calcularSubtotal(carroItems) - calcularDescuento(carroItems)))}`}
                </div>
                <div className="mt-3 flex justify-between font-semibold text-lg">
                    <span>Descuentos:</span>
                    <span>{formatearCOP(calcularDescuento(carroItems))}</span>
                </div>
                <div className="mt-3 flex justify-between font-semibold text-lg">
                    <span>Total a pagar:</span>
                    <span>{formatearCOP(calcularTotal(carroItems))}</span>
                </div>
                <button
                    onClick={handleCheckout}
                    className="mt-6 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
                >
                    Pagar ahora
                </button>
                <button
                    onClick={irAtras}
                    className="mt-6 w-full bg-gray-300 py-2 rounded hover:bg-gray-400 transition"
                >
                    Cancelar
                </button>
            </div>
        </div>
    );
};

export default ConfirmarPedido;
