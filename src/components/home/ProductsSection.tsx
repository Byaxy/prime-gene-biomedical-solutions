import { productsSliderData } from "@/lib/data/productsSliderData";
import SectionSlider from "./SectionSlider";

const ProductsSection = () => {
  const styles = {
    title: "text-darkerBlue",
    link: "bg-secondaryColor text-darkerBlue hover:bg-darkerBlue hover:text-white",
    arrow:
      "group-hover:bg-white group-hover:text-darkerBlue bg-white text-darkerBlue",
    desc: "text-darkBlueText",
  };
  return (
    <section className="w-full bg-grayColor py-24 mt-10">
      <SectionSlider products={productsSliderData} styles={styles} />
    </section>
  );
};

export default ProductsSection;
