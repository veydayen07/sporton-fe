import { priceFormatter } from "@/app/utils/price-formatter";
import Image from "next/image";
import React from "react";
import ProductActions from "./../../product-detail/ProductActions";

const ProductDetail = () => {
  return (
    <div className="container mx-auto flex gap-12 py-20">
      <div className="bg-primary-light aspect-square min-w-140 flex justify-center items-center">
        <Image
          src={"/images/products/product-4.png"}
          width={550}
          height={550}
          alt="product 4"
          className="aspect-square object-contain w-full"
        />
      </div>
      <div className="w-full py-7 ">
        <div className="flex flex-col gap-5 mb-7.5">
          <h1 className="font-bold text-5xl leading-normal">
            SportsOn HyperSoccer v2
          </h1>
          <span className="font-normal bg-primary-light px-6 py-2.25 rounded-full text-base text-primary w-fit leading-normal">
            Football
          </span>
          <p className="text-black/75 text leading-7.5">
            The SportsOn HyperSoccer v2 is engineered for the player who demands
            precision, power, and unrivaled speed on the pitch. Featuring a
            striking, two-toned black and white design with deep crimson
            accents, these cleats don&apos;t just perform—they make a statement.
            Experience the future of football footwear with v2&apos;s enhanced
            fit and cutting-edge traction.
          </p>
        </div>{" "}
        <p className="text-primary text-4xl font-semibold leading-normal mb-12">
          {priceFormatter(4500000)}
        </p>
        <ProductActions />
      </div>
    </div>
  );
};

export default ProductDetail;
