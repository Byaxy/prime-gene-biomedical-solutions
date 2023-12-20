import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

const Explore = () => {
  return (
    <div>
      <h3 className="text-secondary text-xl mb-6 font-extrabold">Explore</h3>
      <div className="flex gap-8">
        <ul className="text-xs font-bold font-body">
          <li className="py-2">
            <Link href="/" className="flex items-center">
              <FaChevronRight className="text-secondary mr-1 w-3 h-3 " />
              <span>Home</span>
            </Link>
          </li>
          <li className="py-2">
            <Link href="/about-us" className="flex items-center">
              <FaChevronRight className="text-secondary mr-1 w-3 h-3 " />
              <span>About Us</span>
            </Link>
          </li>
          <li className="py-2">
            <Link href="/products-and-solutions" className="flex items-center">
              <FaChevronRight className="text-secondary mr-1 w-3 h-3 " />
              <span>Products & Solutions</span>
            </Link>
          </li>
        </ul>
        <ul className="text-xs font-bold font-body">
          <li className="py-2">
            <Link href="/services-and-support" className="flex items-center">
              <FaChevronRight className="text-secondary mr-1 w-3 h-3 " />
              <span>Services & Support</span>
            </Link>
          </li>
          <li className="py-2">
            <Link href="/contact-us" className="flex items-center">
              <FaChevronRight className="text-secondary mr-1 w-3 h-3 " />
              <span>Contact Us</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Explore;
