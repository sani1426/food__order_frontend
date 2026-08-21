import { navItems } from "@/common/data";
import Link from "next/link";
import ThemeButton from "../UI/toggleTheme";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <header className="fixed w-full flex justify-center items-center z-100">
      <div className=" flex md:mt-4 items-center justify-between w-full  md:w-7xl md:max-w-[90vw] mx-auto bg-sec p-6 md:rounded-[50px] shadow-lg">
        <Link
          href="/"
          className="text-gradient font-semibold text-3xl md:text-4xl"
        >
          پیتزاویچ
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-light-muted font-semibold ">
          {navItems.map((link) => (
            <Link
              className="hover:text-second transition-colors duration-300"
              key={link.href}
              href={link.href}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center justify-center gap-5">
          <Link
            className="bg-prime text-white rounded-full px-8 py-2 hidden md:block"
            href="sign-up"
          >
            ثبت نام
          </Link>
          <Link
            className="bg-prime text-white rounded-full p-3 md:hidden"
            href="sign-up"
          >
         <FaUserCircle className="text-2xl" />
          </Link>
          <ThemeButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
