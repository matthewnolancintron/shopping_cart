import React from "react";

export default function ProductCard({ product }) {

    const [quantity, setQuantity] = React.useState(1);

    const handleQuantityChange = (event) => {
        const value = event.target.value ?? parseInt(event.target.value);
        setQuantity(value);
      };

    return (
        <div className="product-card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Category: {product.category}</p>
          {product.inStock ? (
            <>
              <p className="in-stock">In Stock</p>
              <label htmlFor={`quantity-${product.id}`}>Quantity:</label>
              <input
                id={`quantity-${product.id}`}
                type="number"
                min="1"
                max="10"
                step="1"
                value={quantity}
                onChange={handleQuantityChange}
              />
              <button>Add to Cart</button>
            </>
          ) : (
            <p className="out-of-stock">Out of Stock</p>
          )}
        </div>
      );
}