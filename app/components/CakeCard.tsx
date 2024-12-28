import React, { useState, useEffect } from "react";
import styles from "./CakeCard.module.css";

type Cake = {
  id: number;
  name: string;
  price: number;
  images: string[];
  weight: string;
};

type CakeCardProps = {
  cake: Cake;
  onSelectCake: (cake: Cake) => void;
  onAddToCart: (cake: Cake) => void;
};

export default function CakeCard({ cake, onSelectCake, onAddToCart }: CakeCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-slide effect for images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === cake.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [cake.images.length]);

  return (
    <div className={styles.cakeItem}>
      <span className={styles.infoIcon} onClick={() => onSelectCake(cake)}>
        &#9432; {/* Unicode character for info icon */}
      </span>
      <img
        src={cake.images[currentImageIndex]}
        alt={cake.name}
        className={styles.cakeImage}
      />
      <h2>{cake.name}</h2>
      <p>
        Price: ₹{cake.price}, Weight: {cake.weight}Kg
      </p>
      <button onClick={() => onAddToCart(cake)}>Add to Cart</button>
    </div>
  );
}
