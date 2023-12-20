import { navBarData } from "@/lib/data/navBarData";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const laboratorySolutionsData = navBarData[2].sections?.filter(
  (item) => item.id === "laboratory"
);
const LaboratorySolutionsSection = () => {
  const t = useTranslations("home");

  return (
    <div className="w-full py-12 md:px-5 lg:px-[5rem] flex flex-col xl:flex-row bg-grayColor md:bg-transparent gap-6 text-darkerBlue md:-mt-[30vh] lg:-mt-[20vh] z-40">
      <div className="bg-secondary  relative w-full xl:w-1/3 flex flex-col justify-center items-center rounded-lg">
        <div className="w-full flex justify-center items-center">
          <Image
            src="/assets/watermark.png"
            alt="watermark"
            width={300}
            height={300}
            className="xl:w-full object-cover"
          />
        </div>
        <div className="absolute py-4 px-6 md:px-12 text-center xl:text-left xl:px-10 xl:items-start flex flex-col justify-center items-center">
          <h2 className="font-bold text-3xl md:text-5xl py-4">
            <span className="text-white">{t("lab")}</span> {t("solutions")}
          </h2>
          <p className="pb-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum,
            architecto laudantium doloremque, quis debitis iste accusantium
            ipsum ipsam magni,
          </p>
          <div className="py-4 md:py-6">
            <Link
              href={"/products-and-solutions/laboratory-solutions"}
              className="group flex items-center py-5 px-6 bg-darkerBlue rounded-full text-white font-bold font-body text-sm hover:bg-white hover:text-darkerBlue transition-all ease-in-out duration-700"
            >
              <span className="font-bold text-[18px] mr-2">{t("choose")}</span>
              <div className="w-5 h-5 mr-2 rounded-full bg-white flex text-darkerBlue group-hover:text-white group-hover:bg-darkerBlue justify-center items-center transition-all ease-in-out duration-700 group-hover:translate-x-2">
                <FaArrowRight className="w-3 h-3" />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-grayColor w-full xl:w-2/3 p-10 grid gap-4 rounded-lg md:grid-cols-3">
        {laboratorySolutionsData?.[0].sections?.map((item) => (
          <Link key={item.title} href={item.path}>
            <div className="flex flex-col items-center justify-center bg-white rounded-lg py-6 px-2 gap-2 hover:bg-darkerBlue group transition-all ease-in-out duration-700 cursor-pointer">
              <span className="text-[4rem] text-secondary">{item.icon}</span>
              <h3 className="font-bold text-lg group-hover:text-white text-darkerBlue text-center transition-all ease-in-out duration-700">
                {t(item.id)}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LaboratorySolutionsSection;
