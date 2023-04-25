import Link from "next/link";

// render
const Header = () => {
  return (
    <header className="w-full bg-primary py-8">
      <Link
        href="/"
        className="relative m-auto block text-center font-serif text-5xl text-secondary"
      >
        Logo
      </Link>
    </header>
  );
};

export default Header;
