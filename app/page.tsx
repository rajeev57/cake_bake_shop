"use client";
import React, { useState } from "react";
import CakeList from "./components/CakeList";
import CakeDetail from "./components/CakeDetail";
import PaymentSuccess from "./components/PaymentSuccess";
import Header from "./components/Header";
import { cakes } from "../public/data/cakes";
import { useCart } from "./context/CartContext";

type Cake = {
  id: number;
  name: string;
  price: number;
  images: string[];
  weight: string;
};

export type CartItem = Cake & {
  quantity: number;
};

export default function Home() {
  const [selectedCake, setSelectedCake] = useState<Cake | null>(null);
  const [paymentComplete, setPaymentComplete] = useState(false);
  const { addToCart } = useCart();

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