import React from "react";
import ProductCard from "./ProductCard";
import products from "../products";

export default function ProductSection() {
  return (
    <section className="productSection">
      <h2>Products</h2>
      <ul className="productList">
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </section>
  );
}


