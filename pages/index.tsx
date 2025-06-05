import { useEffect, useState } from "react";
import CharacteriscticsCard from "../Components/Characteristic/CharacteristicsCard";
import ContactForm from "../Components/contact/ContactForm";
import MyMap from "../Components/Maps/Maps";
import NuevosProyectos from "../Components/NuevosProyectos";
import Slider from "../Components/Slide";
import Layout from "../layouts";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    setIsVisible(true);

    // Stagger card animations
    const timer = setTimeout(() => {
      const intervals = [0, 200, 400, 600, 800, 1000].map((delay, index) =>
        setTimeout(() => setVisibleCards((prev) => [...prev, index]), delay)
      );

      return () => intervals.forEach(clearTimeout);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const styles = {
    height: "380px",
  };

  return (
    <Layout
      title="Inicio"
      pageDescription="Página de inicio de la empresa Gommir Ltda"
    >
      <Slider />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-100 rounded-full opacity-20 animate-float-delayed"></div>

        <div className="container mx-auto px-4 py-6 md:py-10">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-12 my-8">
            <div
              className={`flex flex-col items-center lg:items-start justify-center gap-8 w-full lg:w-2/3 text-center lg:text-left px-4 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="space-y-6">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 mb-6 leading-tight">
                  Gommir
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto lg:mx-0"></div>
              </div>

              <p className="text-xl leading-relaxed text-gray-700 max-w-4xl font-light">
                Con años de experiencia y un equipo de profesionales dedicados,
                tenemos las habilidades y los recursos para convertir su visión
                inmobiliaria en una realidad. Desde construcciones nuevas hasta
                renovaciones y desarrollos comerciales, tenemos la experiencia
                para brindar resultados de alta calidad a tiempo y dentro del
                presupuesto.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer">
                  Nuestros Proyectos
                </button>
                <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer">
                  Contáctanos
                </button>
              </div>
            </div>

            <div
              className={`relative w-full lg:w-1/2 transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              {/* Enhanced CharacteristicsCard Display */}
              <div className="relative w-full max-w-md mx-auto">
                {/* Enhanced glowing background effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-3xl blur-2xl animate-pulse-glow"></div>

                <div className="relative z-10">
                  <CharacteriscticsCard
                    cardTitle="Nuestro Equipo"
                    cardMedia="/team.jpg"
                    cardText="Conoce al equipo profesional que trabaja incansablemente para desarrollar proyectos inmobiliarios de excelencia. Nuestro compromiso es transformar la industria con innovación y calidad."
                    cardLink="nosotros"
                    delay={300}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NuevosProyectos />

      {/* Mobile version */}
      <div className="lg:hidden p-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-purple-900 mb-4">
            Nuestras Cualidades
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto"></div>
        </div>
        <div className="flex justify-center">
          <CharacteriscticsCard
            cardTitle="Nuestras cualidades"
            cardText="Conoce nuestras cualidades"
            cardMedia="/characteristics.jpg"
            cardStyles={styles}
            cardLink={"cualidades"}
          />
        </div>
      </div>

      {/* Desktop version */}
      <section className="hidden lg:block py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-40 h-40 bg-blue-600 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-600 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-blue-400 rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 mb-6">
              Nuestras Cualidades
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubra los valores y principios que nos distinguen en cada
              proyecto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-7xl mx-auto">
            <CharacteriscticsCard
              cardTitle="Compromiso"
              cardMedia="/commitment.jpg"
              cardText="Estamos comprometidos a entregar resultados excepcionales para nuestros clientes. Trabajamos arduamente para garantizar que cada proyecto cumpla con los más altos estándares de calidad y satisfacción"
              delay={visibleCards.includes(0) ? 0 : 200}
            />
            <CharacteriscticsCard
              cardTitle="Integridad"
              cardMedia="/integrity.jpg"
              cardText="Creemos en llevar a cabo nuestro negocio con el más alto nivel de integridad. Desde nuestras interacciones con los clientes hasta nuestras relaciones con los contratistas y socios, estamos comprometidos con la honestidad y la transparencia."
              delay={visibleCards.includes(1) ? 0 : 400}
            />
            <CharacteriscticsCard
              cardTitle="Innovación"
              cardMedia="/innovation.jpg"
              cardText="Siempre estamos buscando formas de mejorar e innovar en la industria de bienes raíces. Ya sea a través de nuevas técnicas de construcción o enfoques innovadores de desarrollo, buscamos constantemente nuevas formas de aportar valor."
              delay={visibleCards.includes(2) ? 0 : 600}
            />
            <CharacteriscticsCard
              cardTitle="Experticia"
              cardMedia="/expertise.jpg"
              cardText="Nuestro equipo en Gommir está formado por profesionales experimentados que tienen un profundo conocimiento de la industria inmobiliaria. Somos capaces de proporcionar orientación experta y apoyo durante todo el proceso."
              delay={visibleCards.includes(3) ? 0 : 800}
            />
            <CharacteriscticsCard
              cardTitle="Responsabilidad"
              cardMedia="/responsiveness.jpg"
              cardText="Entendemos que el tiempo es esencial en la industria de bienes raíces. Es por eso que estamos comprometidos a ser receptivos y confiables, asegurando que las necesidades de nuestros clientes se satisfagan de manera oportuna."
              delay={visibleCards.includes(4) ? 0 : 1000}
            />
            <CharacteriscticsCard
              cardTitle="Satisfacción"
              cardMedia="/satisfaction.jpg"
              cardText="En Gommir, nuestro objetivo final es asegurar que nuestros clientes estén completamente satisfechos con los resultados de sus proyectos. Trabajamos en estrecha colaboración para comprender su visión y superar sus expectativas."
              delay={visibleCards.includes(5) ? 0 : 1200}
            />
          </div>
        </div>
      </section>

      <MyMap />
      <ContactForm />
    </Layout>
  );
}
