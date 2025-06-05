import { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import CharacteriscticsCard from "../Components/Characteristic/CharacteristicsCard";
import Layout from "../layouts/Layout";

const Cualidades: NextPage = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [headerVisible, setHeaderVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Header animation
    const headerTimer = setTimeout(() => setHeaderVisible(true), 200);

    // Cards intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              entry.target.getAttribute("data-index") || "0"
            );
            setVisibleCards((prev) => {
              if (!prev.includes(index)) {
                return [...prev, index];
              }
              return prev;
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    // Observe all cards
    const cardElements = document.querySelectorAll("[data-index]");
    cardElements.forEach((el) => observer.observe(el));

    return () => {
      clearTimeout(headerTimer);
      observer.disconnect();
    };
  }, []);

  const qualityCards = [
    {
      cardTitle: "Compromiso",
      cardMedia: "/commitment.jpg",
      cardText:
        "Estamos comprometidos a entregar resultados excepcionales para nuestros clientes. Trabajamos arduamente para garantizar que cada proyecto cumpla con los más altos estándares de calidad y satisfacción",
    },
    {
      cardTitle: "Integridad",
      cardMedia: "/integrity.jpg",
      cardText:
        "Creemos en llevar a cabo nuestro negocio con el más alto nivel de integridad. Desde nuestras interacciones con los clientes hasta nuestras relaciones con los contratistas y socios, estamos comprometidos con la honestidad y la transparencia en todo lo que hacemos.",
    },
    {
      cardTitle: "Innovación",
      cardMedia: "/innovation.jpg",
      cardText:
        "Siempre estamos buscando formas de mejorar e innovar en la industria de bienes raíces. Ya sea a través de nuevas técnicas de construcción o enfoques innovadores de desarrollo, buscamos constantemente nuevas formas de aportar valor a nuestros clientes.",
    },
    {
      cardTitle: "Experticia",
      cardMedia: "/expertise.jpg",
      cardText:
        "Nuestro equipo en Gommir está formado por profesionales experimentados que tienen un profundo conocimiento de la industria inmobiliaria. Somos capaces de proporcionar orientación experta y apoyo a nuestros clientes durante todo el proceso de ejecución del proyecto.",
    },
    {
      cardTitle: "Responsabilidad",
      cardMedia: "/responsiveness.jpg",
      cardText:
        "Entendemos que el tiempo es esencial en la industria de bienes raíces. Es por eso que estamos comprometidos a ser receptivos y confiables, asegurando que las necesidades de nuestros clientes se satisfagan de manera oportuna.",
    },
    {
      cardTitle: "Satisfacción",
      cardMedia: "/satisfaction.jpg",
      cardText:
        "En Gommir, nuestro objetivo final es asegurar que nuestros clientes estén completamente satisfechos con los resultados de sus proyectos. Trabajamos en estrecha colaboración con nuestros clientes para comprender su visión y asegurarnos de que se cumplan o superen sus expectativas.",
    },
  ];

  return (
    <Layout
      title="Gommir - Cualidades"
      pageDescription="Cualidades destacadas de la empresa Gommir"
    >
      <div className="relative bg-gradient-to-b from-white via-blue-50/20 to-white overflow-hidden min-h-screen">
        {/* Floating Background Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-10 animate-float"></div>
        <div className="absolute bottom-40 right-10 w-24 h-24 bg-purple-100 rounded-full opacity-10 animate-float-delayed"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-green-100 rounded-full opacity-10 animate-float"></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-orange-100 rounded-full opacity-10 animate-float-delayed"></div>

        <div className="flex flex-col items-center p-4 relative z-10">
          {/* Header Section */}
          <div
            className={`text-center space-y-6 my-12 transition-all duration-1000 ${
              headerVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-medium text-blue-800 mb-4">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
              Nuestra Esencia
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-900 via-purple-700 to-pink-600 bg-clip-text text-transparent leading-tight">
              Nuestras Cualidades
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Los valores que nos definen y guían cada uno de nuestros proyectos
            </p>
          </div>

          {/* Cards Section */}
          <section className="container mx-auto px-4" ref={sectionRef}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {qualityCards.map((card, index) => (
                <div
                  key={index}
                  data-index={index.toString()}
                  className={`transition-all duration-700 ${
                    visibleCards.includes(index)
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-8 scale-95"
                  }`}
                  style={{
                    transitionDelay: `${index * 150}ms`,
                    transformOrigin: "center bottom",
                  }}
                >
                  <CharacteriscticsCard
                    cardTitle={card.cardTitle}
                    cardMedia={card.cardMedia}
                    cardText={card.cardText}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Stats Section */}
          <div
            className={`mt-20 mb-16 transition-all duration-1000 delay-1000 ${
              visibleCards.length > 3
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-100 p-8 shadow-lg">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="space-y-2">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    15+
                  </div>
                  <div className="text-sm text-gray-600">
                    Años de Experiencia
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                    200+
                  </div>
                  <div className="text-sm text-gray-600">
                    Proyectos Completados
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    98%
                  </div>
                  <div className="text-sm text-gray-600">
                    Satisfacción del Cliente
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    24/7
                  </div>
                  <div className="text-sm text-gray-600">Soporte Continuo</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cualidades;
