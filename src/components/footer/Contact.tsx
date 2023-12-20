import { FaPhone, FaRegClock } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";

const Contact = () => {
  return (
    <div>
      <h3 className="text-secondary text-xl mb-6 font-extrabold">Contact Us</h3>
      <ul className="text-xs">
        <li className="py-2 flex items-center">
          <div className="w-5 h-5 mr-2 rounded-full bg-secondary flex text-darkerBlue justify-center items-center">
            <FaPhone className="w-3 h-3" />
          </div>
          <p>
            {" "}
            <span className="text-secondary">Hotline:</span> +233 244364439
            (Ghana)
          </p>
        </li>
        <li className="py-2 flex items-center">
          <div className="w-5 h-5 mr-2 rounded-full bg-secondary flex text-darkerBlue justify-center items-center">
            <FaPhone className="w-3 h-3" />
          </div>
          <p>
            {" "}
            <span className="text-secondary">Hotline:</span> +231 775508118
            (Liberia)
          </p>
        </li>
        <li className="py-2 flex items-center">
          <div className="w-5 h-5 mr-2 rounded-full bg-secondary flex text-darkerBlue justify-center items-center">
            <MdLocationPin className="w-3 h-3" />
          </div>
          <p>
            {" "}
            <span className="text-secondary">Addres:</span> Nsawam-Ghana
          </p>
        </li>
        <li className="py-2 flex items-center">
          <div className="w-5 h-5 mr-2 rounded-full bg-secondary flex text-darkerBlue justify-center items-center">
            <FaRegClock className="w-3 h-3" />
          </div>
          <p>
            {" "}
            <span className="text-secondary">Mon-Sat:</span> 8:00AM - 5:00PM
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
