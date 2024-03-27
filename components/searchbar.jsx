import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import baseUrl from "../helpers/baseUrl";
import { useRouter } from "next/router";

function SearchBar() {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [sData, setSdata] = useState([]);
  const [matchingItems, setMatchingItems] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const fetchAddress = async () => {
    const response = await axios.get(`${baseUrl}/api/fetchallproducts`, {});
    if (response.data.success === true) {
      setSdata(response.data.products || []);
    }
  };

  useEffect(() => {
    fetchAddress();
  }, []);

  useEffect(() => {
    const filteredItems = sData.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    console.log(filteredItems);

    setMatchingItems(filteredItems);
  }, [value, sData]);
  const handleItemClick = (slug) => {
    router.push(`/products/${slug}`);
    setShowPopup(false);
    setValue("");
  };
  return (
    <div className="relative w-full transition-all duration-200 ease-in-out lg:flex lg:max-w-[520px] xl:max-w-[750px] 2xl:max-w-[900px] md:mx-12 lg:mx-4 xl:mx-0">
      <div className="w-full flex flex-col justify-center flex-shrink-0 relative z-10">
        <div className="flex flex-col mx-auto w-full">
          <div className="relative pr-12 md:pr-14 bg-violet-50 overflow-hidden shadow-sm rounded-md w-full">
            <label className="flex items-center py-0.5">
              <input
                value={value}
                name="value"
                onChange={(e) => setValue(e.target.value)}
                onFocus={() => setShowPopup(true)}
                className="form-input w-full pl-5 appearance-none transition ease-in-out border text-input text-sm font-sans rounded-md min-h-10 h-10 duration-200 bg-white focus:ring-0 outline-none border-none focus:outline-none placeholder-gray-500 placeholder-opacity-75"
                placeholder="Search for products"
              />
            </label>
            <div
              type="submit"
              aria-label="Search"
              className="outline-none text-xl text-gray-400 absolute top-0 right-0 end-0 w-12 md:w-14 h-full flex items-center justify-center transition duration-200 ease-in-out hover:text-heading focus:outline-none"
            >
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
                  strokeMiterlimit="10"
                  strokeWidth="32"
                  d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                ></path>
                <path
                  fill="none"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="32"
                  d="M338.29 338.29L448 448"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        {showPopup && (
          <div className="absolute flex flex-col top-full left-0 mt-2 bg-white shadow-md rounded-md border border-gray-200 w-full max-h-48 overflow-y-auto z-20">
            {matchingItems.map((item, index) => (
              <div
                key={index}
                className="p-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleItemClick(item?.slug)}
              >
                {item?.title}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
