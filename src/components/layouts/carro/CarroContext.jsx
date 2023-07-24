import { createContext, useState } from "react";

export const carroContext = createContext()

const CarroProvider = ({children})=>{
    const [listaCarro, setListaCarro] = useState([])
    return(
        <carroContext.Provider value={(listaCarro, setListaCarro)}>{children}</carroContext.Provider>
    )
} 

export default CarroProvider