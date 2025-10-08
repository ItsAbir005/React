import { useState } from "react";

export default function CounterApp() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Counter App </h1>
      <div className="flex items-center gap-4">
        <button
          onClick={handleDecrement}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          − Decrement
        </button>

        <span className="text-xl font-semibold">{count}</span>

        <button
          onClick={handleIncrement}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          + Increment
        </button>
      </div>
    </div>
  );
}
