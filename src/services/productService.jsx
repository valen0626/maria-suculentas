import { collection, getDocs, where, query, getDoc, doc } from "firebase/firestore";
import { db } from "./firebase";

export const obtenerProductos = async (categoria) => {
      try {
        const colRef = collection(db, "productos");
        const q = query(colRef, where("categoria", "==", categoria));
        const snapshot = await getDocs(q);
        const productosData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        return productosData
      } catch (error) {
        return {
            error: "Error al obtener productos",
            message: error.message
        }
      }
};

export const getProductById = async (id) => {
      try {
       const docRef = doc(db, "productos", id)
       const producto = await getDoc(docRef)
       if (producto.exists()) {
        return producto.data()
       }else{
        return {
            mensaje: "No se encontró el producto"
        }
       }
      } catch (error) {
        return {
            error: "Error al obtener producto",
            message: error.message
        }
      }
};