"use client";
import Link from "next/link";
import TopBar from "./TopBar";
import { MdMenu } from "react-icons/md";
import Image from "next/image";
import { useState } from "react";
import DeskTopMenu from "./DeskTopMenu";
import MobileMenu from "./MobileMenu";
import { useScrollContext } from "@/lib/context/ScrollContext";
import SelectLanguage from "./SelectLanguage";

const Header = () => {
  const [show, setShow] = useState(false);

  const { isScrolled } = useScrollContext();

  return (
    <>
      <div className="relative flex w-full flex-col justify-center  py-4 px-5 md:px-8 lg:px-[5rem] bg-headerImage bg-cover font-body">
        <div className="absolute top-0 left-0 w-full h-full bg-primary/80 z-20" />
        {/* Social links and contact section */}
        <TopBar />
        {/* Logo and navigation section */}
        <div
          className={`${
            isScrolled
              ? "fixed top-0 left-0 flex justify-between items-center z-[100] bg-primary px-4 md:px-8 lg:px-[5rem] border-b border-dashed border-b-grayColor"
              : ""
          } w-full flex justify-between items-center z-[100]`}
        >
          {/* Logo */}
          <div className="flex items-center justify-center py-4">
            <Link href="/">
              <Image
                priority
                width={260}
                height={100}
                src="/assets/logos/logoWhite.png"
                alt="Logo"
                className="max-w-[12rem] md:max-w-[18rem] h-auto block"
              />
            </Link>
          </div>
          {/* Navigation Links */}
          {/* Desktop Menu */}
          <div>
            <button>
              <MdMenu
                className="w-8 h-10 text-white hover:text-secondary xl:hidden transition-all ease-in-out duration-700"
                onClick={() => setShow(true)}
              />
            </button>
            <div className="hidden xl:flex flex-row items-center gap-5 pb-5">
              <div>
                <DeskTopMenu />
              </div>
              <SelectLanguage />
            </div>
          </div>
          {/* Mobile Menu */}
          {show ? (
            <div className="absolute top-0 left-0 w-full slide-in-left">
              <MobileMenu handleClick={(show: boolean) => setShow(show)} />
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Header;
