import React from "react";
import mongoose from "mongoose";
import Product from "../models/Product";
import Link from "next/link";
import ProductCard from "../components/ProductCard";

const Hoodies = ({ hoodies }) => {
  return (
    <div>
      <h2 className="text-center mt-10 font-firasans text-3xl -mb-10 text-purple-900/75 font-semibold">
        Shop the Perfect Hoodies for Winter Coding
      </h2>
      <section className="text-gray-600 body-font">
        <div className="container py-24 sm:w-[50%] md:w-[90%] lg:w-[95%] w-[90%] mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            <ProductCard details={hoodies} />
          </div>
        </div>
      </section>
    </div>
  );
};

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    mongoose.connect(process.env.MONGO_URI);
  }

  let products = await Product.find({ category: "hoodies" });

  let hoodies = {};
  for (let item of products) {
    if (item.title in hoodies) {
      if (item.availableQty > 0) {
        hoodies[item.title].availableQty += item.availableQty;
      }
      if (
        !hoodies[item.title].color.includes(item.color) &&
        item.availableQty > 0
      ) {
        hoodies[item.title].color.push(item.color);
      }
      if (
        !hoodies[item.title].size.includes(item.size) &&
        item.availableQty > 0
      ) {
        hoodies[item.title].size.push(item.size);
      }
    } else {
      hoodies[item.title] = JSON.parse(JSON.stringify(item));
      if (item.availableQty > 0) {
        hoodies[item.title].color = [item.color];
        hoodies[item.title].size = [item.size];
      } else {
        hoodies[item.title].color = [];
        hoodies[item.title].size = [];
      }
    }
  }
  return {
    props: { hoodies: JSON.parse(JSON.stringify(hoodies)) }, // will be passed to the page component as props
  };
}

export default Hoodies;
