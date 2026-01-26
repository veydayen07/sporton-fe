import React from "react";
import CartItems from "./../components/checkout/cartItems";
import OrderInformation from "./../components/checkout/orderInformation";

const CheckoutPage = () => {
  return (
    <div className="bg-gray-100 min-h-[80vh] ">
      <div className="mx-auto w-full pb-20 pt-12 max-w-5xl">
        <h1 className="leading-none text-5xl font-bold text-center mb-11">
          Checkout Now
        </h1>
        <div className="grid grid-cols-2 gap-15 ">
          <OrderInformation />
          <CartItems />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
