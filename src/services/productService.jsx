import { collection, getDocs, where, query, getDoc, doc, getCountFromServer, orderBy, startAfter, limit, updateDoc } from "firebase/firestore";
import { db } from "./firebase";

const coleccionProductos = "productos"

export const obtenerProductos = async (categoria) => {
  try {
    const colRef = collection(db, coleccionProductos);
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
    const docRef = doc(db, coleccionProductos, id)
    const producto = await getDoc(docRef)
    if (producto.exists()) {
      return producto.data()
    } else {
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

export const getTotalProductos = async () => {
  try {
    const colRef = collection(db, coleccionProductos)
    const snapshot = await getCountFromServer(colRef)
    const count = snapshot.data().count
    return count
  } catch (error) {
    return {
      error: "Error al obtener la cantidad de productos",
      message: error.message
    }
  }
}

const pageSize = 10;

export const getFirstPageProducts = async () => {
  try {
    const q = query(
      collection(db, coleccionProductos),
      orderBy("nombre"),
      limit(pageSize)
    );

    const snapshot = await getDocs(q);
    const lastDoc = snapshot.docs[snapshot.docs.length - 1];

    return {
      productos: snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })),
      lastDoc,
    };
  } catch (error) {
    return {
      error: "Error al obtener los productos",
      message: error.message
    }
  }

};


export const getNextPageProducts = async (lastVisible) => {
  try {
    const q = query(
      collection(db, "productos"),
      orderBy("nombre"),
      startAfter(lastVisible),
      limit(pageSize)
    );

    const snapshot = await getDocs(q);
    const lastDoc = snapshot.docs[snapshot.docs.length - 1];

    return {
      productos: snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })),
      lastDoc,
    };
  } catch (error) {
    return {
      error: "Error al obtener los productos",
      message: error.message
    }
  }

};

export const updateStock = async (productos) => {
  try {
    for (const producto of productos) {
      const prodRef = doc(db, coleccionProductos, producto.id)
      const docSnap = await getDoc(prodRef)
      if (!docSnap.exists()) {
        console.warn(`⚠️ Producto con ID ${producto.id} no existe`);
        continue;
      }

      const data = docSnap.data();
      const stockActual = data.stock ?? 0;
      const nuevoStock = Math.max(0,Number(stockActual) - producto.cantidad)

      await updateDoc(docRef, {
        stock: nuevoStock,
      });

      return {
        status: true,
        message: "El stock se actualizo"
      }
    }
  } catch (error) {
    return {
      status: false,
      error: "Error al actualizar stock",
      message: error.message
    }
  }
}