"use client";
import React from "react";
import CardWithHeader from "../ui/cardWithHeader";
import { cartList } from "../../data/cartItems";
import Image from "next/image";
import { priceFormatter } from "@/app/utils/price-formatter";
import { FiCreditCard, FiTrash2 } from "react-icons/fi";
import Button from "../ui/button";
import { useRouter } from "next/navigation";

const CartItems = () => {
  const { push } = useRouter();
  return (
    <CardWithHeader header="Cart Items">
      <div className="overflow-auto max-h-75">
        {cartList.map((item, index) => (
          <div
            key={index}
            className="pl-4 pr-5 py-4 border-b border-[#E4E4E4] flex justify-between items-center"
          >
            <div className="flex gap-2.75">
              <div className="aspect-square bg-primary-light p-0.5  flex items-center">
                <Image
                  width={63}
                  height={63}
                  alt={item.name}
                  src={`/images/products/${item.imgUrl}`}
                  className="object-contain aspect-square"
                />
              </div>
              <div className="flex flex-col gap-px justify-center">
                <span className="font-medium text-sm">{item.name}</span>
                <div className="flex gap-1.5">
                  <span className="font-medium text-xs">{item.qty}X</span>
                  <span className="text-primary font-medium text-xs">
                    {priceFormatter(item.price)}
                  </span>
                </div>
              </div>
            </div>
            <i className="w-5 h-5 flex items-center ">
              <FiTrash2 strokeWidth={1.5} className="text-black" />
            </i>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-3.5 pb-5">
        <div className="px-5 pt-3.25  flex items-center justify-between">
          <span className="text-sm font-semibold">Total</span>{" "}
          <span className="text-xs font-semibold text-primary">
            {priceFormatter(
              cartList.reduce(
                (total, item) => total + item.price * item.qty,
                0,
              ),
            )}
          </span>
        </div>
        <div className="px-5 w-full ">
          <Button
            variant="dark"
            className="w-full"
            onClick={() => push("/payment")}
          >
            Proceed to Payment{" "}
            <FiCreditCard width={22} height={22} className="text-white" />
          </Button>
        </div>
      </div>
    </CardWithHeader>
  );
};

export default CartItems;
