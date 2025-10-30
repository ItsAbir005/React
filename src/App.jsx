import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "./cartSlice";

function App() {
  const products = useSelector((state) => state.products.items); 
  const cart = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Products</h2>

      {products.map((product) => (
        <div key={product.id}>
          <p>{product.name} - ₹{product.price}</p>
          <button onClick={() => dispatch(addToCart(product))}>
            Add to Cart
          </button>
        </div>
      ))}

      <hr />
      <h2>Cart</h2>

      {cart.map((item) => (
        <div key={item.id}>
          <p>
            {item.name} - Qty: {item.quantity}
          </p>
          <button onClick={() => dispatch(removeFromCart(item.id))}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
