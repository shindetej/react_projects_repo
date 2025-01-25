import { useCallback, useEffect, useState } from "react";

export const ProductList = () => {
  // define states
  const [products, setProducts] = useState([]);

  const [url, setUrl] = useState("http://localhost:8081/products");

  // callback function :at every url change only update this function fetchProducts otherwise cache it
  const fetchProducts = useCallback(async () => {
    const response = await fetch(url);
    const data = await response.json();
    setProducts(data);
  }, [url]);

  // useEffect
  useEffect(() => {
    fetchProducts();
    console.log("check -");
  }, [fetchProducts]); // for dependency above callback function used

  // render component in jsx
  return (
    <section>
      <div className="filter">
        <button onClick={() => setUrl("http://localhost:8081/products")}>
          Show All
        </button>
        <button
          onClick={() => setUrl("http://localhost:8081/products?inStock=true")}
        >
          In Stock Only
        </button>
      </div>

      {products.map((product) => (
        <div className="card" key={product.id}>
          <p className="id">{product.id}</p>
          <p className="name">{product.name} {product.brand ? "("+product.brand+")" : " "}</p>
          <p className="info">
            <span> INR {product.price}</span>
            <span className={product.inStock ? "instock" : "unavailable"}> {product.inStock ? "IN STOCK"  : "OUT OF STOCK"}</span>
          </p>
        </div>
      ))}
    </section>
  );
};
