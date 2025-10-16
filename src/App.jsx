import React, { useReducer } from "react";

const initialState = {
  cart: []
};

// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };

    case "REMOVE_ITEM":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload)
      };

    case "CLEAR_CART":
      return {
        ...state,
        cart: []
      };

    default:
      return state;
  }
}

export default function CartApp() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItem = (name) => {
    const newItem = {
      id: Date.now(),
      name
    };
    dispatch({ type: "ADD_ITEM", payload: newItem });
  };

  return (
    <div className="p-5 max-w-md mx-auto text-center">
      <h2 className="text-2xl font-bold mb-4">🛒 useReducer Cart</h2>

      <button
        onClick={() => addItem("Apple")}
        className="bg-green-500 text-white px-3 py-1 rounded m-1"
      >
        Add Apple
      </button>
      <button
        onClick={() => addItem("Banana")}
        className="bg-yellow-500 text-white px-3 py-1 rounded m-1"
      >
        Add Banana
      </button>

      <button
        onClick={() => dispatch({ type: "CLEAR_CART" })}
        className="bg-red-500 text-white px-3 py-1 rounded m-1"
      >
        Clear Cart
      </button>

      <ul className="mt-4 border-t pt-3">
        {state.cart.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          state.cart.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center border-b py-2"
            >
              {item.name}
              <button
                onClick={() =>
                  dispatch({ type: "REMOVE_ITEM", payload: item.id })
                }
                className="text-sm bg-gray-300 px-2 py-1 rounded"
              >
                Remove
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
