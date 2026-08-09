"use client";
import { useTheme } from "@teispace/next-themes";
import Image from "next/image";

 function ThemeButton() {
  const { theme, setTheme } = useTheme();
  return (
    <div
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={`w-12.5 h-7.5 relative flex justify-between items-center rounded-[50px] cursor-pointer px-1 transition-all ${
        theme === "light" ? "bg-sky-200" : "bg-blue-600"
      }`}
    >
      <Image src="/icons/sun.png" alt="sun" width={14} height={14} />
      <div
        className={`w-6.25 max-h-6.25 rounded-full absolute transition-all  bg-white ${
          theme === "light" ? "left-px" : "right-px"
        }`}
      >
        {theme === "light" ? (
          <img
            src="/icons/sun.png"
            alt="logo-image"
            className="w-full h-full rounded-full object-cover"
          />
        ) : (
          <img
            src="/icons/newmoon.png"
            alt="logo-image"
            className="w-full h-full rounded-full object-cover"
          />
        )}
      </div>
      <Image src="/icons/moon.png" alt="moon" width={14} height={14} />
    </div>
  );
}

export default ThemeButton;;