import React, { useEffect, useState } from "react";
import Link from "next/link";

function TopNavbar({ loggedIn, userData, logout }) {
  return (
    <div className=" hidden lg:block bg-orange-500">
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-10">
        <div className="flex justify-between text-white text-xs py-2 font-sans font-medium border-b  ">
          <span className="flex  items-center ">
            Find Your Perfect Match. Embrace Comfort, Style, and Inspiration in
            Every Purchase!
          </span>
          <div className="flex items-center lg:text-right ">
            <Link
              href="/about"
              className=" !text-white !no-underline font-medium cursor-pointer hover:!text-violet-200"
            >
              About Us
            </Link>
            <span className="mx-2">|</span>
            <Link
              href="/contact"
              className="!no-underline !text-white font-medium cursor-pointer hover:!text-violet-200"
            >
              Contact Us
            </Link>
            <span className="mx-2">|</span>
            <Link
              href="/myaccount"
              className="!no-underline !text-white font-medium cursor-pointer hover:!text-violet-200"
            >
              My account
            </Link>
            <span className="mx-2">|</span>
            {!loggedIn && (
              <Link
                href={"/login"}
                className="!no-underline !text-white flex items-center font-medium cursor-pointer hover:!text-violet-200 "
              >
                <span className="mr-1">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </span>
                Login
              </Link>
            )}
            {loggedIn && (
              <button
                onClick={() => {
                  logout();
                }}
                className="!no-underline !text-white flex items-center font-medium cursor-pointer hover:!text-violet-200 "
              >
                <span className="mr-1">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </span>
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNavbar;
