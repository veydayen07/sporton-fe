import { getAllCategories } from "@/app/services/category.service";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiArrowRight } from "react-icons/fi";

type TCategoryList = {
  name: string;
  imgUrl: string;
};

const categoryList: TCategoryList[] = [
  {
    name: "Running",
    imgUrl: "category-running.png",
  },
  {
    name: "Tennis",
    imgUrl: "category-tennis.png",
  },
  {
    name: "Basketball",
    imgUrl: "category-basketball.png",
  },
  {
    name: "Football",
    imgUrl: "category-football.png",
  },
  {
    name: "Badminton",
    imgUrl: "category-badminton.png",
  },
  {
    name: "Swimming",
    imgUrl: "category-swimming.png",
  },
];

const Categories = async () => {
  const responseCategories = await getAllCategories();
  console.log(responseCategories);
  return (
    <section className="container mx-auto pb-20 flex flex-col gap-6">
      <div className="flex justify-between">
        <h2 className="font-bold text-2xl">Browse by Categories</h2>
        <Link
          href="#"
          className="text-primary font-medium flex gap-2 items-center"
        >
          <span>See all categories</span>{" "}
          <FiArrowRight width={14} height={14} />
        </Link>
      </div>
      <div className="grid grid-cols-6 gap-11.5">
        {categoryList.map((category, index) => (
          <div
            key={index}
            className="aspect-square w-full flex flex-col gap-2.5 justify-center items-center rounded-xl bg-linear-to-r from-[#F1F1F1] to-[#F7F7F7] text-primary "
          >
            <Image
              src={`/images/categories/${category.imgUrl}`}
              alt={category.name}
              width={86}
              height={86}
            />
            <span className="font-medium text-xl">{category.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
