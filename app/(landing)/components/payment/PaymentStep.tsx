"use client";

import React from "react";
import CardWithHeader from "./../ui/cardWithHeader";
import FileUploads from "../ui/FileUploads";
import { priceFormatter } from "@/app/utils/price-formatter";
import Button from "../ui/button";
import { FiCheckCircle } from "react-icons/fi";
import { useRouter } from "next/navigation";

type TPaymentStep = {
  className?: string;
};

const PaymentStep = ({ className }: TPaymentStep) => {
  const { push } = useRouter();
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
            <FileUploads />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between font-semibold items-center px-4">
            <span className="text-sm ">Total</span>
            <span className="text-xs text-primary">
              {priceFormatter(5000000)}
            </span>
          </div>
          <div className="px-4 w-full ">
            <Button
              className="text-base font-medium flex items-center gap-3 w-full"
              variant="dark"
              onClick={() => push("/order-status/12222")}
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
