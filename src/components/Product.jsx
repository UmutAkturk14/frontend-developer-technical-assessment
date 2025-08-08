import React from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import "./Product.css";

const dummyVariants = ["Small", "Medium", "Large"];

const Product = ({ product, addProduct }) => {
  const { id, image, title, description, price, category } = product;

  const isOutOfStock = product?.rating?.count < 1;

  const handleAddToCart = () => {
    if (!isOutOfStock) {
      toast.success("Added to cart");
      addProduct(product);
    }
  };

  return (
    <div className="product-card-container">
      <div className="product-card">
        <div className="product-image-wrapper">
          <img src={image} alt={title} className="product-image" />
        </div>
        <div className="product-info">
          <h2 className="product-title">{title}</h2>
          <p className="product-description">{description}</p>

          <div className="product-meta">
            <span className="product-price">${price.toFixed(2)}</span>
            <span className="product-category">{category}</span>
          </div>

          <label className="variant-label">Variant:</label>
          <select className="variant-select">
            {dummyVariants.map((v, idx) => (
              <option key={idx} value={v}>
                {v}
              </option>
            ))}
          </select>
        </div>

        <div className="product-actions">
          {isOutOfStock ? (
            <button className="btn-out-of-stock" disabled>
              Out of Stock
            </button>
          ) : (
            <button className="btn-add-to-cart" onClick={handleAddToCart}>
              Add to Cart
            </button>
          )}
          <Link to={`/product/${id}`} className="btn-view-details">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
