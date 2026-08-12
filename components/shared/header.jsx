import { navItems } from "@/common/data";
import Link from "next/link";
import ThemeButton from "../UI/toggleTheme";
import {} from "react-icons"

const Header = () => {
  return (
    <header className=" fixed flex mt-4 items-center justify-between w-6xl max-w-[90vw] mx-auto bg-sec p-5 rounded-[40px]">
      <Link href="/" className="text-gradient font-semibold text-3xl md:text-4xl">
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
          className="bg-prime text-white rounded-full px-8 py-2"
          href="sign-up"
        >
          ثبت نام
        </Link>
        <ThemeButton />
      </div>
    </header>
  );
};

export default Header;
