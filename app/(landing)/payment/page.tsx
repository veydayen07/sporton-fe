import React from "react";
import CardWithHeader from "../components/ui/cardWithHeader";
import PaymentOption from "../components/payment/PaymentOption";

const Payment = () => {
  return (
    <div className="bg-gray-100 min-h-[80vh]">
      <h1 className="text-center font-bold text-5xl pt-8 text-black mb-10">
        Payment
      </h1>
      <div className="max-w-5xl flex justify-center mx-auto gap-16">
        <PaymentOption className="w-full flex-1" />
        <PaymentOption className="w-full flex-1" />
      </div>
    </div>
  );
};

export default Payment;
