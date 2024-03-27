import React from "react";
import Link from "next/link";
import ProductCard from "../components/ProductCard";

export default function CodeCommercemall({ details, addToCart }) {
  return (
    <>
      <div className="w-full px-3 mx-1 py-8 flex flex-row items-center">
        <h2 className="text-xl mr-auto font-bold text-violet-900 sm:text-3xl">
          SastoBazar Mall
        </h2>
        <div
          href=""
          className="p-2 text-md uppercase outline-none duration-200"
        >
          <div class=" mx-auto h-12 w-44 flex justify-center items-center">
            <div class="h-12 w-44 border border-violet-400 items-center rounded-full shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out"></div>
            <Link
              href={""}
              class="text-center text-violet-500 font-semibold z-10 pointer-events-none"
            >
              Show More
            </Link>
          </div>

          <div></div>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3 ">
        <ProductCard details={details} addToCart={addToCart} />
      </div>
    </>
  );
}
