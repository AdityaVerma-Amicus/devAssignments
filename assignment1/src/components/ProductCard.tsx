

interface ProductCardProps {
  image: string;
  name: string;
  price: number;
  sku: string;
  rating: number;
}

function ProductCard({
  image,
  name,
  price,
  sku,
  rating,
}: ProductCardProps) {
  return (
    <div
      style={{
        width: "250px",
        boxSizing: "border-box",
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        textAlign: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
      }}
    >
      {/* Product Image */}
      <img
        src={image}
        alt={name}
        style={{
          width: "180px",
          height: "180px",
          objectFit: "cover",
          marginBottom: "12px",
        }}
      />

      {/* Product Name */}
      <h2
        style={{
          fontSize: "20px",
          color: "#333333",
          marginBottom: "10px",
        }}
      >
        {name}
      </h2>

      {/* Price */}
      <p
        style={{
          color: "#FF6600",
          fontSize: "22px",
          fontWeight: "bold",
          margin: "8px 0",
        }}
      >
        ₹{price}
      </p>

      {/* SKU */}
      <p
        style={{
          color: "#666",
          marginBottom: "8px",
        }}
      >
        SKU: {sku}
      </p>

      {/* Rating */}
      <p
        style={{
          marginBottom: "15px",
          fontSize: "18px",
        }}
      >
        {"⭐".repeat(rating)}
      </p>

      {/* Quantity */}
      <div
        style={{
          marginBottom: "15px",
        }}
      >
        <label
          style={{
            marginRight: "8px",
            fontWeight: "bold",
          }}
        >
          QTY
        </label>

        <input
          type="number"
          defaultValue={1}
          min={1}
          style={{
            width: "60px",
            padding: "6px",
            textAlign: "center",
          }}
        />
      </div>

      {/* Button */}
      <button
        title="Click to add this product to your shopping cart"
        style={{
          backgroundColor: "#FF6600",
          color: "white",
          border: "none",
          padding: "10px 20px",
          cursor: "pointer",
          borderRadius: "5px",
          fontWeight: "bold",
          width: "100%",
        }}
      >
        ADD TO CART
      </button>
    </div>
  );
}

export default ProductCard;