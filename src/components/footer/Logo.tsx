import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div className="hidden xl:flex items-center justify-center">
      <Link href="/">
        <Image
          priority
          width={220}
          height={100}
          src="/assets/logos/logoWhite1.png"
          alt="Logo"
          className="max-w-[10rem] md:max-w-[16rem] h-auto block"
        />
      </Link>
    </div>
  );
};

export default Logo;
