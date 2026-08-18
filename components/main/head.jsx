"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function HeroOne() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.to(".hero-pizza", {
        y: 100,
        rotation: 5,
        scale: 1.05,

        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="relative min-h-screen overflow-hidden bg-[#15100c]"
    >
      {/* متن */}
      <div className="relative z-20 mx-auto flex min-h-screen max-w-7xl items-center px-6">
        <div className="ml-auto w-full max-w-xl text-right">
          <span className="mb-4 block text-sm font-bold uppercase tracking-[0.4em] text-orange-500">
            Fresh & Delicious
          </span>

          <h1 className="text-5xl font-black leading-tight text-white md:text-7xl">
            Taste The
            <span className="block text-orange-500">Perfect Pizza</span>
          </h1>

          <p className="mt-6 max-w-lg ml-auto text-lg leading-8 text-gray-300">
            تازه، داغ و خوشمزه؛ بهترین طعم پیتزا با مواد اولیه تازه.
          </p>

          <div className="mt-8 flex justify-end gap-4">
            <button className="rounded-full bg-orange-500 px-8 py-4 font-bold text-white transition hover:bg-orange-600">
              سفارش آنلاین
            </button>

            <button className="rounded-full border border-white/30 px-8 py-4 font-bold text-white transition hover:bg-white hover:text-black">
              مشاهده منو
            </button>
          </div>
        </div>
      </div>

      {/* عکس پیتزا */}
      <div
        className="
          hero-pizza
          absolute
          -bottom-20
          -left-32
          z-10
          h-[550px]
          w-[650px]
          rotate-[-7deg]
          overflow-hidden
          md:h-[650px]
          md:w-[750px]
        "
        style={{
          clipPath: "polygon(0 8%, 92% 0, 100% 90%, 8% 100%)",
        }}
      >
        <Image
          src="/images/hero-1.png"
          alt="Delicious pizza"
          fill
          priority
          className="
            object-cover
            scale-[1.12]
            rotate-[7deg]
          "
        />

        {/* گرادیانت روی عکس */}
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-transparent to-[#15100c]" />
      </div>

      {/* نور تزئینی */}
      <div className="absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-orange-500/20 blur-[150px]" />
    </section>
  );
}
