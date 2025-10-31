import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "./productSlice";
import { addToCart, removeFromCart } from "./cartSlice";

function App() {
  const dispatch = useDispatch();

  const { items, loading, error } = useSelector((state) => state.products);
  const { cartItems, totalQuantity } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  if (loading) return <div className="flex justify-center items-center min-h-screen text-xl">Loading products...</div>;
  if (error) return <div className="flex justify-center items-center min-h-screen text-xl text-red-600">{error}</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Shopping Cart Demo</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Products Section */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {items.slice(0, 8).map((p) => (
                <div key={p.id} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
                  <img src={p.image} alt={p.title} className="w-full h-48 object-contain mb-3" />
                  <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2">{p.title}</h3>
                  <p className="text-lg font-bold text-green-600 mb-3">₹ {p.price}</p>
                  <button 
                    onClick={() => dispatch(addToCart(p))}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Cart Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                Cart ({totalQuantity} items)
              </h2>
              
              {cartItems.length === 0 ? (
                <p className="text-gray-500 text-center py-8">Your cart is empty</p>
              ) : (
                <>
                  <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex items-center gap-3 border-b pb-3">
                        <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-800 truncate">{item.title}</p>
                          <p className="text-sm text-gray-600">₹ {item.price}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => dispatch(removeFromCart(item.id))}
                            className="bg-red-500 text-white w-7 h-7 rounded-md hover:bg-red-600 transition-colors flex items-center justify-center"
                          >
                            -
                          </button>
                          <span className="font-semibold w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => dispatch(addToCart(item))}
                            className="bg-green-500 text-white w-7 h-7 rounded-md hover:bg-green-600 transition-colors flex items-center justify-center"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-semibold text-gray-700">Total:</span>
                      <span className="text-2xl font-bold text-green-600">₹ {getTotalPrice()}</span>
                    </div>
                    <button className="w-full bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 transition-colors font-semibold">
                      Checkout
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;