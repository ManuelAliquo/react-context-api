import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({});
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      if (!res.data) navigate("/404");
      setProduct(res.data);
      setShowLoading(false);
    });
  }, []);

  if (showLoading)
    return (
      <div className="d-flex align-items-center">
        <h1>Loading</h1>
        <div className="ms-3 spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );

  if (product)
    return (
      <section className="detail-section">
        <div className="row d-flex align-items-center gy-3 gx-5 my-4">
          <div className="img-container col-12 col-sm-12 col-md-4 d-flex justify-content-center border rounded-4 p-3">
            <img className="img-fluid" src={product.image} alt="Product" />
          </div>
          <div className="col-12 col-sm-12 col-md-8 d-flex flex-column gap-1 mb-3">
            <h2>{product.title}</h2>
            <div>{product.category}</div>
            <div className="fs-5">{`${product.rating.rate}/5⭐ - (${product.rating.count})`}</div>
            <div className="fs-4">{product.price}$</div>
            <p>{product.description}</p>
            <button className="btn btn-danger">
              ⚠️ Buy in a totally safe and not dangerous way!!! ⚠️
            </button>
          </div>
        </div>
      </section>
    );
}
