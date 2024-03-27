"use client";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

function SliceCategory() {
  const CategoriesData = [
    {
      id: 1,
      name: "T-Shirts",
      link: "/tshirts",
      image:
        "https://th.bing.com/th/id/R.26c61a7db28558cc679c881b462bdf0d?rik=wHhp2j3%2bNUWtsA&pid=ImgRaw&r=0",
    },
    {
      id: 2,
      name: "Mugs",
      link: "/mugs",
      image:
        "https://th.bing.com/th/id/R.14a348302bddc6d3afc5b3733f39cddc?rik=PHJttrw%2bI6KCew&pid=ImgRaw&r=0",
    },
    {
      id: 3,
      name: "Books",
      link: "/book",
      image:
        "https://th.bing.com/th/id/OIP.6TSI2meSPYX3i2L9kfBYkgHaEB?rs=1&pid=ImgDetMain",
    },
    {
      id: 4,
      name: "Hoodies",
      link: "/hoodies",
      image:
        "https://th.bing.com/th/id/R.8b4a314175ade2cdeacf28dd3e2d6201?rik=tMOGHDddcVQEXQ&pid=ImgRaw&r=0",
    },
    {
      id: 5,
      name: "Shoes",
      link: "/shoes",
      image:
        "https://th.bing.com/th/id/R.d517ca7838e27df01decc9d70f292071?rik=bI4yhKuy7dDAyg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fshoes-png-sneaker-png-transparent-image-2500.png&ehk=kyWee4brz%2frLtbcCcpd%2flVSuWY6gQv%2b7nouzn%2f%2fsues%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      id: 6,
      name: "T-Shirt",
      link: "/tshirts",
      image:
        "https://th.bing.com/th/id/R.26c61a7db28558cc679c881b462bdf0d?rik=wHhp2j3%2bNUWtsA&pid=ImgRaw&r=0",
    },
    {
      id: 7,
      name: "Hoodies",
      link: "/hoodies",
      image:
        "https://th.bing.com/th/id/R.778a57c8708b7aa703db0cfe59bfa96c?rik=6zhXpyikEOKdqQ&pid=ImgRaw&r=0",
    },
    {
      id: 8,
      name: "Coat",
      link: "/coat",
      image:
        "https://th.bing.com/th/id/R.8b4a314175ade2cdeacf28dd3e2d6201?rik=tMOGHDddcVQEXQ&pid=ImgRaw&r=0",
    },
    {
      id: 9,
      name: "Food",
      link: "/food",
      image:
        "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Pizza_BrowseHome@3x.png",
    },
    {
      id: 10,
      name: "Clothes",
      link: "/tshirts",
      image:
        "https://th.bing.com/th/id/OIP.l045a-PeGXTd_JVPkW4F-wHaHa?rs=1&pid=ImgDetMain",
    },
  ];
  return (
    <div className="relative">
      <Swiper
        slidesPerView={4}
        spaceBetween={8}
        navigation={true}
        slidesPerGroup={1}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 4,
            spaceBetween: 8,
            slidesPerGroup: 1,
            loop: true,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 8,
            slidesPerGroup: 1,
            loop: true,
          },
          1024: {
            slidesPerView: 8,
            spaceBetween: 8,
            slidesPerGroup: 1,
            loop: true,
          },
          1440: {
            slidesPerView: 10,
            spaceBetween: 8,
            slidesPerGroup: 1,
            loop: true,
          },
        }}
        modules={[Navigation]}
        className="category-slider my-2"
      >
        {CategoriesData.map((category, index) => {
          return (
            <SwiperSlide key={index} className="group w-96">
              <Link
                href={category.link}
                className="text-center cursor-pointer p-3 bg-transparent rounded-lg"
              >
                <div className="bg-white p-2 mx-auto w-16 h-16 rounded-full shadow-md">
                  <div className="box-border inline-block overflow-hidden w-auto h-auto bg-transparent opacity-100 border-0 m-0 p-0 max-w-full">
                    <Image
                      src={category.image}
                      height={1000}
                      width={1000}
                      alt={category.name}
                    />
                  </div>
                </div>
                <div className="w-full flex justify-center ">
                  <h3 className="text-sm w-[100px] text-gray-600 mt-2 truncate group-hover:text-orange-500">
                    {category.name}
                  </h3>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default SliceCategory;
