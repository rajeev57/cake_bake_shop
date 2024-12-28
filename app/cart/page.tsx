"use client"
import React from "react";
import Cart from "../components/Cart";
import { useRouter } from "next/navigation";
import { useCart } from "../context/CartContext";
import styles from "./CartPage.module.css";


export default function Home() {
  const router = useRouter();
  const { cart, removeFromCart, updateQuantity } = useCart();
  const handleQuantityChange = (id: number, quantity: number) => {
    updateQuantity(id, quantity);
  };

  const handleCheckout = () => {
    alert("Proceeding to checkout...");
    removeFromCart(0);
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