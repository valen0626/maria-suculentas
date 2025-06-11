export function calcularSubtotal(carrito) {
  return carrito.reduce((total, item) => total + item.precio * item.cantidad, 0);
}

export function calcularDescuento(carrito) {
  const cantidadTotal = carrito.reduce((sum, item) => sum + item.cantidad, 0);
  return cantidadTotal >= 3 ? calcularSubtotal(carrito) * 0.1 : 0;
}

export function calcularEnvio(subtotal) {
  return subtotal > 80 ? 0 : 8000;
}

export function calcularTotal(carrito) {
  const subtotal = calcularSubtotal(carrito);
  const descuento = calcularDescuento(carrito);
  const envio = calcularEnvio(subtotal - descuento);
  return subtotal - descuento + envio;
}
