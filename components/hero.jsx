import React from "react";
import Carousel from "./carousel";
import LatestDiscountCouponCode from "./latestDiscount";

export default function Hero() {
  return (
    <div className="bg-violet-50">
      <div className="mx-auto py-5 max-w-screen-2xl px-3 sm:px-10">
        <div className="flex w-full">
          <div className="w-full hidden lg:flex">
            <div className="w-full group">
              <div className="bg-gray-50 h-full border-2 border-violet-500 transition duration-150 ease-linear transform group-hover:border-emerald-500 rounded shadow">
                <div className="bg-orange-100 text-gray-900 px-6 py-2 rounded-t border-b flex items-center justify-center">
                  <h3 className="text-base  font-normal ">
                    Browse By Your Favourite Products
                  </h3>
                </div>
                <div className="overflow-hidden">
                  <LatestDiscountCouponCode />
                </div>
              </div>
            </div>
          </div>
          <div className=" flex-shrink-0 lg:pl-6 lg:block w-full lg:w-4/5">
            <Carousel className={"h-80"} />
          </div>
        </div>
      </div>
    </div>
  );
}
