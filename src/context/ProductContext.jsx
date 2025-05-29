// import { createContext, useState } from "react";
// import { collection, addDoc, deleteDoc, doc, getDocs, updateDoc, snapshotEqual } from "firebase/firestore";
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import { dataBase, storage } from "../config/backConfig";

// export const productContext = createContext()

// export const ProductsProvider = ({ children }) => {

//     const subirImagenes = async(file,name)=>{
//         const storageRef = ref(storage,`${name}`)
//         await uploadBytes(storageRef,file)
//     }

//     const obtenerUrl=async(file,name)=>{
//         const storageRef = ref(storage,`${name}`)
//         const urlImg = await getDownloadURL(storageRef)
//         return urlImg
//     }

//     const createProduct = (products) => {
//         const productosCollection = collection(dataBase, products.categoria)
//         addDoc(productosCollection, products)
//     }

//     const updateProduct = async (idProducto, datos)=>{
//         try {
//             await updateDoc(doc(dataBase, datos.categoria, idProducto),datos)
            
//         } catch (error) {
//             console.log(error);
//         }
        
//     }

//     const deleteProduct = async (producto) => {
//         try {
//             await deleteDoc(doc(dataBase, producto.categoria, producto.id))
//             console.log('eliminado');
//         } catch (error) {
//             console.log(error);
//         }
//     }

    
//     return (
//         <productContext.Provider value={{
//             createProduct,
//             subirImagenes,
//             updateProduct,
//             obtenerUrl,
//             deleteProduct
//         }}>
//             {children}
//         </productContext.Provider>
//     )
// }