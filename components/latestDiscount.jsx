import React from "react";
import Link from "next/link";

function LatestDiscountCouponCode({ data }) {
  const CategoriesData = [
    {
      name: "T-Shirts",
      link: "/tshirts",
    },
    {
      name: "Hoodies",
      link: "/hoodies",
    },
    {
      name: "Mugs",
      link: "/mugs",
    },
    {
      name: "Books",
      link: "/books",
    },
    {
      name: "Clothes",
      link: "/clothes",
    },
    {
      name: "Food",
      link: "/food",
    },
    {
      name: "T-shirts",
      link: "/tshirts",
    },

    {
      name: "Hoodies",
      link: "/hoodies",
    },
    {
      name: "Food",
      link: "/food",
    },
  ];

  return (
    <div className="h-[40vh] overflow-y-scroll mx-4 block md:flex lg:flex md:justify-between lg:justify-between items-center bg-white rounded-md">
      <div className="relative h-full grid gap-2 p-6">
        {CategoriesData.map((category, index) => (
          <Link
            href={category.link}
            key={index}
            className=" p-2 flex items-center rounded-md hover:bg-gray-50 w-full hover:text-violet-600"
          >
            <div className="ml-3 inline-flex items-center justify-between w-full hover:text-violet-600">
              {category.name}
              <span className="transition duration-700 ease-in-out inline loading-none items-end text-gray-400">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="48"
                    d="M184 112l144 144-144 144"
                  ></path>
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default LatestDiscountCouponCode;
