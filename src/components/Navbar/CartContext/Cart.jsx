import React from "react";
import { useCart } from "./CartContext"


const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="mb-2 flex justify-between items-center border-b py-2">
            <div>
              <h4 className="font-semibold">{item.title}</h4>
              <p>Qty: {item.quantity}</p>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
