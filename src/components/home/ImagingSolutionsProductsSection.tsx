import { imagingSolutionsSectionSliderData } from "@/lib/data/imagingSolutionsSectionSliderData";
import SectionSlider from "./SectionSlider";
import Link from "next/link";
import { useTranslations } from "next-intl";

const ImagingSolutionsProductsSection = () => {
  const t = useTranslations("home");

  const styles = {
    title: "text-darkerBlue",
    link: "bg-darkerBlue text-white hover:bg-white hover:text-darkerBlue",
    arrow:
      "group-hover:bg-darkerBlue group-hover:text-white bg-white text-darkerBlue",
    desc: "text-darkBlueText",
  };
  return (
    <section className="w-full bg-secondary py-24">
      <div className="flex flex-col justify-center items-center text-center">
        <Link href={"/products-and-solutions/medical-solutions"}>
          <span className="text-grayColor block font-bold pb-5">
            {t("imaging")}
          </span>
        </Link>
        <h2 className="font-bold  text-primary text-3xl md:text-5xl mb-20">
          {t("imaging-products")}
        </h2>
      </div>
      <SectionSlider
        products={imagingSolutionsSectionSliderData}
        styles={styles}
      />
    </section>
  );
};

export default ImagingSolutionsProductsSection;
