"use client";

import React, { useState } from "react";
import CardWithHeader from "./../ui/cardWithHeader";
import FileUploads from "../ui/FileUploads";
import { priceFormatter } from "@/app/utils/price-formatter";
import Button from "../ui/button";
import { FiCheckCircle } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/app/hooks/useCartHooks";
import { transactionCheckout } from "@/app/services/transaction.service";

type TPaymentStep = {
  className?: string;
};

const PaymentStep = ({ className }: TPaymentStep) => {
  const { customerInfo, items, reset } = useCartStore();
  const { push } = useRouter();
  const [file, setFile] = useState<File | null>();
  const totalPrice = items.reduce(
    (total, item) => total + item.qty * item.price,
    0,
  );

  const handleConfirmPayment = async () => {
    if (!file) {
      alert("Please upload your payment receipt!");
      return;
    }

    if (!customerInfo) {
      alert("Customer information is missing, please return to checkout");
      push("/checkout");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("customerName", customerInfo.customerName);
      formData.append(
        "customerContact",
        customerInfo.customerContact!.toString(),
      );
      formData.append("customerAddress", customerInfo.customerAddress);
      formData.append("image", file);
      formData.append(
        "purchasedItems",
        JSON.stringify(
          items.map((item) => ({ productId: item._id, qty: item.qty })),
        ),
      );
      formData.append("totalPayment", totalPrice!.toString());

      const res = await transactionCheckout(formData);

      alert("Transaction created successfully!");
      reset();
      push(`/order-status/${res._id}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={`${className}`}>
      <CardWithHeader header="Payment Step">
        <div className="pt-5.5 pb-7.25 border-b border-gray-100 mb-4">
          <ol className="flex flex-col gap-3.5 list-decimal list-inside px-4 mb-5">
            <li className="font-medium text-xs">
              Transfer the total amount of <span className="font-bold"></span>{" "}
              to your preferred bank account listed under &apos;Payment
              Options&apos; (BCA, Mandiri, or BTPN).
            </li>
            <li className="font-medium text-xs">
              After completing the transfer,{" "}
              <span className="font-bold">keep the payment receipt</span> or a
              screenshot of the transfer confirmation. This will be needed for
              the next step.
            </li>
            <li className="font-medium text-xs">
              Upload the payment receipt/screenshot using the{" "}
              <span className="font-bold">
                &apos;Upload Receipt & Confirm&apos;
              </span>{" "}
              button below to validate your transaction.
            </li>
          </ol>
          <div className="px-4">
            <FileUploads onFileSelect={setFile} />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between font-semibold items-center px-4">
            <span className="text-sm ">Total</span>
            <span className="text-xs text-primary">
              {priceFormatter(totalPrice)}
            </span>
          </div>
          <div className="px-4 w-full ">
            <Button
              className="text-base font-medium flex items-center gap-3 w-full"
              variant="dark"
              onClick={handleConfirmPayment}
            >
              <FiCheckCircle size={20} strokeWidth={2} /> Upload Receipt &
              Confirm
            </Button>
          </div>
        </div>
      </CardWithHeader>
    </div>
  );
};

export default PaymentStep;
