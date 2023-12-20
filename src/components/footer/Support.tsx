import Link from "next/link";
import { FaArrowRight, FaChevronRight } from "react-icons/fa";

const Support = () => {
  return (
    <div>
      <h3 className="text-secondary text-xl mb-6 font-extrabold">Support</h3>
      <div className="flex gap-8">
        <ul className="text-xs font-bold font-body">
          <li className="py-2">
            <Link
              href="/about-us#cooperate-policy"
              className="flex items-center"
            >
              <FaChevronRight className="text-secondary mr-1 w-3 h-3 " />
              <span>Warranty</span>
            </Link>
          </li>
          <li className="py-2">
            <Link
              href="/about-us#cooperate-policy"
              className="flex items-center"
            >
              <FaChevronRight className="text-secondary mr-1 w-3 h-3 " />
              <span>Quality</span>
            </Link>
          </li>
        </ul>
        <ul className="text-xs font-bold font-body">
          <li className="py-2">
            <Link href="/" className="flex items-center">
              <FaChevronRight className="text-secondary mr-1 w-3 h-3 " />
              <span>Privacy</span>
            </Link>
          </li>
          <li className="py-2">
            <Link href="/" className="flex items-center">
              <FaChevronRight className="text-secondary mr-1 w-3 h-3 " />
              <span>Terms</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="py-6">
        <Link
          href={"/contact-us"}
          className="group flex items-center px-6 py-3 bg-secondary rounded-full text-darkerBlue font-bold font-body text-sm hover:bg-white transition-colors ease-in-out duration-700"
        >
          <span className="pr-2">Contact Us</span>
          <div className="w-5 h-5 mr-2 rounded-full bg-white flex text-darkerBlue group-hover:text-white group-hover:bg-darkerBlue justify-center items-center transition-all ease-in-out duration-700 group-hover:translate-x-2">
            <FaArrowRight className="w-3 h-3" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Support;
