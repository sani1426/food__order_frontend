"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

export default function ScrollAnimation() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.from(".menu-title", {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",

        scrollTrigger: {
          trigger: ".menu-title",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: container }
  );

  return (
    <div ref={container}>
      <h2 className="menu-title text-5xl font-bold">Our Menu</h2>
    </div>
  );
}
