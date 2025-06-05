import { X } from "lucide-react";
import { useContext } from "react";
import { UiContext } from "../../context/ui";
import LinkList from "../LinkList";

const SideMenu = () => {
  const { isMenuOpen, toggleSideMenu } = useContext(UiContext);

  if (!isMenuOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={toggleSideMenu}
      />

      {/* Menu */}
      <div className="absolute top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-lg border border-white/20 rounded-b-lg">
        <button
          onClick={toggleSideMenu}
          className="absolute right-3 top-3 text-2xl font-bold z-10 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X size={24} />
        </button>
        <div className="pt-16 pb-8 px-4">
          <LinkList openMenu={toggleSideMenu} />
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
