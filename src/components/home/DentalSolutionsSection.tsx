import Link from "next/link";
import SectionSlider from "./SectionSlider";
import { dentalSolutionsSectionSliderData } from "@/lib/data/dentalSolutionsSectionSliderData";
import { useTranslations } from "next-intl";

const DentalSolutionsSection = () => {
  const t = useTranslations("home");

  const styles = {
    title: "text-secondary",
    link: "bg-secondary text-darkerBlue hover:bg-white hover:text-darkerBlue",
    arrow:
      "group-hover:bg-darkerBlue group-hover:text-white bg-white text-darkerBlue",
    desc: "text-gray-300",
  };
  return (
    <section className="w-full bg-primary py-24">
      <div className="flex flex-col justify-center items-center text-center">
        <Link href="/products-and-solutions/dental-solutions">
          <h2 className="text-3xl md:text-5xl mb-5 font-bold text-secondary">
            {t("dental")}
          </h2>
        </Link>
        <p className="text-gray-300 max-w-2xl break-words text-lg px-2">
          {t("dentalDesc")}
        </p>
      </div>
      <div className="w-full py-14">
        <SectionSlider
          products={dentalSolutionsSectionSliderData}
          styles={styles}
        />
      </div>
    </section>
  );
};

export default DentalSolutionsSection;
