"use client"; // Required for Next.js App Router

import { createContext, useContext, useState, useReducer, useEffect, ReactNode } from "react";

// Define cart item type
type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  category?: string | null; // ✅ Made optional
};


// Define state type
type CartState = {
  cart: CartItem[];
};

// Define action types
type CartAction =
  | { type: "ADD_TO_CART"; payload: CartItem }
  | { type: "REMOVE_FROM_CART"; payload: string }
  | { type: "UPDATE_QUANTITY"; payload: { id: string; quantity: number } }
  | { type: "INCREASE_QUANTITY"; payload: string }
  | { type: "DECREASE_QUANTITY"; payload: string }
  | { type: "CLEAR_CART" };

// Reducer function
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItem = state.cart.find((item) => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return { ...state, cart: [...state.cart, action.payload] };
      }
    }

    case "REMOVE_FROM_CART":
      return { ...state, cart: state.cart.filter((item) => item.id !== action.payload) };

    case "UPDATE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: Math.max(1, action.payload.quantity) }
            : item
        ),
      };

    case "INCREASE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };

    case "DECREASE_QUANTITY":
      return {
        ...state,
        cart: state.cart
          .map((item) =>
            item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
          )
          .filter((item) => item.quantity > 0), // Remove item if quantity reaches 0
      };

    case "CLEAR_CART":
      return { ...state, cart: [] };

    default:
      return state;
  }
};

// Create Context
const CartContext = createContext<{
  cart: CartItem[];
  dispatch: React.Dispatch<CartAction>;
} | null>(null);

// Provider Component
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [state, dispatch] = useReducer(cartReducer, { cart: [] });

  // ✅ Ensure component is mounted before loading cart from localStorage
  useEffect(() => {
    setIsMounted(true);
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      dispatch({ type: "CLEAR_CART" }); // Reset before loading new data
      const parsedCart = JSON.parse(storedCart);
      parsedCart.forEach((item: CartItem) => {
        dispatch({ type: "ADD_TO_CART", payload: item });
      });
    }
  }, []);

  // ✅ Save cart to localStorage whenever it updates
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("cart", JSON.stringify(state.cart));
    }
  }, [state.cart, isMounted]);

  // ✅ Prevent rendering until mounted to avoid hydration errors
  if (!isMounted) return null;

  return (
    <CartContext.Provider value={{ cart: state.cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};