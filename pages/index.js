import Head from "next/head";
import Link from "next/link";
import Hero from "../components/hero";
import Product from "../models/Product";
import mongoose from "mongoose";
import ProductCard from "../components/ProductCard";
import HorizontalCatagory from "../components/horizontalCatagory";
import FlashSales from "../components/flashSales";
import CodeCommercemall from "./codeCommercemall";

const Home = ({ product, addToCart }) => {
  return (
    <div>
      <Head>
        <title>SastoBazar - Explore & Shop!</title>
        <meta name="description" content="Explore & Shop" />
        <meta httpEquiv="X-UA-Compatible" content="" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="keywords" content="Explore & Shop" />
      </Head>

      <div className="">
        <Hero width={1200} height={200} />
      </div>
      <div className="w-full px-2 md:px-16">
        <HorizontalCatagory />
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 pb-12 pt-2 mx-auto">
          <FlashSales details={product} addToCart={addToCart} />
          <CodeCommercemall details={product} addToCart={addToCart} />
          <div className="w-full px-3 mx-1 py-8 flex flex-row items-center">
            <h2 className="text-xl mr-auto font-bold text-violet-900 sm:text-3xl">
              Featured Products
            </h2>
            <div class=" ml-auto h-12 w-44 flex justify-center items-center">
              <div class="h-12 w-44 border border-violet-400 items-center rounded-full shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out"></div>
              <Link
                href={""}
                class="text-center text-violet-500 font-semibold z-10 pointer-events-none"
              >
                Show More
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3 ">
            <ProductCard details={product} addToCart={addToCart} />
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

  let products = await Product.find();

  let product = {};
  for (let item of products) {
    if (item.title in product) {
      if (item.availableQty > 0) {
        product[item.title].availableQty += item.availableQty;
      }
      if (
        !product[item.title].color.includes(item.color) &&
        item.availableQty > 0
      ) {
        product[item.title].color.push(item.color);
      }
      if (
        !product[item.title].size.includes(item.size) &&
        item.availableQty > 0
      ) {
        product[item.title].size.push(item.size);
      }
    } else {
      product[item.title] = JSON.parse(JSON.stringify(item));
      if (item.availableQty > 0) {
        product[item.title].color = [item.color];
        product[item.title].size = [item.size];
      } else {
        product[item.title].color = [];
        product[item.title].size = [];
      }
    }
  }
  return {
    props: { product: JSON.parse(JSON.stringify(product)) },
  };
}
export default Home;
