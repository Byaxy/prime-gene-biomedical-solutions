import {
  FaFacebookSquare,
  FaLinkedin,
  FaTiktok,
  FaTwitterSquare,
  FaWhatsappSquare,
  FaYoutube,
} from "react-icons/fa";

const FooterSocialLinks = () => {
  return (
    <div className="hidden items-center gap-4 md:flex md:flex-col lg:flex-row">
      <h3 className="text-center font-bold text-sm lg:text-left">Follow Us</h3>
      <div className="w-full flex items-center justify-between gap-2">
        <a
          href="https://api.whatsapp.com/send?phone=233244364439"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-9 h-9 rounded-full bg-secondary flex text-darkerBlue justify-center items-center hover:bg-white cursor-pointer transition-colors ease-in-out duration-700">
            <FaWhatsappSquare className="w-4 h-4" />
          </div>
        </a>
        <a
          href="https://web.facebook.com/Profnaash"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-9 h-9 rounded-full bg-secondary flex text-darkerBlue justify-center items-center hover:bg-white cursor-pointer transition-colors ease-in-out duration-700">
            <FaFacebookSquare className="w-4 h-4" />
          </div>
        </a>
        <a
          href="https://twitter.com/AdamYakubAND1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-9 h-9 rounded-full bg-secondary flex text-darkerBlue justify-center items-center hover:bg-white cursor-pointer transition-colors ease-in-out duration-700">
            <FaTwitterSquare className="w-4 h-4" />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/dr-adam-yakub-a-n-d-mls-d-fwapcmls-9380b4136/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-9 h-9 rounded-full bg-secondary flex text-darkerBlue justify-center items-center hover:bg-white cursor-pointer transition-colors ease-in-out duration-700">
            <FaLinkedin className="w-4 h-4" />
          </div>
        </a>
        <a
          href="https://www.youtube.com/@primegenebiomedicalsolutions"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-9 h-9 rounded-full bg-secondary flex text-darkerBlue justify-center items-center hover:bg-white cursor-pointer transition-colors ease-in-out duration-700">
            <FaYoutube className="w-4 h-4" />
          </div>
        </a>
        <a
          href="https://www.tiktok.com/@adammsair0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-9 h-9 rounded-full bg-secondary flex text-darkerBlue justify-center items-center hover:bg-white cursor-pointer transition-colors ease-in-out duration-700">
            <FaTiktok className="w-4 h-4" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default FooterSocialLinks;
