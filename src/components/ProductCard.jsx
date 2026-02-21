export default function ProductCard({ product }) {
  return (
    <div className="col h-100">
      <div className="product-card card h-100 d-flex flex-column">
        <img src={product.image} className="card-img-top img-fluid p-2" alt="Product Image" />
        <div className="card-body border-top">
          <h5 className="card-title mb-1">{product.title}</h5>
          <div className="card-text">
            {product.price}$ <small>- {product.rating.rate}/5⭐</small>
          </div>
        </div>
      </div>
    </div>
  );
}
