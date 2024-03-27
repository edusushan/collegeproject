import React, { useEffect } from "react";
import aboutUs from "../public/contact.jpg";

const About = () => {
  return (
    <div className="bg-gray-50">
      <div className="flex about-banner justify-center py-10 lg:py-20 bg-page-header-bg bg-indigo-100 w-full bg-cover bg-no-repeat bg-bottom bg-page-header ">
        <div className="flex mx-auto w-full max-w-screen-2xl px-3 sm:px-10">
          <div className="w-full flex justify-center flex-col relative">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-center text-white">
              About US
            </h2>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-screen-2xl mx-auto lg:py-20 py-10 px-4 sm:px-10">
          <div className="grid grid-flow-row lg:grid-cols-2 gap-4 lg:gap-16 ">
            <div>
              <h3 className="text-xl lg:text-3xl mb-2  font-semibold">
                Welcome to our SastoBazar
              </h3>
              <div className="mt-3 text-base opacity-90 leading-7">
                <p className="mb-4">
                  At our online store, we&apos;re passionate about bringing
                  comfort, style, and inspiration into your everyday life.
                  Founded with a dedication to quality and creativity, we offer
                  a diverse range of products, from soft cloth books that ignite
                  imagination to cozy hoodies perfect for lounging in style. Our
                  curated selection of mugs adds a touch of charm to your
                  morning routine or evening relaxation.
                </p>

                <p>
                  Whether you&apos;re seeking literary treasures, fashionable
                  apparel, or unique homeware, our mission is to provide you
                  with exceptional items that enrich your life. With a
                  commitment to customer satisfaction and a love for all things
                  cozy and chic, we invite you to explore our collection and
                  discover the perfect pieces to enhance your comfort and joy.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-2 xl:gap-6 mt-8">
                <div className="p-8 bg-indigo-50 shadow-sm rounded-lg">
                  <span className="text-3xl block font-extrabold  mb-4 text-gray-800">
                    10K
                  </span>
                  <h4 className="text-lg font-bold mb-1">Listed Products</h4>
                  <p className="mb-0 opacity-90 leading-7">
                    Dynamically morph team driven partnerships after vertical.
                  </p>
                </div>
                <div className="p-8 bg-indigo-50 shadow-sm rounded-lg">
                  <span className="text-3xl block font-extrabold  mb-4 text-gray-800">
                    8K
                  </span>
                  <h4 className="text-lg  font-bold mb-1">Lovely Customer</h4>
                  <p className="mb-0 opacity-90 leading-7">
                    Competently productize virtual models without performance.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 ">
              <span
                style={{
                  boxSizing: "border-box",
                  display: "inline-block",
                  overflow: "hidden",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: "1",
                  border: "0",
                  margin: "0",
                  padding: "0",
                  position: "relative",
                  maxWidth: "100%",
                }}
              >
                <img
                  style={{
                    display: "block",
                    maxWidth: "100%",
                    width: "initial",
                    background: "none",
                    opacity: "1",
                    border: "0",
                    margin: "0",
                    padding: "0",
                  }}
                  src={"/about-us.png"}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
