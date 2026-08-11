import { navItems } from "@/common/data";
import Link from "next/link";
import ThemeButton from "../UI/toggleTheme";

const Header = () => {
  return (
    <header className="flex items-center justify-between max-w-4xl ">
      <Link href="/" className="text-gradient font-semibold text-2xl">
        پیتزاویچ
      </Link>
      <nav className="flex items-center gap-8 text-light-muted font-semibold">
        {navItems.map((link) => (
          <Link
            className="hover:text-second transition-colors duration-300"
            key={link.href}
            href={link.href}
          >
            {link.name}
          </Link>
        ))}
        <Link
          className="bg-prime text-white rounded-full px-8 py-2"
          href="sign-up"
        >
          ثبت نام
        </Link>
      </nav>
      <ThemeButton />
    </header>
  );
};

export default Header;
