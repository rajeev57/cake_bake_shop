"use client";
import React, { useState, useEffect } from "react";
import CakeList from "./components/CakeList";
import CakeDetail from "./components/CakeDetail";
import PaymentSuccess from "./components/PaymentSuccess";
import Header from "./components/Header";
import { cakes } from "../public/data/cakes";
import Cart from "./components/Cart";
import { useCart } from "./context/CartContext";

type Cake = {
  id: number;
  name: string;
  price: number;
  image: string;
  weight: string;
};

export type CartItem = Cake & {
  quantity: number;
};

export default function Home() {
  const [selectedCake, setSelectedCake] = useState<Cake | null>(null);
  const [paymentComplete, setPaymentComplete] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartQuantity, setCartQuantity] = useState(0);
  const { addToCart } = useCart();

  // useEffect(() => {
  //   const storedCart = localStorage.getItem("cart");
  //   if (storedCart) {
  //     setCart(JSON.parse(storedCart));
  //   }
  // }, []);

  // // Effect to update cart quantity and sync with localStorage
  // useEffect(() => {
  //   setCartQuantity(cart.reduce((total, item) => total + item.quantity, 0));

  //   // Sync cart with localStorage whenever cart changes
  //   if (cart.length > 0) {
  //     localStorage.setItem("cart", JSON.stringify(cart));
  //   }
  // }, [cart]);

  // const handleAddToCart = (cake: Cake) => {
  //   setCart((prevCart) => {
  //     const existingItem = prevCart.find((item) => item.id === cake.id);
  //     if (existingItem) {
  //       return prevCart.map((item) =>
  //         item.id === cake.id
  //           ? { ...item, quantity: item.quantity + 1 }
  //           : item
  //       );
  //     } else {
  //       return [...prevCart, { ...cake, quantity: 1 }];
  //     }
  //   });
  // };

  // useEffect(() => {
  //   if (cart.length > 0) {
  //     localStorage.setItem("cart", JSON.stringify(cart));
  //   }
  // }, [cart]);

  // const handleSelectCake = (cake: Cake) => {
  //   setSelectedCake(cake);
  //   setPaymentComplete(false);
  // };

  // const handlePayment = () => {
  //   setPaymentComplete(true);
  //   setCart([]);
  // };
  const handleAddToCart = (cake: Cake) => {
    addToCart({ ...cake, quantity: 1 });
  };

  const handleSelectCake = (cake: Cake) => {
    setSelectedCake(cake);
    setPaymentComplete(false);
  };

  const handlePayment = () => {
    setPaymentComplete(true);
  };

  return (
    <div>
      <Header />
      {!selectedCake && !paymentComplete && (
        <CakeList
          cakes={cakes}
          onSelectCake={handleSelectCake}
          onAddToCart={handleAddToCart}
        />
      )}

      {selectedCake && !paymentComplete && (
        <CakeDetail
          cake={selectedCake}
          onPayment={handlePayment}
          onCancel={() => setSelectedCake(null)}
        />
      )}

      {paymentComplete && selectedCake && (
        <PaymentSuccess cake={selectedCake} onBack={() => setSelectedCake(null)} />
      )}
    </div>
  );
}