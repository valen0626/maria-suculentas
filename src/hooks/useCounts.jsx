import { useEffect, useState } from "react";
import { getTotalPedidosCount } from "../services/pedidosService";
import { getTotalProductos } from "../services/productService";

export function useCounts() {
    const [stats, setStats] = useState({
        productos: 0,
        pedidos: 0,
        ventasHoy: 0,
        ingresosHoy: 0,
    });

    useEffect(() => {
        async function fetchStats() {
            const productosCount = await getTotalProductos()
            const pedidosCount = await getTotalPedidosCount();

            setStats({
                productos: productosCount,
                pedidos: pedidosCount,
                ventasHoy: 0,
                ingresosHoy: 0,
            });
            console.log(stats)
        }

        fetchStats();
    }, []);

    return stats;
}
