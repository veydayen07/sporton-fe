"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import CartPopUp from "../ui/CartPopUp";

const HeaderLayout = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <header className="">
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
            <div className="absolute w-3.25 h-3.25 font-medium text-[9px] rounded-full bg-primary flex justify-center items-center text-white -top-1 -right-1.25">
              3
            </div>
          </div>
          {isCartOpen && <CartPopUp />}
        </div>
      </div>
    </header>
  );
};

export default HeaderLayout;
