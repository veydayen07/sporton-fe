import React from "react";
import { cartList } from "../../data/cartItems";
import { FiArrowRight, FiTrash2 } from "react-icons/fi";
import Image from "next/image";
import { priceFormatter } from "@/app/utils/price-formatter";
import Button from "./button";

const CartPopUp = () => {
  return (
    <div className="w-90 absolute right-0 top-16 border border-[#E4E4E4] z-10 shadow-lg flex flex-col bg-white py-4">
      <span className="w-full text-center text-base font-bold pb-2.5 border-b border-[#E4E4E4D1]/82">
        Shopping Cart
      </span>
      <div className="flex flex-col justify-center">
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
      <div className="pt-2.75 px-4 flex justify-between  items-center mb-3.75">
        <span className="font-semibold text-sm">Total</span>
        <span className="font-semibold text-xs text-primary">
          {priceFormatter(
            cartList.reduce((total, item) => total + item.price * item.qty, 0),
          )}
        </span>
      </div>
      <div className="px-4">
        <Button variant="dark" size="small" className="flex gap-2.75 w-full">
          Checkout Now
          <FiArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default CartPopUp;
