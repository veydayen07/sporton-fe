import { priceFormatter } from "@/app/utils/price-formatter";
import Image from "next/image";
import React from "react";
import ProductActions from "./../../product-detail/ProductActions";
import { getProductById } from "@/app/services/products.service";
import { BASE_API_URL } from "@/app/lib/api";

const ProductDetail = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const product = await getProductById(id);
  console.log(product);
  return (
    <div className="container mx-auto flex gap-12 py-20" key={product._id}>
      <div className="bg-primary-light aspect-square min-w-140 flex justify-center items-center">
        <Image
          src={`${BASE_API_URL}${product.imageUrl}`}
          width={550}
          height={550}
          alt={product.name}
          className="aspect-square object-contain w-full"
        />
      </div>
      <div className="w-full py-7 ">
        <div className="flex flex-col gap-5 mb-7.5">
          <h1 className="font-bold text-5xl leading-normal">{product.name}</h1>
          <span className="font-normal bg-primary-light px-6 py-2.25 rounded-full text-base text-primary w-fit leading-normal">
            {product.category ? product.category.name : "Category"}
          </span>
          <p className="text-black/75 text leading-7.5">
            {product.description}
          </p>
        </div>{" "}
        <p className="text-primary text-4xl font-semibold leading-normal mb-12">
          {priceFormatter(product.price)}
        </p>
        <ProductActions stock={product.stock} />
      </div>
    </div>
  );
};

export default ProductDetail;
