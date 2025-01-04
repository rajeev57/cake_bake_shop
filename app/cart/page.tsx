"use client"
import React, { useState } from "react";
import Cart from "../components/Cart";
import { useRouter } from "next/navigation";
import { useCart } from "../context/CartContext";
import styles from "./CartPage.module.css";


export default function Home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { cart, removeFromCart, updateQuantity, setTotalPrice } = useCart();
  const handleQuantityChange = (id: number, quantity: number) => {
    updateQuantity(id, quantity);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCheckout = () => {
    setIsLoading(true); // Set loading state to true
    removeFromCart(0);
    setTimeout(() => {
      // Simulate a delay before redirecting to payment page
      const total = calculateTotal(); // Calculate the total price
      setTotalPrice(total); // Set the total price in the context
      router.push("/payment");
      setIsLoading(false); // Reset loading state
    }, 1000);
  };

  return (
    <div>
      <h1>Your Cart</h1>
      <Cart
        cart={cart}
        onRemove={removeFromCart}
        onUpdateQuantity={handleQuantityChange}
        onCheckout={handleCheckout}
      />
      <button className={styles.backToShopButton} onClick={() => router.push("/")}>Back to Shop</button> 
      {/* Go back to Home page */}
      {isLoading && <div className={styles.loader}>Processing...</div>}
    </div>
  );
}