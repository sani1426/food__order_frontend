import Image from "next/image"


const Hero = () => {
  return (
    <section className="grid grid-cols-2 ">
      <div className="">
        <h1 className="text-4xl font-semibold gradient-anime">
          همه ی مشکلات با یه پیتزا خوب حل میشن
        </h1>
        <p className="mt-4 text-light-muted">
          پیتزا تکه ی گمشده است که روزها رو کامل میکنه , یه راه حل ساده و خوشمزه
        </p>
      </div>
      <div className="w-16 h-16 relative">
        <Image
          src={"/images/hero.png"}
          alt="hero-image/pizza"
          layout={"fill"}
          objectFit={"contain"}
        />
      </div>
    </section>
  );
}

export default Hero