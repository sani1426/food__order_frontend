import Link from "next/link";
import Title from "../animation/animationTitle";
import Image from "next/image";



const Hero = () => {
  return (
    <section className="relative w-screen h-[60vh] md:h-[80vh] lg:h-screen">
      <Image
        src={"/images/hero-1.png"}
        alt="hero-image"
        className="w-full h-full object-cover z-[-1]"
      />
      <div className="absolute inset-0 bg-linear-to-r from-[rgba(0,0,0,0.3)] to-[rgba(0,0,0,0.2)] z-10 flex items-center justify-center ">
        <div className="flex-col w-full text-white p-6 gap-y-4 ">
          <h1 className="text-3xl md:text-7xl  text-gradient gradient-anime font-semibold">
            یه انتخاب خوشمزه و لذیذ"
          </h1>
          <h2 className="text-lg md:text-2xl text-gradient gradient-anime font-semibold">
            تکه ای از روز که بهترین طعم هارو داره
          </h2>

          <Link
            href="#"
            className=" px-6 py-2 rounded-md text-lg bg-transparent border border-prime text-prime hover:bg-prime hover:text-white transition-all duration-200 "
          >
            مشاهده منو
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
