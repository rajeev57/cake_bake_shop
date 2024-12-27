"use client";
import React from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Header() {
  const [iconError, setIconError] = React.useState(false);
  const { cartQuantity } = useCart();

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.homeLink}>
        {iconError ? (
          "Home"
        ) : (
          <img
            src="/home-icon.svg" // Replace with the path to your icon
            alt="Home"
            className={styles.homeIcon}
            onError={() => setIconError(true)} // Show "Home" text if the icon fails to load
          />
        )}
      </Link>
      <h1>Welcome to the Cake&apos;N&apos;Bake Shop</h1>
      <Link href="/cart">
          <div className={`${styles.cartIcon} ${cartQuantity > 0 ? styles.hasItems : ""}`} aria-label={`Go to cart, ${cartQuantity > 0 ? `${cartQuantity} item(s)` : "empty"}`}>
            🛒
            {cartQuantity > 0 && <span className={styles.cartQuantity}>{cartQuantity}</span>}
          </div>
      </Link>
    </header>
  );
}