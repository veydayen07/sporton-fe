"use client";

import Image from "next/image";
import React, { useState } from "react";
import Button from "../../components/ui/button";
import { FiRefreshCw } from "react-icons/fi";
import OrderSubmitted from "../../components/order-confirmation/OrderStatusComponent";

const OrderStatus = () => {
  const [status, setStatus] = useState<"submitted" | "confirmed">("submitted");
  return (
    <div className="bg-gray-100 min-h-[80vh] py-20 flex flex-col items-center">
      <h1 className="text-center font-bold text-5xl mb-12">Order Status</h1>
      <div className="bg-white w-160 py-15 px-16 flex flex-col justify-center items-center">
        <OrderSubmitted status={status} />
      </div>
    </div>
  );
};

export default OrderStatus;
