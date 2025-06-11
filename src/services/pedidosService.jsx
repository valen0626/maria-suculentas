import { addDoc, collection, doc, Timestamp } from "firebase/firestore"
import { db } from "./firebase"

const coleccionPedidos = "pedidos"

export const crearPedido = async (dataPedido)=>{
    const colRef = collection(db, coleccionPedidos)
    const creado = await addDoc(colRef, {...dataPedido, fecha: Timestamp.now()})
    
    if (creado) {
        return{
            status: "exito",
            message: "Pedido creado con éxito"
        }
    }else{
        return{
            status: "error",
            message: "Error al crear el pedido"
        }
    }
}