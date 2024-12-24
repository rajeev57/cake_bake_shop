"use client";
import React, { useState } from "react";
import CakeList from "./components/CakeList";
import CakeDetail from "./components/CakeDetail";
import PaymentSuccess from "./components/PaymentSuccess";
import { cakes } from "../public/data/cakes";

type Cake = {
  id: number;
  name: string;
  price: number;
  image: string;
  weight: string;
};

export default function Home() {
  const [selectedCake, setSelectedCake] = useState<Cake | null>(null);
  const [paymentComplete, setPaymentComplete] = useState(false);

  const handleSelectCake = (cake: Cake) => {
    setSelectedCake(cake);
    setPaymentComplete(false);
  };

  const handlePayment = () => {
    setPaymentComplete(true);
  };

  return (
  <div>
      {!selectedCake && (
        <CakeList cakes={cakes} onSelectCake={handleSelectCake} />
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
