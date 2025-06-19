import { addDoc, collection, getCountFromServer, getDocs, limit, orderBy, query, Timestamp, where } from "firebase/firestore"
import { db } from "./firebase"
import { formatearCOP } from "../utils/formatear";

const coleccionPedidos = "pedidos"
const ahora = new Date();

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

export const getTotalPedidosCount = async () => {
    try {
        const colRef = collection(db, coleccionPedidos)
        const snapshot = await getCountFromServer(colRef)
        const count = snapshot.data().count
        return count
    } catch (error) {
        return {
            error: "Error al obtener la cantidad de pedidos",
            message: error.message
        }
    }
}

export const getPedidosDelDiaCount = async () => {
    const inicioDelDia = Timestamp.fromDate(new Date(ahora.setHours(0, 0, 0, 0)));
    const finDelDia = Timestamp.fromDate(new Date(ahora.setHours(23, 59, 59, 999)));
    try {
        const colRef = collection(db, coleccionPedidos)
        const q = query(colRef, where("fecha", ">=", inicioDelDia), where("fecha", "<=", finDelDia))

        const snapshot = await getCountFromServer(q)
        const count = snapshot.data().count

        return count
    } catch (error) {
        return {
            error: "Error al obtener los pedidos del dia",
            message: error.message
        }
    }
}

export const getIngresosHoy = async () => {
    const inicioDelDia = Timestamp.fromDate(new Date(ahora.setHours(0, 0, 0, 0)));
    const finDelDia = Timestamp.fromDate(new Date(ahora.setHours(23, 59, 59, 999)));
    try {
        const colRef = collection(db, coleccionPedidos)
        const q = query(colRef, where("fecha", ">=", inicioDelDia), where("fecha", "<=", finDelDia))
        const snapshot = await getDocs(q)
        const ingresos = snapshot.docs.reduce((acum, doc) => acum + doc.data().total, 0);
        
        return formatearCOP(ingresos) 
    } catch (error) {
        return {
            error: "Error al obtener los ingresos del dia",
            message: error.message
        }
    }
}


export const getPedidosRecientes = async ()=>{
    try {
        const colRef = collection(db, coleccionPedidos)
        const q = query(colRef, orderBy("fecha", "desc"), limit(10))

        const snapshot = await getDocs(q)
        const resultado = snapshot.docs.map(doc=>({id: doc.id, ...doc.data()}))

        return {
            status: true,
            data: resultado
        }
    } catch (error) {
        return {
            status: false,
            error: "Error al obtener los pedidos recientes",
            message: error.message
        }
    }
}