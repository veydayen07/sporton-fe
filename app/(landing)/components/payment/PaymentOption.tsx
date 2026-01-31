import React from "react";
import CardWithHeader from "../ui/cardWithHeader";
import { FiCreditCard } from "react-icons/fi";

type TPaymentOption = {
  className?: string;
};
type TPayment = {
  bank_name: string;
  account_number: number;
};

const paymentList: TPayment[] = [
  {
    bank_name: "BCA",
    account_number: 1231231231231,
  },
  {
    bank_name: "Mandiri",
    account_number: 89458434,
  },
  {
    bank_name: "BRI",
    account_number: 123891283912,
  },
];

const PaymentOption = ({ className }: TPaymentOption) => {
  return (
    <div className={`${className}`}>
      <CardWithHeader header="Payment Option">
        <div className="border border-gray-100 ">
          {paymentList.map((payment, index) => (
            <div
              key={index}
              className="flex justify-between px-6.5 py-7 border-b border-gray-100"
            >
              <div className="flex gap-4.5">
                <div className="p-3.75 bg-blue-100 h-fit w-fit">
                  <FiCreditCard
                    size={23}
                    strokeWidth={2}
                    className="text-blue-500"
                  />
                </div>
                <div className="flex flex-col justify-center gap-0.5">
                  <span className="font-bold text-base ">
                    {payment.bank_name}
                  </span>
                  <span className="font-regular text-sm ">
                    {payment.account_number}
                  </span>
                </div>
              </div>
              <span className="px-2 py-0.75 text-xs self-center">
                Bank Transfer
              </span>
            </div>
          ))}
        </div>
      </CardWithHeader>
    </div>
  );
};

export default PaymentOption;
