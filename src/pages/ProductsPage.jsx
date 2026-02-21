import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ProductCard from "../components/ProductCard";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [showLoading, setShowLoading] = useState(true);

  // chiamata per prodotti
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data);
      setShowLoading(false);
    });
  }, []);

  // condizionale per loading
  return showLoading ? (
    <div className="d-flex align-items-center">
      <h1>Loading</h1>
      <div className="ms-3 spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  ) : (
    <>
      <h1 className="mb-4">Products</h1>
      <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-4">
        {products.map((product) => {
          return (
            <Link to={"/products/" + product.id} className="text-decoration-none" key={product.id}>
              <ProductCard product={product} className="product-card" />
            </Link>
          );
        })}
      </div>
    </>
  );
}
