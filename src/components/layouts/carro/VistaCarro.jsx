import ProductoItem from "../productos/ProductoItem";
import CarroElemento from "./CarroElemento";
import { useState, useEffect } from "react";
import { dataBase } from "../config/backConfig"
import {getDocs, collection} from 'firebase/firestore'

const VistaCarro = () => {    

  return (
    <section>
      <div className="vistaCarrito">
        <h1>Carrito de Compras</h1>
        {
            c
            // <ProductoItem key={productoItem.nombre} productoItem={productoItem}/>
        }
       
        <CarroElemento carroItems={carroItems} total={total} />
      </div>
    </section>
  );
};
export default VistaCarro;
