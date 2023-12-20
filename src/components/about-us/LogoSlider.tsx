import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

type LogoSliderProps = {
  image: string;
  title: string;
  country: string;
  continent: string;
};
const LogoSlider = ({ logos }: { logos: LogoSliderProps[] }) => {
  const sliderRef = useRef(null);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,

    responsive: [
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="relative py-8 px-5">
      <Slider {...settings} ref={sliderRef}>
        {logos.map((logo) => {
          return (
            <div className="relative" key={logo.title}>
              {/* Image */}
              <div className="group bg-white flex justify-center items-center overflow-hidden cursor-pointer h-[180px] m-6 rounded-md">
                <Image
                  width={200}
                  height={160}
                  src={logo.image}
                  alt={logo.title}
                  className="w-[80%] h-auto object-cover object-center overflow-hidden group-hover:w-[90%] transition-all ease-in-out duration-700"
                />
              </div>
              <div className="flex flex-col gap-1 pt-3 items-center justify-center text-center">
                <h4 className="text-darkBlueText">{logo.title}</h4>
                <h4 className="text-darkerBlue font-semibold text-xl md:text-2xl">
                  {logo.country}
                </h4>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default LogoSlider;
