import "./ProductCard.css";

interface ProductCardProps {
    image: string;
    name: string;
    price: number;
    sku: string;
    rating: number;
    isNew: boolean;
    isSale: boolean;
}

function ProductCard({
    image,
    name,
    price,
    sku,
    rating,
    isNew,
    isSale,
}: ProductCardProps) {
    return (
        <article className="product-card">
            <div className="product-image">
                <img src={image} alt={name} />

                {isSale && (
                    <span className="product-badge sale-badge">
                        SALE
                    </span>
                )}

                {isNew && (
                    <span className="product-badge new-badge">
                        NEW
                    </span>
                )}
            </div>

            <div className="product-content">
                <h3>{name}</h3>

                <p className="product-price">
                    ₹{price}
                </p>

                <p className="product-sku">
                    SKU: {sku}
                </p>

                <p className="product-rating">
                    {"⭐".repeat(rating)}
                </p>

                <div className="product-quantity">
                    <label htmlFor={`quantity-${sku}`}>
                        QTY
                    </label>

                    <input
                        id={`quantity-${sku}`}
                        type="number"
                        defaultValue={1}
                        min={1}
                    />
                </div>

                <button
                    type="button"
                    title="Click to add this product to your shopping cart"
                >
                    ADD TO CART
                </button>
            </div>
        </article>
    );
}

export default ProductCard;