export default function ItemInCartCard({ productInCart }) {
  return (
    <div className="itemInCartCard">
      <img src={productInCart.image} alt={productInCart.name} />
      <h2>{productInCart.name}</h2>
      <p>{productInCart.description}</p>
      <p>Price: ${productInCart.price.toFixed(2)}</p>
      <p>Quantity: {productInCart.quantity}</p>
    </div>
  );
}