import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import { useState } from "react";
import { GiWorld } from "react-icons/gi";
import Search from "./Search";
import { useRouter, usePathname } from "@/navigation";

const SelectLanguage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (lang: string) => {
    router.push(pathname, { locale: lang });
    setIsOpen(false);
  };

  return (
    <div className="w-full flex-1 flex flex-row gap-4 items-center">
      <Search />
      <Popover
        isOpen={isOpen}
        onOpenChange={(open) => setIsOpen(open)}
        placement="bottom-end"
      >
        <PopoverTrigger>
          <span
            aria-label="Select Language"
            className="flex cursor-pointer bg-grayColor  text-primary rounded-full p-0"
            title="Select Language"
          >
            <GiWorld className="w-8 h-8" />
          </span>
        </PopoverTrigger>
        <PopoverContent>
          <ul className="flex flex-col p-5 gap-4 min-h-fit text-darkerBlue">
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
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default SelectLanguage;
