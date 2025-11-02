import React, { useMemo, useCallback, useState } from "react";
import CartItem from "./CartItem"; // memoized child component

export default function Cart() {
  const [cart, setCart] = useState([
    { id: 1, name: "Shoes", price: 1500, quantity: 1 },
    { id: 2, name: "Tshirt", price: 500, quantity: 2 },
  ]);

  // ✅ Expensive calculation is memoized
  const totalPrice = useMemo(() => {
    console.log("Calculating total...");
    return cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
  }, [cart]);

  // ✅ Stable reference of function
  const handleDelete = useCallback((id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  }, []);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.map(item => (
        <CartItem
          key={item.id}
          item={item}
          onDelete={handleDelete}
        />
      ))}

      <h3>Total Price: ₹{totalPrice}</h3>
    </div>
  );
}
