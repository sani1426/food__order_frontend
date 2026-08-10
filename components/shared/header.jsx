import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <Link href="/" className="text-gradient font-semibold text-2xl">
        پیتزاویچ
      </Link>
      <nav className="flex gap-4 text-dark-muted font-semibold">
        <Link href="/">صفحه اصلی</Link>
        <Link href="/menu">منو</Link>
        <Link href="/about">درباره ما</Link>
        <Link href="/contact">تماس با ما</Link>
        <Link href="sign-up">ثبت نام</Link>
      </nav>
    </header>
  );
};

export default Header;
