import Image from "next/image";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  {
    src: "sunset.jpg",
    title: "Proyectos Residenciales",
    subtitle: "Creando hogares excepcionales",
  },
  {
    src: "wall.jpg",
    title: "Construcción Comercial",
    subtitle: "Espacios que inspiran negocios",
  },
  {
    src: "ground.jpg",
    title: "Desarrollo Urbano",
    subtitle: "Transformando ciudades del futuro",
  },
];

const Slider = () => {
  const properties = {
    duration: 6000,
    autoplay: true,
    transitionDuration: 800,
    arrows: true,
    infinite: true,
    indicators: true,
  };

  return (
    <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] min-h-[400px] max-h-[800px] overflow-hidden group">
      {/* Gradient Overlay */}

      <Slide {...properties} cssClass="relative h-full">
        {slideImages.map((slide, index) => (
          <div className=" relative h-full" key={slide.src}>
            <div className="slide-image relative h-96">
              <Image
                src={`/${slide.src}`}
                alt={slide.title}
                fill
                className="object-cover transition-transform duration-[8000ms] hover:scale-105"
                priority={index === 0}
                sizes="100vw"
              />

              {/* Content Overlay */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="text-center text-white px-4 max-w-4xl animate-fade-in-up">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-2xl animate-slide-in-left">
                    {slide.title}
                  </h1>
                  <p className="text-lg sm:text-xl md:text-2xl font-light opacity-90 drop-shadow-lg animate-slide-in-right delay-300">
                    {slide.subtitle}
                  </p>
                  <div className="mt-8 animate-fade-in delay-700">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer">
                      Conocer Más
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slide>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
