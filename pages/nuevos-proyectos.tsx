import { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import Layout from "../layouts/Layout";
import ProjectCard from "../Components/ProjectCard";

const Nuevosproyectos: NextPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);

    // Stagger project animations
    const projectTimer = setTimeout(() => {
      [0].forEach((index, i) => {
        setTimeout(() => {
          setVisibleProjects((prev) => [...prev, index]);
        }, i * 300);
      });
    }, 800);

    return () => {
      clearTimeout(timer);
      clearTimeout(projectTimer);
    };
  }, []);

  const projects = [
    {
      title: "Reserva de Punta Canoa",
      description:
        "Nuevo proyecto próximo a comenzar en la ciudad de Cartagena de Indias. Un desarrollo residencial de lujo que combina arquitectura moderna con la belleza natural del Caribe.",
      image: "/cartagena-via.jpg",
      status: "Próximamente",
      location: "Punta Canoa, Cartagena",
      units: "En desarrollo",
      area: "Por definir",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "En desarrollo":
        return "bg-blue-100 text-blue-800";
      case "Planeación":
        return "bg-yellow-100 text-yellow-800";
      case "En construcción":
        return "bg-green-100 text-green-800";
      case "Próximamente":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Layout
      pageDescription="Nuevos proyectos en Cartagena de la empresa Gommir"
      title="Nuevos proyectos"
    >
      <div className="relative bg-gradient-to-b from-white via-blue-50/20 to-white overflow-hidden min-h-screen">
        {/* Floating Background Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-10 animate-float"></div>
        <div className="absolute bottom-40 right-10 w-24 h-24 bg-purple-100 rounded-full opacity-10 animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-100 rounded-full opacity-10 animate-float"></div>
        <div className="absolute bottom-1/4 right-1/3 w-20 h-20 bg-orange-100 rounded-full opacity-10 animate-float-delayed"></div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          {/* Header Section */}
          <div
            className={`text-center space-y-6 mb-16 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-medium text-blue-800 mb-4">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
              Innovación Inmobiliaria
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-900 via-purple-700 to-pink-600 bg-clip-text text-transparent leading-tight">
              Nuevos Proyectos
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conoce nuestro próximo desarrollo inmobiliario en la hermosa
              ciudad de Cartagena
            </p>
          </div>

          {/* Featured Project */}
          <div className="flex justify-center mb-16">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                status={project.status}
                location={project.location}
                units={project.units}
                area={project.area}
                isVisible={visibleProjects.includes(index)}
                delay={index * 300}
              />
            ))}
          </div>

          {/* Future Projects Section */}
          <div
            className={`mb-16 transition-all duration-1000 delay-500 ${
              visibleProjects.length > 0
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-800 to-purple-600 bg-clip-text text-transparent mb-4">
                Próximos Desarrollos
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Estamos evaluando nuevas oportunidades de inversión y desarrollo
                en la región Caribe
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white/30 backdrop-blur-sm rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Residencial
                </h3>
                <p className="text-gray-600">
                  Proyectos habitacionales de lujo y sostenibles
                </p>
              </div>

              <div className="text-center p-6 bg-white/30 backdrop-blur-sm rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Turístico
                </h3>
                <p className="text-gray-600">
                  Desarrollos hoteleros y recreativos costeros
                </p>
              </div>

              <div className="text-center p-6 bg-white/30 backdrop-blur-sm rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Comercial
                </h3>
                <p className="text-gray-600">
                  Espacios comerciales y de oficinas modernos
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div
            className={`text-center transition-all duration-1000 delay-1000 ${
              visibleProjects.length > 0
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">
                ¿Interesado en nuestros proyectos?
              </h2>
              <p className="text-lg mb-6 text-blue-100">
                Mantente informado sobre nuestros desarrollos y nuevas
                oportunidades de inversión
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 font-medium py-3 px-8 rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                  Contactanos ahora
                </button>
                <button className="border-2 border-white text-white font-medium py-3 px-8 rounded-lg hover:bg-white/10 transition-all duration-300 cursor-pointer">
                  Suscribirse a actualizaciones
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Nuevosproyectos;
