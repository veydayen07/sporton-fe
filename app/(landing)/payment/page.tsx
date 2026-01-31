import React from "react";
import CardWithHeader from "../components/ui/cardWithHeader";
import PaymentOption from "../components/payment/PaymentOption";
import PaymentStep from "../components/payment/PaymentStep";

const Payment = () => {
  return (
    <div className="bg-gray-100 min-h-[80vh]">
      <h1 className="text-center font-bold text-5xl pt-8 text-black mb-10">
        Payment
      </h1>
      <div className="max-w-5xl justify-center mx-auto grid grid-cols-2 gap-16">
        <PaymentOption className="w-full " />
        <PaymentStep className="w-full " />
      </div>
    </div>
  );
};

export default Payment;
