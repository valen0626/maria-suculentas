import { addDoc, collection, getDocs, query, Timestamp, where } from "firebase/firestore"
import { db } from "./firebase"

const coleccionPedidos = "pedidos"

export const crearPedido = async (dataPedido) => {
    const colRef = collection(db, coleccionPedidos)
    const creado = await addDoc(colRef, { ...dataPedido, fecha: Timestamp.now() })

    if (creado) {
        return {
            status: "exito",
            message: "Pedido creado con éxito"
        }
    } else {
        return {
            status: "error",
            message: "Error al crear el pedido"
        }
    }
}

export const pedidosCliente = async (idUsuario) => {
    try {
        const colRef = collection(db, coleccionPedidos)
        const q = query(colRef, where("cliente.idCliente", "==", idUsuario))
        const snapshot = await getDocs(q)
        const pedidos = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        return pedidos
    } catch (error) {
        return {
            message: "Error trayendo pedidos"
        }
    }
}