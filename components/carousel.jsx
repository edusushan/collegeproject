import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import Book from "../public/home.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Carousel() {
  const data = [
    {
      link: "https://th.bing.com/th/id/R.983665d6fc3d07ac2de003f081539b29?rik=rIvFhMGBG0dOgQ&riu=http%3a%2f%2fwww.blog.sagmart.com%2fwp-content%2fuploads%2f2017%2f12%2fnew-year-2018-offers.jpg&ehk=7mOVBW4Vu2Ou%2fyQri94Z5skIKbqFusJz8ugl0vMfhuU%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      link: "https://th.bing.com/th/id/R.ed84b4a33fe2cebc5ff27d1a61edb7b2?rik=6IjMfWfZCbY4Lg&pid=ImgRaw&r=0",
    },
    {
      link: "https://th.bing.com/th/id/R.983665d6fc3d07ac2de003f081539b29?rik=rIvFhMGBG0dOgQ&riu=http%3a%2f%2fwww.blog.sagmart.com%2fwp-content%2fuploads%2f2017%2f12%2fnew-year-2018-offers.jpg&ehk=7mOVBW4Vu2Ou%2fyQri94Z5skIKbqFusJz8ugl0vMfhuU%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      link: "https://th.bing.com/th/id/R.ed84b4a33fe2cebc5ff27d1a61edb7b2?rik=6IjMfWfZCbY4Lg&pid=ImgRaw&r=0",
    },
    {
      link: "https://static.vecteezy.com/system/resources/previews/000/176/152/original/vector-creative-deals-discount-coupons-and-sale-voucher-design-templa.jpg",
    },
  ];
  return (
    <Swiper
      spaceBetween={30}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper rounded-lg shadow-md h-[60vh]"
    >
      {data.map((x, index) => (
        <SwiperSlide key={index}>
          <Image
            src={x.link}
            alt="book"
            className="w-full h-[60vh]"
            width={800}
            height={800}
          ></Image>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
