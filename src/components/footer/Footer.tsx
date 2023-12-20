import FooterSocialLinks from "./FooterSocialLinks";
import Logo from "./Logo";
import Form from "./Form";
import Contact from "./Contact";
import Explore from "./Explore";
import Support from "./Support";

const Footer = () => {
  return (
    <div className="w-full bg-primary px-5 md:px-8 lg:px-[5rem]">
      <div className="flex flex-col w-full text-white ">
        <div className="w-full flex justify-between items-center py-6">
          <Logo />
          <Form />
          <FooterSocialLinks />
        </div>
        <div className="border-b border-grayColor border-dashed" />
        <div className="py-12 font-body grid md:grid-cols-2 gap-6 lg:flex lg:justify-between">
          {/* Contact Us Section */}
          <Contact />
          {/* Explore Section */}
          <Explore />
          {/* Support Section */}
          <Support />
        </div>
      </div>
    </div>
  );
};

export default Footer;
