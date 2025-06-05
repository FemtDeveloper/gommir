import { X } from "lucide-react";
import { useContext } from "react";
import { UiContext } from "../../context/ui";
import LinkList from "../LinkList";

const SideMenu = () => {
  const { isMenuOpen, toggleSideMenu } = useContext(UiContext);

  if (!isMenuOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Lighter Backdrop */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-white/20 backdrop-blur-sm transition-opacity duration-200"
        onClick={toggleSideMenu}
      />

      {/* Enhanced Menu with Light Background */}
      <div className="absolute top-0 left-0 right-0 bg-gradient-to-br from-white/95 via-white/90 to-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-200/50 transform transition-transform duration-200 ease-out">
        {/* Subtle gradient border with brand colors */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#5bb792] via-[#19466f] to-[#5bb792] opacity-80"></div>

        {/* More subtle floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-12 left-12 w-1 h-1 bg-[#5bb792]/15 rounded-full animate-float opacity-50"></div>
          <div className="absolute top-16 right-20 w-0.5 h-0.5 bg-[#19466f]/15 rounded-full animate-float-delayed opacity-40"></div>
          <div
            className="absolute top-20 left-1/3 w-0.5 h-0.5 bg-[#5bb792]/10 rounded-full animate-float opacity-30"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        {/* More subtle close button */}
        <button
          onClick={toggleSideMenu}
          className="absolute right-4 top-4 text-gray-600 hover:text-gray-900 z-10 p-3 hover:bg-gray-100 rounded-full transition-all duration-150 transform hover:scale-105 group"
        >
          <X
            size={22}
            className="transition-transform duration-150 group-hover:rotate-45"
          />
        </button>

        {/* Menu content */}
        <div className="pt-18 pb-10 px-6">
          {/* Brand section with more subtle animation */}
          <div
            className="mb-6 text-center animate-fade-in-up"
            style={{
              animationDelay: "0.05s",
              animationFillMode: "forwards",
            }}
          >
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#5bb792] to-[#19466f] rounded-full mb-2 shadow-md">
              <span className="text-white font-bold text-lg">G</span>
            </div>
            <h2 className="text-lg font-bold text-gray-800 mb-1 bg-gradient-to-r from-[#5bb792] to-[#19466f] bg-clip-text text-transparent">
              Gommir
            </h2>
            <p className="text-gray-600 text-xs">Construcción & Desarrollo</p>
          </div>

          {/* Navigation */}
          <div
            className="animate-fade-in-up"
            style={{
              animationDelay: "0.1s",
              animationFillMode: "forwards",
            }}
          >
            <LinkList openMenu={toggleSideMenu} />
          </div>

          {/* More subtle decorative element */}
          <div
            className="mt-6 flex justify-center animate-fade-in-up"
            style={{
              animationDelay: "0.15s",
              animationFillMode: "forwards",
            }}
          >
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#5bb792]/20 to-transparent"></div>
          </div>
        </div>

        {/* More subtle bottom accent */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#19466f]/20 to-transparent"></div>
      </div>
    </div>
  );
};

export default SideMenu;
