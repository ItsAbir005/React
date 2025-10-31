import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "./productSlice";
import { addToCart } from "./cartSlice";

function App() {
  const dispatch = useDispatch();

  const { items, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (loading) return <h3>Loading products...</h3>;
  if (error) return <h3>{error}</h3>;

  return (
    <div>
      <h2>Products from API</h2>

      {items.map((p) => (
        <div key={p.id}>
          <p>{p.title}</p>
          <p>₹ {p.price}</p>
          <button onClick={() => dispatch(addToCart(p))}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
