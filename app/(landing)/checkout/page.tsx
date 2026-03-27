"use client";
import React, { useState } from "react";
import CartItems from "./../components/checkout/cartItems";
import OrderInformation from "./../components/checkout/orderInformation";
import { useCartStore } from "@/app/hooks/useCartHooks";
import { CustomerInfo } from "@/app/types";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const CheckoutPage = () => {
  const { push } = useRouter();
  // const [showWarningToast, setShowWarningToast] = useState<boolean>(false);
  const [formData, setFormData] = useState<CustomerInfo>({
    customerAddress: "",
    customerContact: null,
    customerName: "",
  });
  const { customerInfo, setCustomerInfo } = useCartStore();
  const handlePayment = () => {
    if (
      !formData.customerAddress ||
      !formData.customerContact ||
      !formData.customerName
    ) {
      // setShowWarningToast(true);
      toast.warning("Complete your information");
      // alert("HIiii");
      return;
    }

    setCustomerInfo(formData);
    push("/payment");
  };
  return (
    <div className="bg-gray-100 min-h-[80vh] py-20">
      <div className="mx-auto w-full  max-w-5xl">
        <h1 className="leading-none text-5xl font-bold text-center mb-11">
          Checkout Now
        </h1>
        <div className="grid grid-cols-2 gap-15 ">
          <OrderInformation formData={formData} setFormData={setFormData} />
          <CartItems handlePayment={() => handlePayment()} />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
