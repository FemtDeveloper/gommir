import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import React, { useEffect, useState } from "react";

const center = {
  lat: 10.3997, // Cartagena coordinates
  lng: -75.5144,
};

export default function MyMap() {
  const [isVisible, setIsVisible] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY!,
  });

  const [map, setMap] = React.useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const mapElement = document.getElementById("map-section");
    if (mapElement) {
      observer.observe(mapElement);
    }

    return () => observer.disconnect();
  }, []);

  const onLoad = React.useCallback(function callback(map: any) {
    map.setZoom(15);
    setMap(map);
    setMapLoaded(true);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
    setMapLoaded(false);
  }, []);

  const contactInfo = [
    {
      icon: <MapPin className="text-blue-600" size={20} />,
      title: "Dirección",
      content: "Cartagena de Indias, Colombia",
      description: "Centro Histórico",
    },
    {
      icon: <Phone className="text-green-600" size={20} />,
      title: "Teléfono",
      content: "+57 (xxx) xxx-xxxx",
      description: "Línea directa",
    },
    {
      icon: <Clock className="text-purple-600" size={20} />,
      title: "Horarios",
      content: "Lun - Vie: 8:00 - 18:00",
      description: "Sáb: 9:00 - 14:00",
    },
    {
      icon: <Navigation className="text-orange-600" size={20} />,
      title: "Ubicación",
      content: "Zona Turística",
      description: "Fácil acceso",
    },
  ];

  return (
    <section
      id="map-section"
      className="relative bg-gradient-to-b from-white to-[#5bb792]/5 py-16 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#5bb792]/10 rounded-full opacity-10 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-[#19466f]/10 rounded-full opacity-10 animate-float-delayed"></div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#5bb792]/20 to-[#19466f]/20 rounded-full text-sm font-medium text-[#19466f] mb-4">
            <MapPin size={16} className="mr-2" />
            Nuestra Ubicación
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#19466f] via-[#5bb792] to-[#19466f] bg-clip-text text-transparent mb-4">
            Encuéntranos
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#5bb792] to-[#19466f] rounded-full mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estamos ubicados en el corazón de Cartagena, listos para atenderte
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Información de Contacto
            </h3>

            {contactInfo.map((info, index) => (
              <div
                key={index}
                className={`p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#5bb792]/20 to-[#19466f]/20 rounded-lg flex items-center justify-center">
                    {info.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {info.title}
                    </h4>
                    <p className="text-gray-700 font-medium">{info.content}</p>
                    <p className="text-sm text-gray-500">{info.description}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="mt-8">
              <button className="w-full bg-gradient-to-r from-[#5bb792] to-[#19466f] text-white font-medium py-3 px-6 rounded-lg hover:from-[#4da583] hover:to-[#15395e] transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 cursor-pointer">
                <Navigation size={20} />
                <span>Cómo llegar</span>
              </button>
            </div>
          </div>

          {/* Map Container */}
          <div
            className={`lg:col-span-2 transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
              {!isLoaded && (
                <div className="flex items-center justify-center h-[500px] bg-gray-100">
                  <div className="text-center space-y-4">
                    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
                    <p className="text-gray-600">Cargando mapa...</p>
                  </div>
                </div>
              )}

              {isLoaded && (
                <div className="relative h-[500px]">
                  <GoogleMap
                    mapContainerClassName="w-full h-full rounded-2xl"
                    center={center}
                    zoom={15}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                    options={{
                      disableDefaultUI: false,
                      zoomControl: true,
                      mapTypeControl: false,
                      scaleControl: true,
                      streetViewControl: false,
                      rotateControl: false,
                      fullscreenControl: true,
                      styles: [
                        {
                          featureType: "water",
                          elementType: "geometry",
                          stylers: [{ color: "#e9e9e9" }, { lightness: 17 }],
                        },
                        {
                          featureType: "landscape",
                          elementType: "geometry",
                          stylers: [{ color: "#f5f5f5" }, { lightness: 20 }],
                        },
                      ],
                    }}
                  >
                    <Marker
                      position={center}
                      animation={
                        mapLoaded ? google.maps.Animation.DROP : undefined
                      }
                    />
                  </GoogleMap>

                  {/* Map Overlay */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-gray-900">
                        Gommir Ltda
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// export default React.memo(MyMap);
