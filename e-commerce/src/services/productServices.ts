import type { ProductApiResponse } from "../data/products";

const PRODUCTS_API_URL = "https://dummyjson.com/products/";

export interface ProductsApiResponse {
    products: ProductApiResponse[];
    total: number;
    skip: number;
    limit: number;
}

export async function fetchProducts(
    signal: AbortSignal,
    searchTerm: string = "",
    category: string = "",
    sortBy: string = "",
    order: string = "",
    limit: number = 20,
    skip: number = 0
): Promise<ProductsApiResponse> {
    let url = PRODUCTS_API_URL;

    // Determine API endpoint
    if (category) {
        url = `${PRODUCTS_API_URL}/category/${category}`;
    } else if (searchTerm.trim()) {
        url = `${PRODUCTS_API_URL}/search`;
    }

    const params = new URLSearchParams();

    // Search query
    if (!category && searchTerm.trim()) {
        params.append("q", searchTerm.trim());
    }

    // Pagination
    params.append("limit", limit.toString());
    params.append("skip", skip.toString());

    // Sorting
    if (sortBy) {
        params.append("sortBy", sortBy);
    }

    if (order) {
        params.append("order", order);
    }

    url += `?${params.toString()}`;

    const response = await fetch(url, {
        signal,
    });

    if (!response.ok) {
        throw new Error("Failed to fetch products");
    }

    const data: ProductsApiResponse = await response.json();

    return data;
}