import { Globe, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const footerElement = document.getElementById("footer");
    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => observer.disconnect();
  }, []);

  const contactInfo = [
    {
      icon: <MapPin className="text-blue-600" size={20} />,
      title: "Ubicación",
      content: "Cartagena de Indias, Colombia",
    },
    {
      icon: <Mail className="text-green-600" size={20} />,
      title: "Email",
      content: "contacto@gommirltda.com",
    },
    {
      icon: <Phone className="text-purple-600" size={20} />,
      title: "Teléfono",
      content: "+57 (xxx) xxx-xxxx",
    },
    {
      icon: <Globe className="text-orange-600" size={20} />,
      title: "Website",
      content: "www.gommir.com",
    },
  ];

  return (
    <footer
      id="footer"
      className="relative bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-blue-100 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-100 rounded-full opacity-20 animate-float-delayed"></div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Logo Section */}
          <div
            className={`flex flex-col items-center lg:items-start space-y-6 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="w-64 h-20 relative group">
              <Link href={"/"}>
                <Image
                  src="/footer-logo.png"
                  alt="Gommir Logo"
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </Link>
            </div>
            <p className="text-gray-600 text-center lg:text-left max-w-md leading-relaxed">
              Transformando tus ideas innovación, calidad y compromiso hacia un
              futuro sostenible.
            </p>
          </div>

          {/* Contact Info Section */}
          <div
            className={`lg:col-span-2 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="text-center lg:text-left mb-8">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-900 to-purple-600 bg-clip-text text-transparent mb-2">
                Información de Contacto
              </h3>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto lg:mx-0"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-4 p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:scale-105 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-10"
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="flex-shrink-0">{item.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          className={`mt-12 pt-8 border-t border-gray-200 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-600 text-sm text-center md:text-left">
              © 2025 Gommir Ltda. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link
                href="/nosotros"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
              >
                Nosotros
              </Link>
              <Link
                href="/servicios"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
              >
                Servicios
              </Link>
              <Link
                href="/cualidades"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
              >
                Cualidades
              </Link>
              <Link
                href="/contactenos"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
              >
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
