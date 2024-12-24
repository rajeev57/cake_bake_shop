import React from "react";
import styles from "./PaymentSuccess.module.css";

type Cake = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type PaymentSuccessProps = {
  cake: Cake;
  onBack: () => void;
};

export default function PaymentSuccess({ cake, onBack }: PaymentSuccessProps) {
  return (
    <div className={styles.paymentSuccess}>
      <h2>Thank you for your purchase!</h2>
      <p>Your {cake.name} will be ready soon.</p>
      <button onClick={onBack}>Back to Shop</button>
    </div>
  );
}