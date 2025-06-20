import { calcularSubtotal, calcularDescuento, calcularEnvio, calcularTotal } from "../utils/checkoutUtils";
import { crearPedido } from "../services/pedidosService";
import { guardarDireccion } from "../services/UsuarioService";
import { updateStock } from "../services/productService";

export const usePedido = ({ carroItems, formCheckout, usuario }) => {

    const prepararPedido = () => {
        const subtotal = calcularSubtotal(carroItems);
        const descuento = calcularDescuento(carroItems);
        const envio = calcularEnvio(subtotal - descuento);
        const total = calcularTotal(carroItems);

        return {
            cliente: {
                idCliente: usuario.IdCliente,
                nombreCliente: formCheckout.nombre,
                correo: formCheckout.correo,
                telefono: formCheckout.telefono,
            },
            direccion: {
                principal: formCheckout.principal,
                complemento: formCheckout.complemento,
                ciudad: formCheckout.ciudad,
                departamento: formCheckout.departamento,
                instrucciones: formCheckout.instrucciones,
            },
            productos: carroItems.map((item) => ({
                id: item.id,
                nombre: item.nombre,
                cantidad: item.cantidad,
                precio: item.precio,
            })),
            subtotal,
            descuento,
            envio,
            total,
            metodoPago: formCheckout.metodoPago,
            estado: "pendiente",
        };
    };

    const confirmarPedido = async () => {
        const pedido = prepararPedido();
        try {
            const respuesta = await crearPedido(pedido);
            await guardarDireccion(usuario.IdCliente, pedido.direccion);
            await updateStock(pedido.productos)
            return { exito: true, pedido: respuesta };
        } catch (error) {
            console.error("Error al crear el pedido:", error);
            return { exito: false, error };
        }
    };

    return { confirmarPedido };
};
