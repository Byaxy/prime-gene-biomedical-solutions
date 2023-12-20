"use client";
import { useRouter } from "next/navigation";
import { navBarData } from "@/lib/data/navBarData";
import OurPhilosophy from "@/components/about-us/OurPhilosophy";
import OurProfile from "@/components/about-us/OurProfile";
import OurCooperatePolicy from "@/components/about-us/OurCooperatePolicy";
import OurPartners from "@/components/about-us/OurPartners";

const AboutUs = () => {
  const router = useRouter();
  return (
    <div className="w-full">
      <div className="relative flex flex-col items-center justify-center text-center bg-sectionBg bg-no-repeat bg-center bg-cover border-t border-dashed border-t-grayColor py-6 md:py-20 px-5 md:px-8 lg:px-[5rem] z-0">
        <div className="absolute top-0 left-0 bg-darkBlueText/50 w-full h-full" />
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white z-10">
          About Us
        </h1>
      </div>
      <div className="w-full flex flex-col gap-1 py-5">
        <ul className="flex flex-col md:flex-row gap-2 md:gap-5 pt-5 container">
          {navBarData[1].section?.map((item) => (
            <>
              <li
                key={item.title}
                className="cursor-pointer hover:text-secondary text-primary font-semibold text-lg md:text-xl transition-colors ease-in-out duration-700"
                onClick={() => router.push(item.id)}
              >
                {item.title}
              </li>

              <div className="hidden md:block bg-gray-200 w-[2px] h-8 last:hidden" />
            </>
          ))}
        </ul>
        <div className="bg-gray-200 w-full h-[2px]" />
      </div>
      <div className="flex flex-col px-5 md:px-8 lg:px-[5rem] gap-12 md:gap-20 my-12">
        <div id="our-philosophy">
          <OurPhilosophy />
        </div>

        <div id="our-profile">
          <OurProfile />
        </div>

        <div id="cooperate-policy">
          <OurCooperatePolicy />
        </div>

        <div id="our-partners">
          <OurPartners />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
