import React from "react";
import Link from "next/link";
import { IoFastFoodOutline } from "react-icons/io5";
import { GiClothes } from "react-icons/gi";
import { IoBookSharp } from "react-icons/io5";

export default function SideCatagory() {
  return (
    <div className="h-[60vh] py-8 w-full rounded-lg shadow-md">
      <ul className="gap-8">
        <li className="pl-8">
          <Link
            href={"/hoodies"}
            className={
              " flex flex-row  px-2 justify-start items-center text-gray-500 font-roboto text-[14px]"
            }
          >
            <IoFastFoodOutline className="h-6 w-6 bg-gray-200 rounded-full p-1 mr-4" />
            Food
          </Link>
        </li>
        <li className="pl-8">
          <Link
            href={"/hoodies"}
            className={
              "my-2 flex flex-row px-2 justify-start items-center text-gray-500 font-roboto text-[14px]"
            }
          >
            <GiClothes className="h-6 w-6 bg-gray-200 rounded-full p-1 mr-4" />
            Clothes
          </Link>
        </li>
        <li className="pl-8">
          <Link
            href={"/hoodies"}
            className={
              "my-2 flex flex-row px-2 justify-start items-center text-gray-500 font-roboto text-[14px]"
            }
          >
            <IoBookSharp className="h-6 w-6 bg-gray-200 rounded-full p-1 mr-4" />
            Books
          </Link>
        </li>
        <li className="pl-8">
          <Link
            href={"/hoodies"}
            className={
              "my-2 flex flex-row px-2 justify-start items-center text-gray-500 font-roboto text-[14px]"
            }
          >
            <IoFastFoodOutline className="h-6 w-6 bg-gray-200 rounded-full p-1 mr-4" />
            Food
          </Link>
        </li>
        <li className="pl-8">
          <Link
            href={"/hoodies"}
            className={
              "my-2 flex flex-row px-2 justify-start items-center text-gray-500 font-roboto text-[14px]"
            }
          >
            <GiClothes className="h-6 w-6 bg-gray-200 rounded-full p-1 mr-4" />
            Clothes
          </Link>
        </li>
        <li className="pl-8">
          <Link
            href={"/hoodies"}
            className={
              "my-2 flex flex-row px-2 justify-start items-center text-gray-500 font-roboto text-[14px]"
            }
          >
            <IoBookSharp className="h-6 w-6 bg-gray-200 rounded-full p-1 mr-4" />
            Books
          </Link>
        </li>
      </ul>
    </div>
  );
}
