import { NextPage } from "next";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Layouts from "../layouts";

const Nosotros: NextPage = () => {
  const [visibleSections, setVisibleSections] = useState<number[]>([]);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              entry.target.getAttribute("data-index") || "0"
            );
            setVisibleSections((prev) => {
              if (!prev.includes(index)) {
                return [...prev, index];
              }
              return prev;
            });
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Layouts
      pageDescription="Quienes somos, Visión, Misión"
      title={"Quienes Somos"}
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="slide-image relative">
          <Image
            src={"/nostros-top.jpg"}
            alt={"People working"}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#19466f]/20 via-transparent to-[#19466f]/30"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white space-y-4 animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-[#5bb792]/20 bg-clip-text text-transparent">
                Nosotros
              </h1>
              <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto px-4">
                Conoce nuestra historia, misión y visión
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative bg-gradient-to-b from-white via-[#5bb792]/5 to-white overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-10 animate-float"></div>
        <div className="absolute bottom-40 right-10 w-24 h-24 bg-purple-100 rounded-full opacity-10 animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-100 rounded-full opacity-10 animate-float"></div>

        <div className="container mx-auto px-4 py-16 space-y-20">
          {/* Quienes Somos Section */}
          <div
            ref={(el) => {
              sectionRefs.current[0] = el;
            }}
            data-index="0"
            className={`transition-all duration-1000 ${
              visibleSections.includes(0)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left w-full lg:w-1/2 space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#5bb792]/10 to-[#19466f]/10 rounded-full text-sm font-medium text-[#19466f] mb-4">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                  Nuestra Historia
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-900 via-blue-700 to-purple-600 bg-clip-text text-transparent leading-tight">
                  Quienes Somos
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                <p className="text-gray-700 leading-relaxed text-lg max-w-xl">
                  GOMMIR es una empresa con una gran responsabilidad social y
                  ambiental dedicada a la construcción, urbanización, y
                  promoción de servicios para el sector inmobiliario, cuyo
                  espíritu empresarial está orientado al servicio y a la
                  competitividad, fomentando y propendiendo por el
                  fortalecimiento en sus diferentes manifestaciones, apoyando la
                  ejecución de los planes y programas de desarrollo económico y
                  social.
                </p>
              </div>
              <div className="w-full lg:w-1/2 group">
                <div className="relative other-images overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 group-hover:scale-105">
                  <Image
                    src={"/somos.jpg"}
                    fill
                    alt="team"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Nuestra Misión Section */}
          <div
            ref={(el) => {
              sectionRefs.current[1] = el;
            }}
            data-index="1"
            className={`transition-all duration-1000 delay-200 ${
              visibleSections.includes(1)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex flex-col-reverse lg:flex-row gap-12 items-center">
              <div className="w-full lg:w-1/2 group">
                <div className="relative other-images overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 group-hover:scale-105">
                  <Image
                    src={"/mission.jpg"}
                    fill
                    alt="mission"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tl from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left w-full lg:w-1/2 space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-sm font-medium text-purple-800 mb-4">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse"></span>
                  Nuestro Propósito
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-900 via-purple-700 to-pink-600 bg-clip-text text-transparent leading-tight">
                  Nuestra Misión
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                <p className="text-gray-700 leading-relaxed text-lg max-w-xl">
                  Crear valor para nuestros accionistas y colaboradores,
                  aportando bienestar a la sociedad, con pleno respeto hacia el
                  medio ambiente, para cumplir el triple propósito sostenible.
                </p>
              </div>
            </div>
          </div>

          {/* Nuestra Visión Section */}
          <div
            ref={(el) => {
              sectionRefs.current[2] = el;
            }}
            data-index="2"
            className={`transition-all duration-1000 delay-400 ${
              visibleSections.includes(2)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left w-full lg:w-1/2 space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 rounded-full text-sm font-medium text-green-800 mb-4">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                  Nuestro Futuro
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-900 via-green-700 to-blue-600 bg-clip-text text-transparent leading-tight">
                  Nuestra Visión
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
                <p className="text-gray-700 leading-relaxed text-lg max-w-xl">
                  Ser en 2.025 una empresa destacada en el sector inmobiliario
                  por ofrecer servicios innovadores, caracterizada por la
                  excelencia y la honestidad en sus procesos, como medios para
                  ganar la confianza y el compromiso de sus asociados.
                </p>
              </div>
              <div className="w-full lg:w-1/2 group">
                <div className="relative other-images overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 group-hover:scale-105">
                  <Image
                    src={"/goals.jpg"}
                    fill
                    alt="goals"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-green-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  );
};

export default Nosotros;
