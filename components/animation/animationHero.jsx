"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

export default function AnimationHero() {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(".hero-title", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      })
        .from(
          ".hero-description",
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.5"
        )
        .from(
          ".hero-button",
          {
            scale: 0.7,
            opacity: 0,
            duration: 0.6,
            ease: "back.out(1.7)",
          },
          "-=0.3"
        )
        .from(
          ".hero-pizza",
          {
            x: 300,
            rotation: 20,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.8"
        );
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div>
        <h1 className="hero-title text-6xl font-bold">The Perfect Pizza</h1>

        <p className="hero-description mt-5">
          Fresh ingredients. Perfect crust. Amazing taste.
        </p>

        <button className="hero-button mt-8 px-8 py-4 rounded-full bg-red-500 text-white">
          Order Now
        </button>
      </div>

      <img
        className="hero-pizza w-125"
        src="/images/pizza/hero-pizza.jpg"
        alt="Pizza"
      />
    </section>
  );
}
