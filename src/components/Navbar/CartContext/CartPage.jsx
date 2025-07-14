import React from "react";
import { useCart } from "./CartContext";

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">🛒 Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b pb-4"
            >
              <div className="flex items-center gap-4">
                <img src={item.img} alt={item.title} className="w-20 h-20 object-cover rounded" />
                <div>
                  <h2 className="font-semibold text-lg">{item.title}</h2>
                  <p>Quantity: {item.quantity}</p>
                  <p className="text-primary">₹{item.price * item.quantity}</p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
