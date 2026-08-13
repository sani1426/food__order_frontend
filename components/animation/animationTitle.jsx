"use client"

import {gsap} from "@/lib/gsap";
import { useGSAP } from "@gsap/react";

const Title = ({title}) => {
    useGSAP(() => {
  const tl = gsap.timeline();
  tl.set(".text", { opacity: 0 })
  .to(".text", { opacity: 1, duration: 0.1 })
    .to(".text", { opacity: 0.2, duration: 0.05 })
    .to(".text", { opacity: 1, duration: 0.1 })
    .to(".text", { opacity: 0, duration: 0.05 })
    .to(".text", {
      opacity: 1,
      textShadow: "0 0 20px #00FF66",
      duration: 0.3,
    });
    })
  
  return (
    <h1 className="text text-3xl md:text-6xl text-gradient gradient-anime font-semibold">
      {title}
    </h1>
  );
}

export default Title