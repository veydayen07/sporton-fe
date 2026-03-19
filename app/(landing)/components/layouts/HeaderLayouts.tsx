"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import CartPopUp from "../ui/CartPopUp";
import { useCartStore } from "@/app/hooks/useCartHooks";

const HeaderLayout = () => {
  const { items } = useCartStore();
  const totalCart = items.reduce((total, item) => total + item.qty, 0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <header className="fixed backdrop-blur-xl w-full z-50">
      <div className="flex container mx-auto py-7 justify-between">
        <Link href={"/"}>
          {" "}
          <Image
            src={"/images/logo.svg"}
            alt="logo"
            width={127}
            height={29.74}
            className=""
          />
        </Link>

        <nav className="flex gap-22.75 font-medium items-center text-base">
          <Link
            href="#"
            className="relative after:absolute  after:content-[''] after:block after:h-0.75 after:bg-primary after:w-[46%] after:left-1/2 after:-translate-x-1/2 after:translate-y-0.75"
          >
            Home
          </Link>
          <Link href="#">Category</Link>
          <Link href="#">Explore Products</Link>
        </nav>
        <div className="flex gap-10">
          <FiSearch size={24} strokeWidth={2} />
          <div
            className="relative cursor-pointer"
            onClick={() => setIsCartOpen(!isCartOpen)}
          >
            <FiShoppingBag size={24} strokeWidth={2} />
            {items.length > 0 && (
              <div
                className={`absolute w-3.25 h-3.25 px-2.5 py-2.5 -top-2.5 -right-2.5 font-medium text-[9px] rounded-full bg-primary flex justify-center items-center text-white `}
                // className={`absolute w-3.25 h-3.25 ${totalCart > 99 ? "p-2.5 -top-2 -right-1.5" : "p-2 -top-1 -right-1.25"} font-medium text-[9px] rounded-full bg-primary flex justify-center items-center text-white `}
              >
                {totalCart > 99 ? "99+" : totalCart}
              </div>
            )}
          </div>
          {isCartOpen && <CartPopUp />}
        </div>
      </div>
    </header>
  );
};

export default HeaderLayout;
