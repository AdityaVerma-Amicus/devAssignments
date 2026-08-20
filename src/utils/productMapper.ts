import type {
    Product,
    ProductApiResponse,
} from "../data/products";

export function mapApiProductToProduct(
    product: ProductApiResponse
): Product {

    return {
        image: product.thumbnail,
        name: product.title,
        price: product.price,
        sku: product.sku,
        rating: product.rating,
        category: product.category,
        isNew: product.stock > 80,
        isSale: product.discountPercentage > 12,
    };
}