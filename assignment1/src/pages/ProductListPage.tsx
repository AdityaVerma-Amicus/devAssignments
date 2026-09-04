import { useState } from "react";
import Button, {
  ButtonVariant,
  ButtonSize,
} from "../components/Button";
import ProductCard from "../components/ProductCard";
import "./ProductListPage.css";

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 75000,
    category: "Electronics",
    image: "https://placehold.co/200x200",
    rating: 4.5,
    sku: "ELEC-001",
  },
  {
    id: 2,
    name: "Headphones",
    price: 3000,
    category: "Electronics",
    image: "https://placehold.co/200x200",
    rating: 4.2,
    sku: "ELEC-002",
  },
  {
    id: 3,
    name: "T-Shirt",
    price: 999,
    category: "Clothing",
    image: "https://placehold.co/200x200",
    rating: 4.0,
    sku: "CLTH-001",
  },
  {
    id: 4,
    name: "Jeans",
    price: 1999,
    category: "Clothing",
    image: "https://placehold.co/200x200",
    rating: 4.3,
    sku: "CLTH-002",
  },
  {
    id: 5,
    name: "Coffee Maker",
    price: 4500,
    category: "Home & Garden",
    image: "https://placehold.co/200x200",
    rating: 4.4,
    sku: "HOME-001",
  },
  {
    id: 6,
    name: "Table Lamp",
    price: 1500,
    category: "Home & Garden",
    image: "https://placehold.co/200x200",
    rating: 4.1,
    sku: "HOME-002",
  },
  {
    id: 7,
    name: "Smartphone",
    price: 30000,
    category: "Electronics",
    image: "https://placehold.co/200x200",
    rating: 4.6,
    sku: "ELEC-003",
  },
  {
    id: 8,
    name: "Jacket",
    price: 3500,
    category: "Clothing",
    image: "https://placehold.co/200x200",
    rating: 4.5,
    sku: "CLTH-003",
  },
];

const categories = [
  "All",
  "Electronics",
  "Clothing",
  "Home & Garden",
];



function ProductListPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredProducts =
    selectedCategory === "All"
        ? products
        : products.filter(
            (product) => product.category === selectedCategory
        );
    console.log(filteredProducts);

   return (
    <>
        <div className="product-list-page">
        <h1>Mini Product List</h1>
        </div>

        <div className="filter-buttons">
        {categories.map((category) => (
            <Button
            key={category}
            text={category}
            variant={
                selectedCategory === category
                ? ButtonVariant.PRIMARY
                : ButtonVariant.OUTLINE
            }
            size={ButtonSize.MD}
            onClick={() => setSelectedCategory(category)}
            />
        ))}
        </div>

        <p className="product-count">
        Showing {filteredProducts.length} of {products.length} products
        </p>
        <div className="product-grid">
        {filteredProducts.map((product) => (
            <ProductCard
                key={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
                sku={product.sku}
                rating={product.rating}
                />
        ))}
        </div>
</>
  );
}

export default ProductListPage