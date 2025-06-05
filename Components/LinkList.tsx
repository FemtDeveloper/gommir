import Link from "next/link";

interface Props {
  openMenu?: () => void | null;
}

const LinkList = ({ openMenu }: Props) => {
  return (
    <ul className="flex flex-col md:flex-row list-none m-0 p-0 gap-2 md:gap-0">
      {["Nosotros", "Servicios", "Contactenos"].map((text, index) => (
        <li key={text} className="p-0">
          <Link
            href={`${text.toLowerCase()}`}
            onClick={openMenu}
            className="block px-4 py-2 text-[#001660] font-semibold hover:text-blue-600 hover:bg-gray-50 rounded-md transition-all duration-200 text-base"
          >
            {text}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default LinkList;
