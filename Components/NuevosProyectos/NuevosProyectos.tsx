import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProjectCard from "../ProjectCard";

const NuevosProyectos = () => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("nuevos-proyectos");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleContactClick = () => {
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/contactenos");
    }
  };

  const handleMoreInfoClick = () => {
    router.push("/nuevos-proyectos");
  };

  const project = {
    title: "Reserva de Punta Canoa",
    description:
      "Nuevo proyecto próximo a comenzar en la ciudad de Cartagena de Indias. Un desarrollo residencial de lujo que combina arquitectura moderna con la belleza natural del Caribe.",
    image: "/cartagena-via.jpg",
    status: "Próximamente",
    location: "Punta Canoa, Cartagena",
    units: "En desarrollo",
    area: "Por definir",
  };

  return (
    <section
      id="nuevos-proyectos"
      className="relative bg-gradient-to-br from-[#5bb792]/5 via-white to-[#19466f]/5 py-20 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-[#5bb792]/20 to-[#19466f]/20 rounded-full -translate-x-1/2 -translate-y-1/2 animate-float"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#19466f]/20 to-[#5bb792]/20 rounded-full translate-x-1/2 translate-y-1/2 animate-float-delayed"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-12">
          <div
            className={`text-center lg:text-left lg:w-1/2 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="space-y-6">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#5bb792]/20 to-[#19466f]/20 text-[#19466f] rounded-full text-sm font-semibold tracking-wide uppercase">
                Próximamente
              </span>

              <h1 className="text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#19466f] via-[#5bb792] to-[#19466f] leading-tight">
                Nuevos Proyectos
              </h1>

              <div className="w-24 h-1 bg-gradient-to-r from-[#5bb792] to-[#19466f] rounded-full mx-auto lg:mx-0"></div>

              <p className="text-xl text-gray-700 leading-relaxed max-w-lg mx-auto lg:mx-0 font-light">
                Estamos trabajando en emocionantes nuevos desarrollos
                inmobiliarios. Mantente informado sobre nuestros próximos
                proyectos.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={handleContactClick}
                  className="bg-gradient-to-r from-[#5bb792] to-[#19466f] hover:from-[#4da583] hover:to-[#15395e] text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
                >
                  Contáctanos
                </button>
                <button
                  onClick={handleMoreInfoClick}
                  className="border-2 border-[#19466f] text-[#19466f] hover:bg-[#19466f] hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 cursor-pointer"
                >
                  Más Información
                </button>
              </div>
            </div>
          </div>

          <div
            className={`lg:w-1/2 flex justify-center transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            {/* Enhanced ProjectCard Display */}
            <div className="relative w-full max-w-sm mx-auto">
              {/* Enhanced glowing background effect */}
              <div className="absolute -inset-4 md:-inset-8 bg-gradient-to-r from-[#5bb792]/30 to-[#19466f]/30 rounded-3xl blur-2xl animate-pulse-glow"></div>

              <div className="relative z-10">
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  status={project.status}
                  location={project.location}
                  units={project.units}
                  area={project.area}
                  isVisible={isVisible}
                  delay={300}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div
          className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center group">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg group-hover:shadow-xl transition-all duration-300 border border-white/20">
              <div className="text-3xl font-bold bg-gradient-to-r from-[#5bb792] to-[#19466f] bg-clip-text text-transparent mb-2">15+</div>
              <div className="text-gray-600">Años de Experiencia</div>
            </div>
          </div>
          <div className="text-center group">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg group-hover:shadow-xl transition-all duration-300 border border-white/20">
              <div className="text-3xl font-bold bg-gradient-to-r from-[#19466f] to-[#5bb792] bg-clip-text text-transparent mb-2">20+</div>
              <div className="text-gray-600">Proyectos Completados</div>
            </div>
          </div>
          <div className="text-center group">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg group-hover:shadow-xl transition-all duration-300 border border-white/20">
              <div className="text-3xl font-bold bg-gradient-to-r from-[#5bb792] to-[#19466f] bg-clip-text text-transparent mb-2">
                100%
              </div>
              <div className="text-gray-600">Satisfacción del Cliente</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NuevosProyectos;
