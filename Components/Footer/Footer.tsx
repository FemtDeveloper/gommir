import { Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100 pb-5">
      <div className="flex flex-col sm:flex-row justify-center items-center">
        <div className="sm:w-1/2 flex justify-center">
          <div className="w-80 relative mt-2.5">
            <Link href={"/"}>
              <Image
                src="/footer-logo.png"
                alt="footer-logo"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
              />
            </Link>
          </div>
        </div>

        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 justify-center">
          <div className="sm:col-span-2 flex justify-center">
            <h3 className="text-xl font-bold text-[#000f40]">
              Datos de contacto
            </h3>
          </div>

          <div className="flex flex-row justify-center items-center gap-3">
            <MapPin className="text-[#000823]" size={24} />
            <div>
              <p className="text-sm text-[#000f40] font-medium">
                Bogotá D.C, Colombia
              </p>
            </div>
          </div>

          <div className="flex flex-row justify-center items-center gap-3">
            <Mail className="text-[#000823]" size={24} />
            <p className="text-sm text-[#000f40] font-medium">
              contacto@gommirltda.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
