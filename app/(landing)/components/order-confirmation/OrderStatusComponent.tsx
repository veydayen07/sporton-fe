import Image from "next/image";
import React from "react";
import Button from "../ui/button";
import { FiRefreshCw } from "react-icons/fi";

const OrderSubmitted = ({ status }: { status: "submitted" | "confirmed" }) => {
  return (
    <>
      {" "}
      <Image
        src={`/images/icon-order-${status ? "submitted" : "confirmed"}.svg`}
        width={117}
        height={117}
        alt={`order-${status}`}
        className="mb-4.25"
      />
      <h2 className="font-bold text-2xl mb-2">
        Order {status === "submitted" ? "Submitted" : "Confirmed"}!!
      </h2>
      <p className="text-base font-normal mb-8.25 text-center">
        {status === "submitted"
          ? `Your Order is recorded in our system, we are still confirming the payment status, please wait and your order status will be updated in less than 12 hours.`
          : "We have received your payment, and your order is currently processed by our staff, just wait until your favorite sportswear arrive in your home. We will contact you in Whatsapp for further shipping updates."}
      </p>
      <div className="w-full px-12.5">
        {status === "submitted" && (
          <Button
            className="flex w-full gap-2.5"
            variant="dark"
            onClick={() => window.location.reload()}
          >
            <FiRefreshCw size={18} strokeWidth={2} /> Refresh Order Status
          </Button>
        )}
      </div>
    </>
  );
};

export default OrderSubmitted;
