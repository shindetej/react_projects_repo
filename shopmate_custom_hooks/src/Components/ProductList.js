import { useState } from "react";
import { useFetch } from "../Hooks/useFetch";
// import loadingGif from "../Assets/Loading.gif";

export const ProductList = () => {
  // define states
  const [url, setUrl] = useState("http://localhost:8081/products");

  // callback function :at every url change only update this function fetchProducts otherwise cache it
  const { data: products, loading, error } = useFetch(url);

  // render component in jsx
  return (
    <section>
      <div className="filter">
        <button onClick={() => setUrl("http://localhost:8081/products")}>
          Show All
        </button>
        <button
          onClick={() => setUrl("http://localhost:8085/products?inStock=true")}
        >
          In Stock Only
        </button>
      </div>
      {error ? (
        <p className="gif-container">{error}</p>
      ) : loading ? (
        <p className="gif-container">
          {/* <img src={loadingGif} alt="Loading GIF" /> */}
          Reloading Data
        </p>
      ) : (
        products &&
        products.map((product) => (
          <div className="card" key={product.id}>
            <p className="id">{product.id}</p>
            <p className="name">
              {product.name} {product.brand ? "(" + product.brand + ")" : " "}
            </p>
            <p className="info">
              <span> INR {product.price}</span>
              <span className={product.inStock ? "instock" : "unavailable"}>
                {" "}
                {product.inStock ? "IN STOCK" : "OUT OF STOCK"}
              </span>
            </p>
          </div>
        ))
      )}
    </section>
  );
};
