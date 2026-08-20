"use client"

import {gsap} from "@/lib/gsap";
import { useGSAP } from "@gsap/react";

const Title = ({title , fsSm , fsLg}) => {
    useGSAP(() => {
  const tl = gsap.timeline();
  tl.set(".text", { opacity: 0 })
    .to(".text", { opacity: 1, duration: 0.1 })
    .to(".text", { opacity: 0.2, duration: 0.05 })
    .to(".text", { opacity: 1, duration: 0.1 })
    .to(".text", { opacity: 0, duration: 0.05 })
    .to(".text", {
      opacity: 1,
      textShadow: "0 0 20px #ff0081",
      duration: 0.3,
    });
    })
  
  return (
    <h1 className={`text text-${fsSm} lg:text-${fsLg}    text-gradient gradient-anime font-semibold`}>
      {title}
    </h1>
  );
}

export default Title