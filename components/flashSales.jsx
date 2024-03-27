import React from "react";
import Link from "next/link";
import ProductCard from "./ProductCard";
import Timer from "./timer";
import baseUrl from "../helpers/baseUrl";

export default function FlashSales({ details, addToCart }) {
  return (
    <div className="py-8">
      <h2 className="px-3 mx-1  text-xl font-bold text-violet-900 sm:text-3xl">
        Flash Sales
      </h2>
      <div className="w-full px-3 mx-1 flex flex-row items-center">
        <div className="flex flex-row mr-auto  items-center">
          <p className="hidden md:block text-md font-bold text-emerald-500">
            On Sales Now
          </p>
          <h2 className="text-md font-bold pl-4 text-rose-500 ">Ending in</h2>
          <Timer />
        </div>

        <div class=" ml-auto  mb-6 h-12 w-44 flex justify-center items-center">
          <div class="h-12 w-44 border border-violet-400 items-center rounded-full shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out"></div>
          <Link
            href={""}
            class="text-center text-violet-500 font-semibold z-10 pointer-events-none"
          >
            Show More
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3 ">
        <ProductCard details={details} addToCart={addToCart} />
        {/* <ProductCard details={details} addToCart={addToCart} />
        <ProductCard details={details} addToCart={addToCart} /> */}
      </div>
    </div>
  );
}
