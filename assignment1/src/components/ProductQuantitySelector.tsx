import { useState } from "react";
import "./ProductQuantitySelector.css";

interface ProductQuantitySelectorProps {
  productName: string;
  price: number;
  description: string;
}

function ProductQuantitySelector({
  productName,
  price,
  description,
}: ProductQuantitySelectorProps) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const totalPrice = price * quantity;

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    setQuantity((prevQuantity) => prevQuantity - 1);
  };

  const handleAddToCart = () => {
    alert(`${productName} added to cart.\nQuantity: ${quantity}`);

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1000);
  };

  return (
    <div className="product-selector">
      <h2>{productName}</h2>

      <p className="product-price">
        ₹{price}
      </p>

      <p className="product-description">
        {description}
      </p>

      <div className="quantity-selector">
        <strong>Quantity:</strong>

        <button
          onClick={handleDecrease}
          disabled={quantity === 1}
          className="quantity-button"
        >
          -
        </button>

        <span className="quantity-value">
          {quantity}
        </span>

        <button
          onClick={handleIncrease}
          disabled={quantity === 10}
          className="quantity-button"
        >
          +
        </button>
      </div>

      <p className="total-price">
        Total Price: ₹{totalPrice}
      </p>

      <button
        onClick={handleAddToCart}
        className={`add-to-cart-button ${
          added ? "added" : ""
        }`}
      >
        {added ? "ADDED TO CART" : "ADD TO CART"}
      </button>
    </div>
  );
}

export default ProductQuantitySelector;