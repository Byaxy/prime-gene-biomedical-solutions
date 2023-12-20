"use client";
import { createContext, useContext, useEffect, useState } from "react";

type ScrollContextType = {
  isScrolled: boolean;
  setIsScrolled: React.Dispatch<React.SetStateAction<boolean>>;
};

const ScrollContext = createContext<ScrollContextType | null>(null);

export const ScrollContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const handleScroll = () => {
    const isScrolled = window.pageYOffset !== 0;
    setIsScrolled(isScrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ScrollContext.Provider value={{ isScrolled, setIsScrolled }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollContext = (): ScrollContextType => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error(
      "useScrollContext must be used within a ScrollContextProvider"
    );
  }
  return context;
};
