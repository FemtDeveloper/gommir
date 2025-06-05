import { NextPage } from "next";
import Image from "next/image";
import Layouts from "../layouts";

const Servicios: NextPage = () => {
  return (
    <Layouts
      pageDescription="Servicios ofrecidos por Gommir. Saneamiento de tierras, adecuación de terreno y Ejecución de proyectos"
      title={"Gommir - Servicios"}
    >
      <div className="flex flex-col justify-center items-center mt-2 gap-4">
        <div className="slide-image">
          <Image src={"/nostros-top.jpg"} alt={"People working"} fill />
        </div>

        <div className="container mx-auto m-4 px-4 gap-6">
          {/* Saneamiento de tierras Section */}
          <div className="flex flex-col gap-6 justify-center mb-8">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="flex flex-col justify-center items-center text-center w-full sm:w-5/12">
                <h2 className="text-3xl font-bold text-[#000f40] mb-6">
                  Saneamiento de tierras
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  GOMMIR es una empresa que se encarga de realizar los trámites
                  necesarios para que el terreno deseado cumpla con todos los
                  trámites necesarios para su posterior utilización dentro de
                  cualquier proyecto.
                </p>
              </div>
              <div className="w-full sm:w-1/2 mb-4">
                <div className="other-images">
                  <Image src={"/saneamiento.jpg"} fill alt="team" />
                </div>
              </div>
            </div>
          </div>

          {/* Adecuación de terrenos Section */}
          <div className="flex flex-col-reverse sm:flex-row gap-6 items-center mb-8">
            <div className="w-full sm:w-1/2 mb-4">
              <div className="other-images">
                <Image src={"/adecuacion.jpg"} fill alt="team" />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center text-center w-full sm:w-5/12">
              <h2 className="text-3xl font-bold text-[#000f40] mb-6">
                Adecuación de terrenos
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Se hace un trabajo operativo en el terreno con maquinaria y
                personal especializado, adecuando y dejándolo apto para la
                ejecución de cualquier proyecto inmobiliario que se requiera.
              </p>
            </div>
          </div>

          {/* Ejecución De Proyectos Section */}
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
            <div className="flex flex-col justify-center items-center text-center w-full sm:w-5/12">
              <h2 className="text-3xl font-bold text-[#000f40] mb-6">
                Ejecución De Proyectos
              </h2>
              <p className="text-gray-700 leading-relaxed">
                En Gommir nos enorgullecemos de nuestra capacidad para ejecutar
                proyectos de manera experta de principio a fin. Con un equipo de
                profesionales calificados y un compromiso con la excelencia,
                tenemos un historial comprobado de brindar resultados de alta
                calidad a tiempo y dentro del presupuesto. Ya sea que esté
                buscando construir una casa nueva, renovar una propiedad
                existente o desarrollar un proyecto comercial, tenemos la
                experiencia y los recursos para hacer realidad su visión.
              </p>
            </div>
            <div className="w-full sm:w-1/2">
              <div className="other-images">
                <Image src={"/ejecucion.jpg"} fill alt="team" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  );
};

export default Servicios;
