import React from "react";
import NavigationBar from "./NavigationBar";
import ProductSection from "./ProductSection";

export default function ShopPage() {
  return (
    <section className="shopPage">
      <NavigationBar />
      <ProductSection />
    </section>
  );
}

