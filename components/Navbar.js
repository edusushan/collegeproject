import Link from "next/link";
import Basket from "./basket";
import Image from "next/image";
import SearchBar from "./searchbar";
import UserProfile from "./userProfile";
import { useRouter } from "next/router";
import { HambergerSideMenu } from "./sideNav";
import { BsFillBagCheckFill } from "react-icons/bs";
import React, { useRef, useState, useEffect } from "react";
import { AiFillCloseCircle, AiFillDelete } from "react-icons/ai";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

const Navbar = ({
  cart,
  addToCart,
  removeFromCart,
  clearCart,
  subTotal,
  cartLength,
  loggedIn,
  logout,
  userData,
}) => {
  const ref = useRef();

  const router = useRouter();
  const [dropdown, setDropdown] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [page, setPage] = useState("/");
  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    setPage(router.route);
    setDropdown(false);
    let exempted = ["/checkout", "/orders", "/orders"];
    if (exempted.includes(router.route)) {
      setSidebar(false);
    }
  }, [router.route, setPage, setDropdown, setSidebar]);

  const toggleCart = () => {
    if (sidebar === true) {
      setSidebar(false);
    } else {
      setSidebar(true);
      setMobileNavOpen(false);
    }
  };
  const handleSideBars = () => {
    setMobileNavOpen((prev) => !prev);
    setSidebar(false);
  };
  return (
    <div
      className={`sticky bg-orange-500 top-0 z-20   ${
        sidebar && "overflow-hidden"
      }`}
    >
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-10">
        <div className="h-16 top-bar lg:h-auto flex items-center justify-between py-4 mx-auto">
          <div className=" lg:hidden flex gap-8 items-center">
            <button className="p-1 mx-2" onClick={handleSideBars}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-8 h-8 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          {mobileNavOpen && (
            <HambergerSideMenu
              user={userData}
              loggedIn={loggedIn}
              setPage={setPage}
              logout={logout}
              setMobileNavOpen={setMobileNavOpen}
            />
          )}
          <Link
            href="/"
            className="!no-underline mr-3 hidden xl:mr-12 md:hidden lg:block "
          >
            <span
              style={{
                boxSizing: "border-box",
                display: "inline-block",
                overflow: "hidden",
                width: "initial",
                height: "initial",
                background: "none",
                opacity: "1",
                border: "0px",
                margin: "0px",
                padding: " 0px",
                position: "relative",
                maxWidth: "100%",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  boxSizing: "border-box",
                  display: "block",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: "1",
                  border: "0px",
                  margin: "0px",
                  padding: " 0px",
                  maxWidth: "100%",
                  alignItems: "center",
                }}
              >
                <Image
                  src={"/logo1.png"}
                  className="flex items-center w-[160px] contrast-200 brightness-75 h-16 invert "
                  alt="Logo"
                  width={1000}
                  height={1000}
                />
              </span>
            </span>
          </Link>
          <SearchBar />
          <div className="hidden md:hidden md:items-center lg:flex xl:flex absolute inset-y-0 right-0 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Basket
              className="relative px-5 text-white text-2xl font-bold"
              toggleCart={toggleCart}
              cartLength={cartLength}
            />
            <div className="pl-5">
              <UserProfile />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`sidebar overflow-y-auto fixed top-0 right-0 bg-violet-200 px-6 py-10 transition-all duration-300 ${
          sidebar ? "right-0" : "-right-full"
        }  w-72 md:w-96 2xl:w-[25vw] h-[100vh] shadow-lg shadow-gray-500 z-20 font-medium`}
        ref={ref}
      >
        <h2 className="font-bold text-xl text-center mb-2 font-roboto text-violet-800 xl:text-2xl 2xl:text-3xl">
          Shopping Cart
        </h2>
        <span className="absolute top-4 right-6" onClick={toggleCart}>
          <AiFillCloseCircle className="text-2xl cursor-pointer text-red-500" />
        </span>
        <ol className="list-decimal">
          {Object.keys(cart).length === 0 && (
            <div className="text-center my-5 font-light font-firasans">
              Your cart is Empty ! 😵‍💫
            </div>
          )}
          {Object.keys(cart).map((k) => {
            return (
              <li key={k}>
                <div className="item flex flex-wrap my-3 text-base 2xl:text-lg font-firasans font-medium text-black">
                  <div className="w-[40%]">
                    {cart[k].name} ({cart[k].variant}/{cart[k].size})
                  </div>
                  <div>
                    <Image
                      src={cart[k]?.img}
                      height={1000}
                      width={1000}
                      className="object-cover rounded-lg w-full h-[12vh] block mx-auto ml-2 mr-2"
                      alt="product"
                    />
                  </div>
                  <div className="w-1/3 flex items-center justify-center gap-5 text-lg">
                    <AiFillMinusCircle
                      onClick={() =>
                        removeFromCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].variant
                        )
                      }
                      className="text-xl text-violet-600 cursor-pointer"
                    />
                    <div>{cart[k].qty}</div>
                    <AiFillPlusCircle
                      onClick={() => {
                        addToCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].variant,
                          cart[k].img
                        );
                      }}
                      className="text-xl text-violet-600 cursor-pointer"
                    />
                  </div>
                </div>
                <hr className="text-black opacity-100  border-top-2 border-gray-400 text-lg w-full font-bold " />
              </li>
            );
          })}
        </ol>
        <div className="subtotal font-bold font-robotoslab mt-10 ml-2">
          SubTotal: Rs. {subTotal}
        </div>
        <div className="flex flex-col lg:flex-row gap-4 mt-10 lg:gap-1 justify-center items-center my-2 lg:space-x-2">
          <Link href={"/checkout"}>
            <button
              disabled={Object.keys(cart).length === 0 ? true : false}
              className="disabled:bg-violet-300 disabled:shadow-none font-firasans bg-violet-500 py-1 text-lg px-8 md:px-2 text-violet-100 font-medium text-center rounded-md shadow-lg shadow-gray-700/60 hover:bg-violet-700 flex items-center justify-center space-x-2"
            >
              <BsFillBagCheckFill />
              <span>CheckOut</span>
            </button>
          </Link>
          <button
            disabled={Object.keys(cart).length === 0 ? true : false}
            className="disabled:bg-red-400 disabled:shadow-none font-firasans bg-red-600 py-1 text-lg px-8 md:px-2 text-violet-100 font-medium text-center rounded-md shadow-lg shadow-gray-700/60 hover:bg-red-800 flex items-center justify-center space-x-2"
            onClick={clearCart}
          >
            <AiFillDelete />
            <span>Clear Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
