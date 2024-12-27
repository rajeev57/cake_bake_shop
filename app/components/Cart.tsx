import React from "react";
import { CartItem } from "../page";
import styles from "./Cart.module.css";

interface CartProps {
  cart: CartItem[];
  onRemove: (cakeId: number) => void;
  onUpdateQuantity: (cakeId: number, quantity: number) => void;
  onCheckout: () => void;
}

const Cart: React.FC<CartProps> = ({ cart, onRemove, onUpdateQuantity, onCheckout }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className={styles.cartContainer}>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className={styles.cartItem}>
                <div className={styles.itemDetails}>
                  <img src={item.image} alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                    <p>Price: ₹{item.price}</p>
                    <p>Weight: {item.weight}</p>
                  </div>
                </div>
                <div className="item-actions">
                  <button className={styles.removeItem} onClick={() => onRemove(item.id)}>
                    <img src="/DeleteIcon.svg" alt="Delete" width={30} height={30} />
                  </button>
                  <div className={styles.quantityControls}>
                    <button
                      onClick={() =>
                        onUpdateQuantity(item.id, Math.max(item.quantity - 1, 0))
                      }
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className={styles.cartSummary}>
            <h3>Total: ₹{total}</h3>
            <button onClick={onCheckout} className={styles.checkoutButton}>
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;