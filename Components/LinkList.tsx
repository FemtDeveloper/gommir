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
    <ul className="flex flex-col md:flex-row list-none m-0 p-0 gap-2 md:gap-1">
      {navItems.map((item, index) => {
        const isActive = router.pathname === `/${item.href}`;

        return (
          <li key={item.name} className="p-0 relative group">
            <Link
              href={`/${item.href}`}
              onClick={openMenu}
              className={`block px-6 py-3 font-semibold rounded-xl transition-all duration-300 text-base relative overflow-hidden ${
                isActive
                  ? "text-blue-600 bg-blue-50"
                  : "text-gray-700 hover:text-blue-600 hover:bg-blue-50/50"
              }`}
            >
              {/* Animated background */}
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-xl"></span>

              {/* Text */}
              <span className="relative z-10 group-hover:transform group-hover:translate-x-1 transition-transform duration-300">
                {item.name}
              </span>

              {/* Underline animation */}
              <span
                className={`absolute bottom-1 left-6 right-6 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform transition-transform duration-300 ${
                  isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              ></span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default LinkList;
