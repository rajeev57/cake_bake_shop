import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2024 Cake&apos;N&apos;Bake shop</p>
      <p>Phone: +91 8863007949</p> {/* Replace with actual phone number */}
      <p>Address: near bank of baroda, hathidah, patna, bihar</p> {/* Replace with actual address */}
      <p>Pin Code: 803301</p>
    </footer>
  );
}