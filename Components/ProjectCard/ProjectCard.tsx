import Image from "next/image";
import { useRouter } from "next/router";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  status: string;
  location: string;
  units: string;
  area: string;
  isVisible?: boolean;
  delay?: number;
}

const ProjectCard = ({
  title,
  description,
  image,
  status,
  location,
  units,
  area,
  isVisible = true,
  delay = 0
}: ProjectCardProps) => {
  const router = useRouter();

  const getStatusColor = (status: string) => {
    switch (status) {
      case "En desarrollo": return "bg-blue-100 text-blue-800";
      case "Planeación": return "bg-yellow-100 text-yellow-800";
      case "En construcción": return "bg-green-100 text-green-800";
      case "Próximamente": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const handleMoreInfo = () => {
    router.push('/nuevos-proyectos');
  };

  const handleContact = () => {
    // Scroll to contact form on current page or navigate to contact page
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push('/contactenos');
    }
  };

  return (
    <div
      className={`group transition-all duration-700 max-w-md mx-auto ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-8 scale-95'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-100 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
        <div className="relative h-64 overflow-hidden">
          <Image 
            src={image} 
            alt={title} 
            fill 
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          <div className="absolute top-4 right-4">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(status)}`}>
              {status}
            </span>
          </div>
          <div className="absolute bottom-4 left-4">
            <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          </div>
        </div>
        
        <div className="p-6 space-y-4">
          <p className="text-gray-700 leading-relaxed text-sm">{description}</p>
          
          <div className="grid grid-cols-1 gap-3 text-sm">
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-gray-600">{location}</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span className="text-gray-600">{units}</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
              <span className="text-gray-600">{area}</span>
            </div>
          </div>
          
          <div className="pt-4 border-t border-gray-100 space-y-3">
            <button 
              onClick={handleMoreInfo}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              Más información
            </button>
            <button 
              onClick={handleContact}
              className="w-full border-2 border-blue-500 text-blue-500 font-medium py-2 px-6 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 cursor-pointer"
            >
              Contáctanos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
