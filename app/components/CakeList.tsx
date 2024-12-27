import React from "react";
import styles from "./CakeList.module.css";

type Cake = {
  id: number;
  name: string;
  price: number;
  image: string;
  weight: string;
};

type CakeListProps = {
  cakes: Cake[];
  onSelectCake: (cake: Cake) => void;
  onAddToCart: (cake: Cake) => void;
};

export default function CakeList({ cakes, onSelectCake, onAddToCart}: CakeListProps) {
  return (
    <div className={styles.cakeList}>
      {cakes.map((cake) => (
        <div key={cake.id} className={styles.cakeItem}>
          <span
            className={styles.infoIcon}
            onClick={() => onSelectCake(cake)}
          >
            &#9432; {/* Unicode character for info icon */}
          </span>
          <img src={cake.image} alt={cake.name} />
          <h2>{cake.name}</h2>
          <p>Price: ₹{cake.price}, Weight: {cake.weight}Kg</p>
          {/* <button onClick={() => onSelectCake(cake)}>View Details</button> */}
          <button onClick={() => onAddToCart(cake)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}