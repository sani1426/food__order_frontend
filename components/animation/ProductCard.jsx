"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

export default function ProductCard({ product }) {
  const card = useRef(null);

  useGSAP(
    () => {
      gsap.from(card.current, {
        y: 100,
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card.current,
          start: "top 85%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: card }
  );

  return (
    <article
      ref={card}
      className="product-card bg-white rounded-3xl p-5 shadow-xl"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full rounded-2xl"
      />

      <h3 className="mt-4 text-2xl font-bold">{product.name}</h3>

      <p className="mt-2 text-gray-500">{product.description}</p>

      <div className="flex justify-between items-center mt-5">
        <span className="text-xl font-bold">${product.price}</span>

        <button className="px-5 py-2 rounded-full bg-black text-white">
          Add
        </button>
      </div>
    </article>
  );
}
