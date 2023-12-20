"use client";
import { sliderData } from "@/lib/data/sliderData";
import Image from "next/image";
import { useEffect, useState } from "react";

const BannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;
  const autoScroll = true;
  let sliderInterval: string | number | NodeJS.Timeout | undefined;
  const intervalTime = 3500;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  function auto() {
    sliderInterval = setInterval(nextSlide, intervalTime);
  }
  useEffect(() => {
    setCurrentSlide(0);
  }, []);
  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(sliderInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide]);

  return (
    <div className="font-body w-[100%] h-[100vh] relative overflow-hidden z-0">
      {/* Slider Content */}
      {sliderData.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide current" : "slide"}
            key={index}
          >
            {index === currentSlide && (
              <>
                {/* Image */}
                <div className="w-full h-[100%] relative">
                  <Image
                    priority
                    width={1920}
                    height={920}
                    src={slide.image}
                    alt={slide.title}
                    className="w-[100%] h-[100%] object-cover animate-fadeIn"
                  />
                  <div className="absolute top-0 left-0 w-full h-[100%] bg-black/40" />
                </div>
                {/* Text */}
                <div className="content">
                  <header className="pb-2 text-[30px] font-extrabold md:text-[50px] lg:text-[56px]">
                    <h2 className="inline-block pr-2">{slide.title}</h2>
                    <span className="text-secondary">Solutions</span>
                  </header>
                  <p className="pb-4 md:max-w-[90%] mx-auto">{slide.desc}</p>
                </div>
                <div className="hidden absolute top-[5%] md:top-[18vh] lg:top-[10%] right-6 lg:right-[4rem] z-50 md:flex flex-col justify-center items-center">
                  <div className="w-5 h-5 border border-grayColor rounded-full flex items-center justify-center">
                    <div
                      className={
                        currentSlide === 0
                          ? "w-2 h-2 border border-grayColor bg-secondary cursor-pointer rounded-full"
                          : "w-2 h-2 bg-transparent border border-grayColor hover:bg-secondary cursor-pointer rounded-full"
                      }
                      id="0"
                      onClick={() => setCurrentSlide(0)}
                    ></div>
                  </div>
                  <div className="w-[1px] h-6 md:h-12 bg-grayColor"></div>
                  <div className="w-5 h-5 border border-grayColor rounded-full flex items-center justify-center">
                    <div
                      className={
                        currentSlide === 1
                          ? "w-2 h-2 border border-grayColor bg-secondary cursor-pointer rounded-full"
                          : "w-2 h-2 bg-transparent border border-grayColor hover:bg-secondary cursor-pointer rounded-full"
                      }
                      id="1"
                      onClick={() => setCurrentSlide(1)}
                    ></div>
                  </div>

                  <div className="w-[1px] h-6 md:h-12 bg-grayColor"></div>
                  <div className="w-5 h-5 border border-grayColor rounded-full flex items-center justify-center">
                    <div
                      className={
                        currentSlide === 2
                          ? "w-2 h-2 border border-grayColor bg-secondary cursor-pointer rounded-full"
                          : "w-2 h-2 bg-transparent border border-grayColor hover:bg-secondary cursor-pointer rounded-full"
                      }
                      id="2"
                      onClick={() => setCurrentSlide(2)}
                    ></div>
                  </div>

                  <div className="w-[1px] h-6 md:h-12 bg-grayColor"></div>

                  <div className="w-5 h-5 border border-grayColor rounded-full flex items-center justify-center">
                    <div
                      className={
                        currentSlide === 3
                          ? "w-2 h-2 border border-grayColor bg-secondary cursor-pointer rounded-full"
                          : "w-2 h-2 bg-transparent border border-grayColor hover:bg-secondary cursor-pointer rounded-full"
                      }
                      id="3"
                      onClick={() => setCurrentSlide(3)}
                    ></div>
                  </div>

                  <div className="w-[1px] h-6 md:h-12 bg-grayColor"></div>
                  <div className="w-5 h-5 border border-grayColor rounded-full flex items-center justify-center">
                    <div
                      className={
                        currentSlide === 4
                          ? "w-2 h-2 border border-grayColor bg-secondary cursor-pointer rounded-full"
                          : "w-2 h-2 bg-transparent border border-grayColor hover:bg-secondary cursor-pointer rounded-full"
                      }
                      id="4"
                      onClick={() => setCurrentSlide(4)}
                    ></div>
                  </div>

                  <div className="w-[1px] h-6 md:h-12 bg-grayColor"></div>
                  <div className="w-5 h-5 border border-grayColor rounded-full flex items-center justify-center">
                    <div
                      className={
                        currentSlide === 5
                          ? "w-2 h-2 border border-grayColor bg-secondary cursor-pointer rounded-full"
                          : "w-2 h-2 bg-transparent border border-grayColor hover:bg-secondary cursor-pointer rounded-full"
                      }
                      id="5"
                      onClick={() => setCurrentSlide(5)}
                    ></div>
                  </div>
                  <div className="w-[1px] h-6 md:h-12 bg-grayColor"></div>
                  <div className="w-5 h-5 border border-grayColor rounded-full flex items-center justify-center">
                    <div
                      className={
                        currentSlide === 6
                          ? "w-2 h-2 border border-grayColor bg-secondary cursor-pointer rounded-full"
                          : "w-2 h-2 bg-transparent border border-grayColor hover:bg-secondary cursor-pointer rounded-full"
                      }
                      id="6"
                      onClick={() => setCurrentSlide(6)}
                    ></div>
                  </div>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default BannerSlider;
