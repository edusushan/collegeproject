import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export function HambergerSideMenu({
  setMobileNavOpen,
  loggedIn,
  setPage,
  logout,
  user,
}) {
  const router = useRouter();
  const [dropdown, setDropdown] = useState(false);
  useEffect(() => {
    setPage(router.route);
    setDropdown(false);
    let exempted = ["/checkout"];
    if (exempted.includes(router.route)) {
      setMobileNavOpen(false);
    }
  }, [setMobileNavOpen, router.route, setPage]);

  return (
    <div className="fixed z-50 flex flex-col bg-clip-border rounded-md bg-violet-50 text-gray-700 h-[100vh] top-0 left-0 w-[300px] p-4 shadow-xl shadow-orange-gray-900/5 lg:hidden sm:block">
      <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-semibold text-gray-700">
        <div
          className={`flex flex-row w-full ${
            loggedIn ? "justify-between" : "justify-end"
          } mb-4`}
        >
          {loggedIn && (
            <p className="text-lg text-violet-600">Welcome {user.name}</p>
          )}
          <span
            onClick={() => setMobileNavOpen(false)}
            className="w-8 h-8 border-[1px] rounded-full border-white top-2 right-1 text-red-600 text-2xl flex justify-center items-center cursor-pointer  duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </span>
        </div>
        <h1 className="w-full p-2 rounded-lg text-md text-start text-violet-600 font-bold leading-tight transition-all">
          Catagory
        </h1>
        <Link
          href={"/hoodies"}
          role="button"
          onClick={() => setMobileNavOpen(false)}
          tabIndex="0"
          className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-orange-50 hover:bg-opacity-80 focus:bg-orange-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-gray-500 focus:text-white active:text-white outline-none"
        >
          <div className="grid place-items-center mr-4"></div>
          Hoodies
        </Link>

        <Link
          href={"/mugs"}
          role="button"
          onClick={() => setMobileNavOpen(false)}
          tabIndex="0"
          className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-orange-50 hover:bg-opacity-80 focus:bg-orange-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-gray-500 focus:text-white active:text-white outline-none"
        >
          <div className="grid place-items-center mr-4"></div>
          Mugs
        </Link>

        <Link
          href={"/tshirts"}
          role="button"
          onClick={() => setMobileNavOpen(false)}
          tabIndex="0"
          className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-orange-50 hover:bg-opacity-80 focus:bg-orange-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-gray-500 focus:text-white active:text-white outline-none"
        >
          <div className="grid place-items-center mr-4"></div>
          Tshirts
        </Link>
        <h1 className="w-full p-2 rounded-lg text-md text-start text-violet-600 font-bold leading-tight transition-all">
          Profile
        </h1>
        {!loggedIn && (
          <Link
            href={"/login"}
            role="button"
            onClick={() => setMobileNavOpen(false)}
            className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-orange-50 hover:bg-opacity-80 focus:bg-orange-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-gray-500 focus:text-white active:text-white outline-none"
          >
            <div className="grid place-items-center mr-4"></div>
            SignIn
          </Link>
        )}
        {loggedIn && (
          <>
            <Link
              href={"/myaccount"}
              role="button"
              onClick={() => setMobileNavOpen(false)}
              className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-orange-50 hover:bg-opacity-80 focus:bg-orange-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-gray-500 focus:text-white active:text-white outline-none"
            >
              <div className="grid place-items-center mr-4"></div>
              My Account
            </Link>
            <Link
              href={"/orders"}
              role="button"
              onClick={() => setMobileNavOpen(false)}
              className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-orange-50 hover:bg-opacity-80 focus:bg-orange-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-gray-500 focus:text-white active:text-white outline-none"
            >
              <div className="grid place-items-center mr-4"></div>
              Orders
            </Link>
            <Link
              href={"/trackyourorder"}
              role="button"
              onClick={() => setMobileNavOpen(false)}
              className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-orange-50 hover:bg-opacity-80 focus:bg-orange-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-gray-500 focus:text-white active:text-white outline-none"
            >
              <div className="grid place-items-center mr-4"></div>
              Track Your Order
            </Link>
            <Link
              href={"/trackyourorder"}
              role="button"
              onClick={() => {
                setMobileNavOpen(false);
                setDropdown(false);
                logout();
              }}
              className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-orange-50 hover:bg-opacity-80 focus:bg-orange-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-gray-500 focus:text-white active:text-white outline-none"
            >
              <div className="grid place-items-center mr-4"></div>
              Log Out
            </Link>
          </>
        )}
      </nav>
    </div>
  );
}
