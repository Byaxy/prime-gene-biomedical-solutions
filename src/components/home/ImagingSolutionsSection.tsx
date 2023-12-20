import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const ImagingSolutionsSection = () => {
  const t = useTranslations("home");

  return (
    <section className="relative px-4 py-24 md:px-8 lg:px-[5rem] bg-waves bg-repeat lg:flex lg:gap-4">
      <div className="absolute top-0 left-0 w-full h-full bg-grayColor/95 z-10"></div>
      <div className="px-2 z-30 relative">
        <header className="font-body py-4 text-center">
          <h2 className="text-3xl md:text-5xl py-2 font-extrabold text-darkerBlue lg:text-left">
            <span className="text-secondary">{t("img")}</span> {t("solutions")}
          </h2>
          <p className="text-gray-500 py-2 lg:text-left">
            Technique used in radiology to form pictures of the anatomy and the
            physiological processes of the body in both health and disease
          </p>
        </header>
        <section className="font-body px-8 md:grid md:gap-4 md:grid-cols-2">
          <div className="px-2 py-4">
            <Link href={"/products-and-solutions/imaging-solutions/radiology"}>
              <h3 className="text-darkerBlue text-xl font-extrabold py-2">
                Radiology
              </h3>
            </Link>
            <p className="text-gray-500">
              Pellentesque erat erat, dapibus non laoreet eu, tincidunt quis
              ante.
            </p>
          </div>
          <div className="px-2 py-4">
            <Link
              href={"/products-and-solutions/imaging-solutions/ultrasonography"}
            >
              <h3 className="text-darkerBlue text-xl font-extrabold py-2">
                Ultrasonography
              </h3>
            </Link>
            <p className="text-gray-500">
              Pellentesque erat erat, dapibus non laoreet eu, tincidunt quis
              ante.
            </p>
          </div>
          <div className="px-2 py-4">
            <Link
              href={"/products-and-solutions/imaging-solutions/diagnostic-ecg"}
            >
              <h3 className="text-darkerBlue text-xl font-extrabold py-2">
                Diagnostic ECG
              </h3>
            </Link>
            <p className="text-gray-500">
              Pellentesque erat erat, dapibus non laoreet eu, tincidunt quis
              ante.
            </p>
          </div>
          <div>
            <Link
              href={
                "/products-and-solutions/imaging-solutions/maternal-infant-care"
              }
            >
              <h3 className="text-darkerBlue text-xl font-extrabold py-2">
                Maternal Infant Care
              </h3>
            </Link>
            <p className="text-gray-500">
              Pellentesque erat erat, dapibus non laoreet eu, tincidunt quis
              ante.
            </p>
          </div>
          <div className="px-2 py-4">
            <Link
              href={
                "/products-and-solutions/imaging-solutions/monitoring-system"
              }
            >
              <h3 className="text-darkerBlue text-xl font-extrabold py-2">
                Monitoring System
              </h3>
            </Link>
            <p className="text-gray-500">
              Pellentesque erat erat, dapibus non laoreet eu, tincidunt quis
              ante.
            </p>
          </div>
          <div className="px-2 py-4">
            <Link
              href={
                "/products-and-solutions/imaging-solutions/radiation-protection-safety-and-dosimetry"
              }
            >
              <h3 className="text-darkerBlue text-xl font-extrabold">
                Radiation Protection Safety & Dosimetry
              </h3>
            </Link>
            <p className="text-gray-500">
              Pellentesque erat erat, dapibus non laoreet eu, tincidunt quis
              ante.
            </p>
          </div>
        </section>
      </div>
      <div className="relative mt-12 max-w-full h-auto lg:w-[80%] z-30">
        <div>
          <Image
            src={"/assets/images/mri.png"}
            alt="MRI Machine"
            width={500}
            height={500}
          />
        </div>
        <div className="hidden md:block md:absolute md:-bottom-8 md:right-20 lg:-top-28 md:z-30">
          <Image
            src={"/assets/images/mri-doctor.png"}
            alt="MRI Doctor"
            width={190}
            height={200}
          />
        </div>
      </div>
    </section>
  );
};

export default ImagingSolutionsSection;
