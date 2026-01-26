import React from "react";

const CheckoutPage = () => {
  return (
    <div className="mx-auto w-full pb-20 pt-12 bg-gray-100 min-h-[80vh]">
      <h1 className="leading-none text-5xl font-bold text-center mb-11">
        Checkout Now
      </h1>
      <div className="flex justify-center items-center gap-15">
        <div className="pt-4.25 pb-13 px-6.25 bg-white">
          <h2 className="text-lg font-bold pb-3.5 border-b w-full">
            Order Information
          </h2>
        </div>
        <div className="pt-4.25 pb-13 px-6.25 bg-white">
          <h2 className="text-lg font-bold pb-3.5 border-b ">Cart Items</h2>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
