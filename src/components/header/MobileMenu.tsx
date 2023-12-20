import Image from "next/image";
import Link from "next/link";
import { FaTimes, FaPlus } from "react-icons/fa";
import MobileMenuLinks from "./MobileMenuLinks";
import { useState } from "react";
import { useRouter, usePathname } from "@/navigation";

const MobileMenu = ({
  handleClick,
}: {
  handleClick: (show: boolean) => void;
}) => {
  const [showLanguages, setShowLanguages] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (lang: string) => {
    router.push(pathname, { locale: lang });
    setShowLanguages(false);
  };
  return (
    <div className="w-[100%] bg-primary md:w-[60%] xl:hidden">
      {/* Logo */}
      <div className="flex w-full items-center justify-between bg-white px-5 py-6 text-primary">
        <Link href="/">
          <div className="flex items-center justify-center">
            <Image
              src="/assets/logos/logoBlue.jpeg"
              alt="Logo"
              className="max-w-[14rem] mr-1"
              width={200}
              height={100}
            />
          </div>
        </Link>
        <button onClick={() => handleClick(false)}>
          <FaTimes className="w-5 h-5 text-primary hover:text-secondary transition-all ease-in-out duration-700" />
        </button>
      </div>
      {/* Navigation Links */}
      <div className="pt-4 pb-10 px-4 text-white">
        <MobileMenuLinks handleClick={handleClick} />
        <div>
          <div
            className={`${
              showLanguages ? "text-secondary" : "text-grayColor"
            } w-full flex justify-between items-center text-lg mt-4 cursor-pointer`}
            onClick={() => setShowLanguages((prev) => !prev)}
          >
            <span>Select Language</span>
            <span>{showLanguages ? <FaTimes /> : <FaPlus />}</span>
          </div>
          {showLanguages && (
            <ul className="flex flex-col mt-4 gap-4 pl-5 min-h-fit">
              <li
                className="hover:text-secondary cursor-pointer"
                onClick={() => handleChange("en")}
              >
                English
              </li>
              <li
                className="hover:text-secondary cursor-pointer"
                onClick={() => handleChange("fr")}
              >
                French
              </li>
              <li
                className="hover:text-secondary cursor-pointer"
                onClick={() => handleChange("ar")}
              >
                Arabic
              </li>
              <li
                className="hover:text-secondary cursor-pointer"
                onClick={() => handleChange("zh")}
              >
                Chinese
              </li>
              <li
                className="hover:text-secondary cursor-pointer"
                onClick={() => handleChange("es")}
              >
                Spanish
              </li>
              <li
                className="hover:text-secondary cursor-pointer"
                onClick={() => handleChange("de")}
              >
                German
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
