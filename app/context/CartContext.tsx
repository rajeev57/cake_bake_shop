'use client'

import React, { createContext, useState, useContext, useEffect, ReactNode } from "react";
import { CartItem } from "../page";  // Adjust the import path based on your project structure

type CartContextType = {
  cart: CartItem[];
  cartQuantity: number;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  totalPrice: number;
  setTotalPrice: (total: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  // Load cart from localStorage when the app starts
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Update cartQuantity and sync cart with localStorage whenever cart changes
  useEffect(() => {
    setCartQuantity(cart.reduce((total, item) => total + item.quantity, 0));

    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const addToCart = (item: CartItem) => {  
    // Ensure images is an array, even if it’s passed as a string
    const normalizedItem: CartItem = {
      ...item,
      images: Array.isArray(item.images) ? item.images : [item.images],
    };
  
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === normalizedItem.id);
  
      if (existingItem) {
        // If the item already exists, update its quantity but preserve the images as an array
        return prevCart.map((cartItem) =>
          cartItem.id === normalizedItem.id
            ? { ...cartItem, quantity: cartItem.quantity + 1, images: cartItem.images }
            : cartItem
        );
      } else {
        // If the item doesn't exist, add it to the cart
        return [...prevCart, { ...normalizedItem, quantity: 1 }];
      }
    });
  };
  

  const removeFromCart = (id: number) => {
    // setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    const updatedCart = id === 0 ? [] : cart.filter((item) => item.id !== id);
    setCart(updatedCart);  // Update state
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const updateQuantity = (id: number, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, cartQuantity, addToCart, removeFromCart, updateQuantity, totalPrice, setTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};
