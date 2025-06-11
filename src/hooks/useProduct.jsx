import { useState, useEffect } from "react";
import { getProductById } from "../features/productos/productService";

export function useProduct(id) {
  const [producto, setProducto] = useState({});
  
  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProductById(id);
      setProducto(data);
    };
    fetchProduct();
  }, [id]);

  return producto;
}
