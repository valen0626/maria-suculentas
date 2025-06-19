import { useState, useEffect } from "react";
import { getFirstPageProducts, getNextPageProducts } from "../services/productService";

export function usePaginatedProducts() {
  const [productos, setProductos] = useState([]);
  const [lastDoc, setLastDoc] = useState(null);
  const [loading, setLoading] = useState(true);
  const [noMore, setNoMore] = useState(false);

  useEffect(() => {
    async function fetchFirst() {
      setLoading(true);
      const { productos, lastDoc } = await getFirstPageProducts();
      setProductos(productos);
      setLastDoc(lastDoc);
      setLoading(false);
    }

    fetchFirst();
  }, []);

  const fetchNext = async () => {
    if (!lastDoc || noMore) return;

    setLoading(true);
    const { productos: nextProducts, lastDoc: newLastDoc } = await getNextPageProducts(lastDoc);
    if (nextProducts.length === 0) setNoMore(true);

    setProductos(prev => [...prev, ...nextProducts]);
    setLastDoc(newLastDoc);
    setLoading(false);
  };

  return { productos, fetchNext, loading, noMore };
}
