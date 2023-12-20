import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="wraper flex justify-center items-center w-full h-auto">
      <div className="relative flex items-center justify-center w-full h-full">
        <Image
          priority
          src={"/assets/teamGroup.jpg"}
          alt="Team group"
          width={1280}
          height={1200}
          className="block object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
