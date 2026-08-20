import { useEffect, useState } from "react";

import ProductCard from "./ProductCard/ProductCard";
import ProductCardSkeleton from "../ProductCardSkeleton/ProductCardSkeleton";
import { useProducts, PAGE_SIZE } from "../../hooks/useProducts";
import { fetchCategories } from "../../services/categoryServices";
import EmptyState from "../EmptyState/EmptyState";

import "./FeaturedParts.css";

const SORT_OPTIONS: Record<
    string,
    { sortBy: string; order: string }
> = {
    "price-low-high": {
        sortBy: "price",
        order: "asc",
    },
    "price-high-low": {
        sortBy: "price",
        order: "desc",
    },
    "name-a-z": {
        sortBy: "title",
        order: "asc",
    },
    rating: {
        sortBy: "rating",
        order: "desc",
    },
};

function FeaturedParts() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [categories, setCategories] = useState<string[]>([]);
    const [sortOption, setSortOption] = useState("default");

    const {
        products,
        loading,
        error,
        hasMore,
        currentPage,
        totalResults,
        goToPage,
        refresh,
    } = useProducts();

    const startResult =
        totalResults === 0 ? 0 : (currentPage - 1) * PAGE_SIZE + 1;

    const endResult = Math.min(currentPage * PAGE_SIZE, totalResults);

    useEffect(() => {
        const controller = new AbortController();

        const loadCategories = async () => {
            try {
                const data = await fetchCategories(controller.signal);
                setCategories(data);
            } catch (error) {
                if (
                    error instanceof DOMException &&
                    error.name === "AbortError"
                ) {
                    return;
                }

                console.error(error);
            }
        };

        loadCategories();

        return () => controller.abort();
    }, []);

    const getSortParams = () =>
        SORT_OPTIONS[sortOption] ?? {
            sortBy: "",
            order: "",
        };

    const refreshProducts = (
        search: string = searchTerm,
        category: string = selectedCategory
    ) => {
        const { sortBy, order } = getSortParams();

        refresh(
            search,
            category === "all" ? "" : category,
            sortBy,
            order
        );
    };

    return (
        <section className="featured-parts">
            <h2>FEATURED PRODUCTS</h2>

            <div className="product-controls">
                <div className="search-container">
                    <label htmlFor="product-search">Search</label>

                    <input
                        id="product-search"
                        type="text"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={(event) => {
                            const value = event.target.value;

                            setSearchTerm(value);
                            refreshProducts(value, selectedCategory);
                        }}
                    />
                </div>

                <div className="filter-control">
                    <label htmlFor="category">Category</label>

                    <select
                        id="category"
                        value={selectedCategory}
                        onChange={(event) => {
                            const category = event.target.value;

                            setSelectedCategory(category);
                            refreshProducts(searchTerm, category);
                        }}
                    >
                        <option value="all">All Categories</option>

                        {categories.map((category) => (
                            <option key={category} value={category}>
                                {category.charAt(0).toUpperCase() +
                                    category.slice(1)}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="filter-control">
                    <label htmlFor="sort">Sort By</label>

                    <select
                        id="sort"
                        value={sortOption}
                        onChange={(event) => {
                            const value = event.target.value;
                            const { sortBy, order } =
                                SORT_OPTIONS[value] ?? {
                                    sortBy: "",
                                    order: "",
                                };

                            setSortOption(value);

                            refresh(
                                searchTerm,
                                selectedCategory === "all"
                                    ? ""
                                    : selectedCategory,
                                sortBy,
                                order
                            );
                        }}
                    >
                        <option value="default">Default</option>
                        <option value="price-low-high">
                            Price: Low to High
                        </option>
                        <option value="price-high-low">
                            Price: High to Low
                        </option>
                        <option value="name-a-z">Name: A to Z</option>
                        <option value="rating">Rating</option>
                    </select>
                </div>
            </div>

            {!loading && !error && (
                <div className="results-header">
                    <p className="product-count">
                        Showing {startResult}–{endResult} of {totalResults}
                        {searchTerm && ` for "${searchTerm}"`}
                    </p>

                    <button
                        type="button"
                        className="refresh-button"
                        onClick={() =>
                            refreshProducts(
                                searchTerm,
                                selectedCategory
                            )
                        }
                    >
                        Refresh
                    </button>
                </div>
            )}

            {loading && (
                <div className="featured-parts-grid">
                    {Array.from({ length: PAGE_SIZE }).map((_, index) => (
                        <ProductCardSkeleton key={index} />
                    ))}
                </div>
            )}

            {!loading && error && (
                <div className="error-state">
                    <p>{error}</p>

                    <button
                        type="button"
                        onClick={() =>
                            refreshProducts(
                                searchTerm,
                                selectedCategory
                            )
                        }
                    >
                        Retry
                    </button>
                </div>
            )}

            {!loading && !error && products.length > 0 ? (
                <div className="featured-parts-grid">
                    {products.map((product) => (
                        <ProductCard
                            key={product.sku}
                            image={product.image}
                            name={product.name}
                            price={product.price}
                            sku={product.sku}
                            rating={product.rating}
                            isNew={product.isNew}
                            isSale={product.isSale}
                        />
                    ))}
                </div>
            ) : (
                !loading && !error && <EmptyState />
            )}

            {!loading && !error && products.length > 0 && (
                <div className="pagination">
                    <button
                        type="button"
                        disabled={currentPage === 1}
                        onClick={() => goToPage(currentPage - 1)}
                    >
                        Previous
                    </button>

                    <span>Page {currentPage}</span>

                    <button
                        type="button"
                        disabled={!hasMore}
                        onClick={() => goToPage(currentPage + 1)}
                    >
                        Next
                    </button>
                </div>
            )}
        </section>
    );
}

export default FeaturedParts;