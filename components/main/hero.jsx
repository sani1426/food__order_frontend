import Link from "next/link";
import Title from "../animation/animationTitle";
import Image from "next/image";



const Hero = () => {
  return (
    <section className="relative">
      <Image
        src={"/images/hero-1.png"}
        alt="hero-image"
        className="w-full h-110 md:h-150 lg:h-187.5 object-cover z-[-1]"
      />
      <div className="absolute inset-0 bg-linear-to-r from-[rgba(0,0,0,0.3)] to-[rgba(0,0,0,0.2)] z-10 flex items-center justify-center ">
        <div className="text-center text-white p-6 ">
<Title title={" یه انتخاب خوشمزه و لذیذ"} />
           

          <p className="text-sm md:text-lg mb-6 ">
            تکه ای از روز که بهترین طعم هارو داره
          </p>
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
