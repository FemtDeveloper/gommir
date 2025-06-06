import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  openMenu?: () => void | null;
}

const LinkList = ({ openMenu }: Props) => {
  const router = useRouter();

  const navItems = [
    { name: "Nosotros", href: "nosotros" },
    { name: "Servicios", href: "servicios" },
    { name: "Contáctenos", href: "contactenos" },
  ];

  return (
    <ul className="flex flex-col md:flex-row list-none m-0 p-0 gap-3 md:gap-1">
      {navItems.map((item, index) => {
        const isActive = router.pathname === `/${item.href}`;

        return (
          <li
            key={item.name}
            className="p-0 relative group animate-fade-in-up"
            style={{
              animationDelay: `${0.05 + index * 0.03}s`,
              animationFillMode: "forwards",
            }}
          >
            <Link
              href={`/${item.href}`}
              onClick={openMenu}
              className={`block px-5 py-3 font-semibold rounded-lg transition-all duration-150 text-sm relative overflow-hidden border cursor-pointer ${
                isActive
                  ? "text-gray-800 bg-gradient-to-r from-[#5bb792]/15 to-[#19466f]/15 border-[#5bb792]/25 shadow-sm"
                  : "text-gray-700 hover:text-gray-900 hover:bg-gray-50 border-gray-200 hover:border-[#5bb792]/15"
              }`}
            >
              <span
                className={`absolute inset-0 rounded-lg transform transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-[#5bb792]/8 to-[#19466f]/8 scale-100"
                    : "bg-gradient-to-r from-[#5bb792]/3 to-[#19466f]/3 scale-x-0 group-hover:scale-x-100"
                } origin-left`}
              ></span>

              <span className="relative z-10 transition-transform duration-150 flex items-center gap-2">
                <span
                  className={`w-1 h-1 rounded-full transition-all duration-150 ${
                    isActive
                      ? "bg-[#5bb792]"
                      : "bg-gray-400 group-hover:bg-[#5bb792]/50"
                  }`}
                ></span>
                {item.name}
              </span>

              <span
                className={`absolute bottom-0.5 left-5 right-5 h-0.5 bg-gradient-to-r from-[#5bb792] to-[#19466f] transform transition-all duration-150 ${
                  isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              ></span>

              {isActive && (
                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-0.5 h-4 bg-gradient-to-b from-[#5bb792] to-[#19466f] rounded-r-full"></span>
              )}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default LinkList;
