"use client";
import React, { useState } from "react";
import Button from "../components/ui/button";
import {
  FiArrowRight,
  FiChevronDown,
  FiChevronUp,
  FiShoppingBag,
} from "react-icons/fi";
import { useRouter } from "next/navigation";

const ProductActions = () => {
  const { push } = useRouter();
  const [qty, setQty] = useState<number>(1);
  return (
    <div className="flex gap-6  ">
      <div className="min-w-20.5 border border-[#A0A0A0] w-fit flex">
        <div className="border-r border-[#A0A0A0] flex-2 flex items-center justify-center text-xl font-medium">
          {qty}
        </div>
        <div className="flex flex-col flex-1">
          <button
            className="border-b border-[#A0A0A0] flex justify-center items-center aspect-square cursor-pointer"
            onClick={() => setQty(qty + 1)}
          >
            <FiChevronUp />
          </button>
          <button
            className="flex justify-center items-center aspect-square cursor-pointer"
            onClick={() => setQty(qty === 1 ? qty : qty - 1)}
          >
            <FiChevronDown />
          </button>
        </div>
      </div>
      <Button
        variant="primary"
        className="flex gap-2 w-full items-center justify-center"
      >
        <i>
          <FiShoppingBag size={24} strokeWidth={2} />
        </i>
        <span>Add to Cart</span>
      </Button>
      <Button
        variant="dark"
        className="flex gap-3 w-full font-medium text-base items-center justify-center"
        onClick={() => push("/checkout")}
      >
        <span className="">Checkout Now</span>
        <i>
          <FiArrowRight size={24} strokeWidth={2} className="text-white " />
        </i>
      </Button>
    </div>

    // <div className="flex gap-5">
    //   <div className="border border-gray-500 inline-flex w-fit min-w-20.5">
    //     <div className="aspect-square text-xl font-medium border-r border-gray-500 flex justify-center items-center">
    //       <span>{2}</span>
    //     </div>
    //     <div className="flex flex-col">
    //       <button className="border-b border-gray-500 cursor-pointer h-1/2 aspect-square flex items-center justify-center">
    //         <FiChevronUp />
    //       </button>
    //       <button className="cursor-pointer h-1/2 aspect-square flex items-center justify-center">
    //         <FiChevronDown />
    //       </button>
    //     </div>
    //   </div>
    //   <Button className="px-20 w-full">
    //     <FiShoppingBag size={24} />
    //     Add to Cart
    //   </Button>
    //   <Button variant="dark" className="px-20 w-full">
    //     Checkout Now
    //     <FiArrowRight size={24} />
    //   </Button>
    // </div>
  );
};

export default ProductActions;
