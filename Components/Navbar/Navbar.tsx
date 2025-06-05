import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { UiContext } from "../../context/ui";
import LinkList from "../LinkList";

const Navbar = () => {
  const { toggleSideMenu } = useContext(UiContext);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-200/50"
          : "bg-white shadow-lg border-b border-gray-200"
      }`}
    >
      <div className="flex justify-between items-center px-4 py-2 h-[70px] max-w-7xl mx-auto">
        <Link href={"/"}>
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative w-12 h-12 flex z-10 group-hover:scale-110 transition-transform duration-300">
              <Image
                src="/logo.png"
                alt="navbar-logo"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
              />
            </div>
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700 tracking-wide group-hover:from-blue-700 group-hover:to-purple-700 transition-all duration-300">
              GOMMIR
            </span>
          </div>
        </Link>
        <div className="hidden md:flex">
          <LinkList />
        </div>
        <button
          onClick={toggleSideMenu}
          className="p-3 md:hidden text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-300 transform hover:scale-110 active:scale-95"
        >
          <Menu size={24} className="transition-transform duration-300" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
