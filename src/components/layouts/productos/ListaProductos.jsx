import { dataBase } from "../config/backConfig"
import { getDocs, collection } from 'firebase/firestore'
import { useEffect, useState } from "react"

 const [listaProductos, setListaProductos] = useState([])
const mostrarLista = async () => {
    const productosCollection = collection(dataBase, 'productos')
    const data = await getDocs(productosCollection)
    setListaProductos(data.docs.map((doc) => ({ ...doc.data() })))
    console.log(data.docs.map((doc) => ({ ...doc.data() })));
}
useEffect(() => {
    mostrarLista()
}, [])

 