"use client";

import React, { useState } from "react";
import { useCart } from "@/hooks/CartContext"; 

const CartPage = () => {
  const { cart, dispatch } = useCart();
  const [loading, setLoading] = useState(false);

  // Calculate subtotal
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleCheckout = async () => {
    if (cart.length === 0) return alert("Your cart is empty!");

    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: cart }),
      });

      const { url } = await res.json();
      if (url) window.location.href = url;
    } catch (error) {
      console.error("Checkout Error:", error);
      alert("Payment failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="container mx-auto px-4 py-8 flex-1">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items Section */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold mb-6">Your Shopping Cart</h2>

          {cart.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            <div className="space-y-6">
              {cart.map((item, index) => (
                <div key={item.id ?? `cart-item-${index}`} className="flex gap-4 p-4 border rounded-lg shadow-sm">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-28 h-28 rounded-lg object-cover"
                  />

                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-gray-500">Category: {item.category || "Unknown"}</p>
                        <div className="mt-2 flex gap-3 items-center">
                          <p className="text-sm">Quantity: {item.quantity}</p>
                        </div>
                      </div>
                      <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>

                    {/* Quantity & Remove Buttons */}
                    <div className="flex gap-2 mt-4">
                      <button
                        onClick={() => dispatch({ type: "DECREASE_QUANTITY", payload: item.id })}
                        className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
                      >
                        -
                      </button>

                      <button
                        onClick={() => dispatch({ type: "INCREASE_QUANTITY", payload: item.id })}
                        className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
                      >
                        +
                      </button>

                      <button
                        onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item.id })}
                        className="ml-auto px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Order Summary Section */}
        <div className="lg:col-span-1">
          <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
          <div className="border rounded-lg p-6 space-y-4 shadow-md">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Estimated Delivery & Handling</span>
              <span className="text-green-600">Free</span>
            </div>
            <div className="flex justify-between font-medium">
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full text-white rounded-full bg-blue-600 hover:bg-blue-700 p-4 text-lg font-medium"
              disabled={loading}
            >
              {loading ? "Processing..." : "Checkout with Stripe"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CartPage;
