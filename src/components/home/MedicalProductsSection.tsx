import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { useTranslations } from "next-intl";

const MedicalProductsSection = async () => {
  const t = useTranslations("home");

  return (
    <section className="w-full wraper py-12 px-4 mt-20 text-darkerBlue text-center">
      <Link href={"/products-and-solutions/medical-solutions"}>
        <span className="text-secondaryColor block font-bold pb-5">
          {t("medical")}
        </span>
      </Link>
      <h2 className="font-bold text-3xl md:text-5xl mb-8">
        {t("medical-products")}
      </h2>
      <section className="grid md:grid-cols-2 gap-7">
        <div className="flex flex-col justify-center items-center rounded-lg shadow-xl px-6 py-8">
          <div className="w-full flex justify-center items-center">
            <Image
              src={"/assets/tonometer.jpg"}
              alt="Tonometer AD-05"
              width={300}
              height={300}
            />
          </div>
          <h3 className="font-bold text-2xl cursor-pointer hover:text-secondary duration-500">
            Tonometer AD-05
          </h3>
          <p className="text-gray-400 py-4 text-sm">
            Duis et aliquam orci. Vivamus augue quam, ...
          </p>
          <p className="text-secondary text-xl font-bold">$3.99</p>
        </div>
        <div className="flex flex-col justify-center items-center rounded-lg shadow-xl px-6 py-8">
          <div className="w-full flex justify-center items-center">
            <Image
              src={"/assets/asprin.jpg"}
              alt="Asprin 10 Pills"
              width={300}
              height={300}
            />
          </div>
          <h3 className="font-bold text-2xl cursor-pointer hover:text-secondary duration-500">
            Asprin 10 Pills
          </h3>
          <p className="text-gray-400 py-4">
            Duis et aliquam orci. Vivamus augue quam, ...
          </p>
          <p className="text-secondary text-xl font-bold">$1.99</p>
        </div>
        <div className="flex flex-col justify-center items-center rounded-lg shadow-xl px-6 py-8">
          <div className="w-full flex justify-center items-center">
            <Image
              src={"/assets/painPills.jpg"}
              alt="Pain pills 12 tabs"
              width={300}
              height={300}
            />
          </div>
          <h3 className="font-bold text-2xl cursor-pointer hover:text-secondary duration-500">
            Pain pills 12 tabs
          </h3>
          <p className="text-gray-400 py-4">
            Duis et aliquam orci. Vivamus augue quam, ...
          </p>
          <p className="text-secondaryColor text-xl font-bold">$1.99</p>
        </div>
        <div className="flex flex-col justify-center items-center rounded-lg shadow-xl px-6 py-8">
          <div className="w-full flex justify-center items-center">
            <Image
              src={"/assets/asthmaInhaler.jpg"}
              alt="Asthma Inhaler"
              width={300}
              height={300}
            />
          </div>
          <h3 className="font-bold text-2xl cursor-pointer hover:text-secondary duration-500">
            Asthma Inhaler
          </h3>
          <p className="text-gray-400 py-4">
            Duis et aliquam orci. Vivamus augue quam, ...
          </p>
          <p className="text-secondary text-xl font-bold">$1.99</p>
        </div>
      </section>
      <div className="flex flex-col items-center mt-14 mb-2">
        <Link
          href={"/products-and-solutions/medical-solutions"}
          className="group flex items-center px-7 py-3 bg-darkerBlue rounded-full text-white font-bold font-body text-sm hover:bg-secondary hover:text-darkerBlue transition-all ease-in-out duration-700"
        >
          <span className="font-bold pr-2">More products</span>
          <div className="w-5 h-5 rounded-full bg-white flex text-darkerBlue justify-center items-center transition-all ease-in-out duration-700 group-hover:translate-x-2">
            <FaArrowRight className="w-3 h-3" />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default MedicalProductsSection;
