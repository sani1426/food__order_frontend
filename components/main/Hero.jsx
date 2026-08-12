import Image from "next/image"


const Hero = () => {
  return (
    <section className="grid grid-cols-2 ">
      <div className="">
        <h1 className="text-4xl font-semibold text-gradient gradient-anime">
          همه ی مشکلات با یه پیتزا خوب حل میشن
        </h1>
        <p className="my-4 text-light-muted">
          پیتزا تکه ی گمشده است که روزها رو کامل میکنه , یه راه حل ساده و خوشمزه
        </p>
        <div className="">
          <button className="bg-prime text-white px-8 py-2 rounded-full">
            سفارش
          </button>
          <button></button>
        </div>
      </div>
      <div className=" relative">
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