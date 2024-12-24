import React from "react";
import styles from "./CakeDetail.module.css";

type Cake = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type CakeDetailProps = {
  cake: Cake;
  onPayment: () => void;
  onCancel: () => void;
};

export default function CakeDetail({ cake, onPayment, onCancel }: CakeDetailProps) {
  return (
    <div className={styles.cakeDetail}>
    <div className={styles.left}>
      <h2>You selected: {cake.name}</h2>
      <p>Price: ₹{cake.price}</p>
      <img src={cake.image} alt={cake.name} />
      <p>To pay, scan the QR code below:</p>
      <button onClick={onPayment}>I Paid</button>
      <button onClick={onCancel}>Go Back</button>
    </div>
    <div className={styles.right}>
      <img src="/images/qr_code_golu.jpg" alt="QR Code" className={styles.qrCode} />
    </div>
  </div>
  );
}