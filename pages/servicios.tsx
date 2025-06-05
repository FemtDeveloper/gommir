import { NextPage } from "next";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Layouts from "../layouts";

const Servicios: NextPage = () => {
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

  const services = [
    {
      title: "Saneamiento de tierras",
      description:
        "GOMMIR es una empresa que se encarga de realizar los trámites necesarios para que el terreno deseado cumpla con todos los trámites necesarios para su posterior utilización dentro de cualquier proyecto.",
      image: "/saneamiento.jpg",
      badge: "Documentación",
      gradientFrom: "from-[#5bb792]/10",
      gradientTo: "to-[#19466f]/10",
      textColor: "text-[#19466f]",
      dotColor: "bg-[#5bb792]",
    },
    {
      title: "Adecuación de terrenos",
      description:
        "Se hace un trabajo operativo en el terreno con maquinaria y personal especializado, adecuando y dejándolo apto para la ejecución de cualquier proyecto inmobiliario que se requiera.",
      image: "/adecuacion.jpg",
      badge: "Preparación",
      gradientFrom: "from-[#19466f]/10",
      gradientTo: "to-[#5bb792]/10",
      textColor: "text-[#19466f]",
      dotColor: "bg-[#19466f]",
    },
    {
      title: "Ejecución De Proyectos",
      description:
        "En Gommir nos enorgullecemos de nuestra capacidad para ejecutar proyectos de manera experta de principio a fin. Con un equipo de profesionales calificados y un compromiso con la excelencia, tenemos un historial comprobado de brindar resultados de alta calidad a tiempo y dentro del presupuesto.",
      image: "/ejecucion.jpg",
      badge: "Construcción",
      gradientFrom: "from-[#5bb792]/10",
      gradientTo: "to-[#19466f]/20",
      textColor: "text-[#5bb792]",
      dotColor: "bg-[#5bb792]",
    },
  ];

  return (
    <Layouts
      pageDescription="Servicios ofrecidos por Gommir. Saneamiento de tierras, adecuación de terreno y Ejecución de proyectos"
      title={"Gommir - Servicios"}
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
          <div className="absolute inset-0 bg-gradient-to-b from-[#19466f]/30 via-transparent to-[#19466f]/40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white space-y-4 animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-[#5bb792]/20 bg-clip-text text-transparent">
                Nuestros Servicios
              </h1>
              <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto px-4">
                Soluciones integrales para el sector inmobiliario
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="relative bg-gradient-to-b from-white via-[#5bb792]/5 to-white overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-10 animate-float"></div>
        <div className="absolute bottom-40 right-10 w-24 h-24 bg-purple-100 rounded-full opacity-10 animate-float-delayed"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-orange-100 rounded-full opacity-10 animate-float"></div>

        <div className="container mx-auto px-4 py-16 space-y-20">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => {
                sectionRefs.current[index] = el;
              }}
              data-index={index.toString()}
              className={`transition-all duration-1000 ${
                visibleSections.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div
                className={`flex flex-col ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                } gap-12 items-center`}
              >
                <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left w-full lg:w-1/2 space-y-6">
                  <div
                    className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${service.gradientFrom} ${service.gradientTo} rounded-full text-sm font-medium ${service.textColor} mb-4`}
                  >
                    <span
                      className={`w-2 h-2 ${service.dotColor} rounded-full mr-2 animate-pulse`}
                    ></span>
                    {service.badge}
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#19466f] via-[#5bb792] to-[#19466f] bg-clip-text text-transparent leading-tight">
                    {service.title}
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-[#5bb792] to-[#19466f] rounded-full"></div>
                  <p className="text-gray-700 leading-relaxed text-lg max-w-xl">
                    {service.description}
                  </p>

                  {/* Stats or Features for each service */}
                  <div className="grid grid-cols-2 gap-4 w-full max-w-md mt-8">
                    <div className="text-center p-4 bg-white/50 rounded-lg border border-gray-100">
                      <div className="text-2xl font-bold text-blue-600">
                        100%
                      </div>
                      <div className="text-sm text-gray-600">Calidad</div>
                    </div>
                    <div className="text-center p-4 bg-white/50 rounded-lg border border-gray-100">
                      <div className="text-2xl font-bold text-green-600">
                        24/7
                      </div>
                      <div className="text-sm text-gray-600">Soporte</div>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 group">
                  <div className="relative other-images overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 group-hover:scale-105">
                    <Image
                      src={service.image}
                      fill
                      alt={service.title}
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#5bb792]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Overlay with service number */}
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center font-bold text-blue-600 text-lg">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layouts>
  );
};

export default Servicios;
