import React from "react";
import CakeCard from "./CakeCard";
import styles from "./CakeList.module.css";

type Cake = {
  id: number;
  name: string;
  price: number;
  images: string[];
  weight: string;
};

type CakeListProps = {
  cakes: Cake[];
  onSelectCake: (cake: Cake) => void;
  onAddToCart: (cake: Cake) => void;
};

export default function CakeList({ cakes, onSelectCake, onAddToCart }: CakeListProps) {
  return (
    <div className={styles.cakeList}>
      {cakes.map((cake) => (
        <CakeCard
          key={cake.id}
          cake={cake}
          onSelectCake={onSelectCake}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}
