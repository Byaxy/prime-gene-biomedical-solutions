import {
  FaTty,
  FaFacebookSquare,
  FaLinkedin,
  FaWhatsappSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
  FaTiktok,
} from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex items-center justify-between gap-4">
      <a
        href="https://api.whatsapp.com/send?phone=233244364439"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsappSquare className="w-5 h-5 cursor-pointer text-secondary hover:text-white transition-colors ease-in-out duration-700" />
      </a>
      <a
        href="https://web.facebook.com/Profnaash"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebookSquare className="w-5 h-5 cursor-pointer text-secondary hover:text-white transition-colors ease-in-out duration-700" />
      </a>
      <a
        href="https://twitter.com/AdamYakubAND1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitterSquare className="w-5 h-5 cursor-pointer text-secondary hover:text-white transition-colors ease-in-out duration-700" />
      </a>
      <a
        href="https://www.linkedin.com/in/dr-adam-yakub-a-n-d-mls-d-fwapcmls-9380b4136/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="w-5 h-5 cursor-pointer text-secondary hover:text-white transition-colors ease-in-out duration-700" />
      </a>
      <a
        href="https://www.youtube.com/@primegenebiomedicalsolutions"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaYoutubeSquare className="w-5 h-5 cursor-pointer text-secondary hover:text-white transition-colors ease-in-out duration-700" />
      </a>
      <a
        href="https://www.tiktok.com/@adammsair0"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTiktok className="w-5 h-5 cursor-pointer text-secondary hover:text-white transition-colors ease-in-out duration-700" />
      </a>
    </div>
  );
};

export default SocialLinks;
