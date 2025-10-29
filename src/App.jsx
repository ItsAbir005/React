import { useSelector, useDispatch } from "react-redux";
import { addProduct, removeProduct } from "./productSlice";

function App() {
  const products = useSelector((state) => state.products.items);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Products List</h2>

      {products.map((p) => (
        <div key={p.id}>
          <p>{p.name} - ₹{p.price}</p>
          <button onClick={() => dispatch(removeProduct(p.id))}>Remove</button>
        </div>
      ))}

      <button
        onClick={() =>
          dispatch(addProduct({ id: 3, name: "Keyboard", price: 50 }))
        }
      >
        Add Product
      </button>
    </div>
  );
}

export default App;
