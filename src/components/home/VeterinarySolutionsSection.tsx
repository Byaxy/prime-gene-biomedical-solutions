"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { imagingSolutionsSectionSliderData } from "@/lib/data/imagingSolutionsSectionSliderData";

const VeterinarySolutionsSection = () => {
  return (
    <section className="relative bg-sectionBg bg-cover bg-fixed py-6 w-full">
      <div className="absolute top-0 left-0 w-full h-full bg-primary/70" />
      <div className="w-full wraper">
        <h2 className="text-3xl md:text-5xl bg-transparent py-8 mb-6 font-bold text-grayColor text-center z-20 relative">
          Veterinary Solutions
        </h2>
        <div className="w-full md:px-10">
          <Swiper
            loop={true}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={2}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
            }}
          >
            {imagingSolutionsSectionSliderData &&
              imagingSolutionsSectionSliderData.map((product, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-grayColor rounded-lg mx-2">
                    {/* Image */}
                    <div className="group bg-white w-full h-auto flex justify-center items-center overflow-hidden cursor-pointer rounded-lg">
                      <Image
                        src={product.image}
                        alt={product.title}
                        width={320}
                        height={300}
                        className="w-ful h-[320px] lg:h-[280px] object-cover overflow-hidden duration-300"
                      />
                    </div>
                    {/* Tittle and discription */}
                    <div className="bg-darkBlue h-[90px] w-[90px] rounded-full text-[12px] text-white font-semibold flex flex-col justify-center items-center border-2 border-white absolute right-6 top-2">
                      <p>Cat.#</p>
                      <p className="text-mainColor text-center -mt-1">
                        {product.code}
                      </p>
                    </div>
                    <div className="flex flex-col justify-center items-center text-center gap-4 px-4">
                      <h2 className="text-darkerBlue text-lg font-bold mt-8 break-words">
                        {product.title}
                      </h2>
                      <h3 className="text-darkBlueText font-bold break-words">
                        {product.subTitle}
                      </h3>
                      <p className="text-darkBlueText text-sm break-words px-2">
                        {product.disc}
                      </p>
                      <p className="text-darkBlueText font-bold">
                        {product.code}
                      </p>
                      {/* Button */}
                      <div className="flex flex-col items-center my-8">
                        <Link
                          href={product.path}
                          className="group flex items-center px-7 py-3 bg-darkerBlue rounded-full text-darkerBlue font-bold font-body text-sm hover:text-darkerBlue hover:bg-secondary group transition-colors ease-in-out duration-700"
                        >
                          <span className="text-white group-hover:text-darkerBlue font-bold pr-2 transition-all ease-in-out duration-700">
                            {product.category}
                          </span>
                          <div className="w-5 h-5 rounded-full bg-white group-hover:bg-darkerBlue group-hover:text-secondary flex text-darkerBlue justify-center items-center transition-all ease-in-out duration-700 group-hover:translate-x-2">
                            <FaArrowRight className="w-3 h-3" />
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            <div className="w-full flex justify-center items-center gap-4 my-6 lg:my-8 z-20 relative">
              {/* Prev Arrow */}
              <div className="custom-prev w-10 h-10 rounded-full bg-secondary flex text-darkerBlue justify-center items-center hover:bg-grayColor cursor-pointer transition-colors ease-in-out duration-700">
                <FaArrowLeft className="w-4 h-4" />
              </div>
              {/* Next Arrow */}
              <div className="custom-next w-10 h-10 rounded-full bg-secondary flex text-darkerBlue justify-center items-center hover:bg-grayColor cursor-pointer transition-colors ease-in-out duration-700">
                <FaArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default VeterinarySolutionsSection;
