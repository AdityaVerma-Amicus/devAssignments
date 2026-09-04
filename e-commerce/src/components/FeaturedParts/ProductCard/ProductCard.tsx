import { Star } from "lucide-react";

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
    <article className="flex h-100 w-54 shrink-0 flex-col rounded-md border border-border bg-background p-3 pb-3 shadow-sm transition-shadow duration-200 hover:shadow-lg">
      <div className="relative mb-2 flex h-30 w-full shrink-0 items-center justify-center overflow-hidden">
        <img
          src={image}
          alt={name}
          className="block h-30 w-36 max-w-full object-contain transition-transform duration-300 hover:scale-105"
        />

        {isSale && (
          <span className="absolute right-0.5 top-1.5 z-10 rounded-full bg-primary px-2 py-1 text-[8px] font-bold leading-none tracking-wide text-white shadow-sm">
            SALE
          </span>
        )}

        {isNew && (
          <span className="absolute -left-5 top-3 z-10 w-16 -rotate-45 bg-primary py-1 text-center text-[8px] font-bold leading-none tracking-tight text-white shadow-sm">
            NEW
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col items-center text-center">
        <h3 className="mb-2 min-h-10 overflow-hidden text-sm font-semibold leading-tight text-text [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
          {name}
        </h3>

        <p className="my-1.5 text-xl font-bold text-primary">
          ${price}
        </p>

        <p className="mb-2 text-xs text-text-secondary">
          SKU: {sku}
        </p>

        <div
          className="mb-3 flex min-h-5 items-center justify-center gap-1"
          aria-label={`Rating: ${rating} out of 5`}
        >
          {Array.from({ length: rating }).map((_, index) => (
            <Star
              key={index}
              size={16}
              strokeWidth={2}
              fill="currentColor"
              className="text-rating"
              aria-hidden="true"
            />
          ))}
        </div>

        <div className="mb-3 flex items-center justify-center gap-2">
          <label
            htmlFor={`quantity-${sku}`}
            className="text-sm font-bold text-text"
          >
            QTY
          </label>

          <input
            id={`quantity-${sku}`}
            type="number"
            defaultValue={1}
            min={1}
            className="w-14 rounded border border-border p-1.5 text-center text-sm outline-none transition-shadow duration-200 focus:border-primary focus:ring-2 focus:ring-primary/30"
          />
        </div>

        <button
          type="button"
          title="Click to add this product to your shopping cart"
          className="mt-auto w-full rounded border border-primary bg-primary px-4 py-2 text-sm font-bold text-white transition-all duration-200 hover:border-primary-hover hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          ADD TO CART
        </button>
      </div>
    </article>
  );
}

export default ProductCard;