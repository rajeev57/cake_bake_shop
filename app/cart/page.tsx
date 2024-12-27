"use client"
import React, { useState, useEffect } from "react";
import Cart from "../components/Cart";
import { useRouter } from "next/navigation";
import { useCart } from "../context/CartContext";
import styles from "./CartPage.module.css";


export default function Home() {
    // const [cart, setCart] = useState<CartItem[]>([]);
    const router = useRouter();

    const { cart, removeFromCart, updateQuantity } = useCart();

  // Handle quantity change (e.g., from input field)
  const handleQuantityChange = (id: number, quantity: number) => {
    updateQuantity(id, quantity); // Update the quantity in context
  };

  // Handle checkout (optional, depending on your logic)
  const handleCheckout = () => {
    alert("Proceeding to checkout...");
    removeFromCart(0); // Optionally clear the cart here if needed
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
      <button className={styles.backToShopButton} onClick={() => router.push("/")}>Back to Shop</button> {/* Go back to Home page */}
    </div>
  );
}