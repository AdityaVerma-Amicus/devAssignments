import "./ProductCardSkeleton.css";

function ProductCardSkeleton() {
    return (
        <article className="product-skeleton">

            <div className="skeleton-image" />

            <div className="skeleton-content">

                <div className="skeleton-title" />

                <div className="skeleton-price" />

                <div className="skeleton-sku" />

                <div className="skeleton-rating" />

                <div className="skeleton-quantity" />

                <div className="skeleton-button" />

            </div>

        </article>
    );
}

export default ProductCardSkeleton;