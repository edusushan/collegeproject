import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen w-screen bg-gray-100 flex items-center">
      <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
        <div className="max-w-md">
          <div className="text-5xl font-dark font-bold">404</div>
          <p className="text-2xl md:text-3xl font-light leading-normal">
            Sorry we couldn&apos;t find this page.
          </p>
          <p className="mb-8">
            But don&apos;t worry, you can find plenty of other things on our
            homepage.
          </p>

          <Link
            href={"/"}
            className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-orange bg-orange-600 active:bg-orange-600 hover:bg-orange-700"
          >
            back to homepage
          </Link>
        </div>
        <div className=" max-w-lg">
          <img
            className="rounded-md h-[120px] w-full"
            src={"/shoperror.gif"}
            alt="404"
          />
        </div>
      </div>
    </div>
  );
}
