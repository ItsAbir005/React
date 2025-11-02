import React, { memo } from "react";

function CartItem({ item, onDelete }) {
  console.log("Rendering child:", item.name);

  return (
    <div>
      {item.name} — ₹{item.price} × {item.quantity}
      <button onClick={() => onDelete(item.id)}>Delete</button>
    </div>
  );
}

// ✅ Only re-render when props change
export default memo(CartItem);
