import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { UiContext } from "../../context/ui";
import LinkList from "../LinkList";

const Navbar = () => {
  const { toggleSideMenu } = useContext(UiContext);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg border-b border-gray-200">
      <div className="flex justify-between items-center px-4 py-2 h-[70px] max-w-7xl mx-auto">
        <Link href={"/"}>
          <div className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="relative w-12 h-12 flex z-10">
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
            <span className="text-2xl font-bold text-[#001660] tracking-wide">
              GOMMIR
            </span>
          </div>
        </Link>
        <div className="hidden md:flex">
          <LinkList />
        </div>
        <button
          onClick={toggleSideMenu}
          className="p-2 md:hidden text-[#001e85] hover:bg-gray-100 rounded-lg transition-colors"
        >
          <Menu size={28} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
