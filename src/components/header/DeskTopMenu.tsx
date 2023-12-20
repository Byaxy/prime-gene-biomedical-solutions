import { useState } from "react";
import { navBarData } from "@/lib/data/navBarData";
import Link from "next/link";
import { useScrollContext } from "@/lib/context/ScrollContext";
import { usePathname } from "next/navigation";

const DeskTopMenu = () => {
  const [open, setOpen] = useState<number | null>(null);

  const { isScrolled } = useScrollContext();

  const pathname = usePathname();

  const handleOpen = (index: number): void => {
    if (open === index) {
      return setOpen(null);
    }

    setOpen(index);
  };
  return (
    <nav className="w-full">
      <ul className="flex flex-row gap-4">
        {navBarData &&
          navBarData.map((item, index) => (
            <li
              key={item.title + index}
              className={`${
                pathname === item.path ? "text-secondary" : "text-white"
              } py-2`}
              onMouseEnter={() => handleOpen(index)}
              onMouseLeave={() => handleOpen(index)}
            >
              {item.sections ? (
                <Link
                  href={item.path}
                  className={`${
                    pathname === item.path
                      ? "border-b-secondary"
                      : "border-b-transparent"
                  } font-semibold border-b-2 hover:border-b-secondary pb-1 group hover:text-secondary cursor-pointer`}
                >
                  <span>{item.title}</span>
                  <span className="group-hover:text-secondary pl-1">+</span>
                </Link>
              ) : (
                <Link
                  href={item.path}
                  className={`${
                    pathname === item.path
                      ? "border-b-secondary"
                      : "border-b-transparent"
                  } font-semibold hover:text-secondary border-b-2 hover:border-b-secondary pb-1`}
                >
                  {item.title}
                </Link>
              )}

              {open === index ? (
                <>
                  {item.sections ? (
                    <div
                      className={`${
                        isScrolled ? "top-[4.5rem] " : "top-[8.5rem] "
                      } absolute right-[5%] max-w-[90%] bg-sectionBg bg-cover rounded-xl overflow-hidden z-[90] text-darkerBlue font-semibold transition-all ease-in-out duration-700 scale-up-center`}
                    >
                      <ul className="relative flex flex-row gap-4 justify-between w-full h-full px-6 py-8 bg-darkerBlue/50 ">
                        {item.sections &&
                          item.sections.map((child, index) => (
                            <li key={child.title + index}>
                              <Link
                                onClick={() => {
                                  setOpen(null);
                                }}
                                className="text-secondaryColor text-lg"
                                href={child.path}
                              >
                                {child.title}
                              </Link>
                              <div className="mt-6">
                                <ul className="px-2 flex flex-col gap-2">
                                  {child.sections &&
                                    child.sections.map((grandChild, index) => {
                                      return (
                                        <li key={grandChild.title + index}>
                                          <Link
                                            onClick={() => {
                                              setOpen(null);
                                            }}
                                            className="flex flex-row items-center justify-start gap-2 hover:text-secondaryColor group transition-all ease-in-out duration-700 font-light text-sm"
                                            href={grandChild.path}
                                          >
                                            <span className="text-white group-hover:text-secondaryColor transition-all ease-in-out duration-700">
                                              {grandChild.icon}
                                            </span>
                                            <span className="group-hover:text-secondaryColor text-white">
                                              {grandChild.title}
                                            </span>
                                          </Link>
                                        </li>
                                      );
                                    })}
                                </ul>
                              </div>
                            </li>
                          ))}
                      </ul>
                    </div>
                  ) : null}
                </>
              ) : null}
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default DeskTopMenu;
