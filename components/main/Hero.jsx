import Image from "next/image";
import Link from "next/link";
import { IoArrowBackOutline } from "react-icons/io5";
import GlowBorderCard from "../UI/animeBorder";

const Hero = () => {
  return (
    <section className="relative">
      <Image
        src={"/images/hero.png"}
        alt="hero-image"
        className="w-full h-110 md:h-150 lg:h-187.5 object-cover z-[-1]"
      />
      <div className="absolute inset-0 bg-linear-to-r from-[rgba(0,0,0,0.3)] to-[rgba(0,0,0,0.2)] z-10 flex items-center justify-center ">
        <div className="text-center text-white p-6 ">
              <GlowBorderCard>

          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
            همه ی مشکلات با یه پیتزا خوب حل میشن{" "}
          </h1>
              </GlowBorderCard>
          <p className="text-sm md:text-lg text-light-muted mb-6">
            پیتزا تکه ی گمشده است که روزها رو کامل میکنه , یه راه حل ساده و
            خوشمزه
          </p>
          <Link
            href="#"
            className="bg-prime text-white rounded-full px-8 py-2 flex items-center justify-center gap-2"
          >
            <span>سفارش</span>
            <IoArrowBackOutline />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
