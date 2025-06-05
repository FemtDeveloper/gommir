import { NextPage } from "next";
import Image from "next/image";
import Layouts from "../layouts";

const Nosotros: NextPage = () => {
  return (
    <Layouts
      pageDescription="Quienes somos, Visión, Misión"
      title={"Quienes Somos"}
    >
      <div className="flex flex-col justify-center items-center mt-2 gap-4">
        <div className="slide-image">
          <Image src={"/nostros-top.jpg"} alt={"People working"} fill />
        </div>

        <div className="container mx-auto m-4 px-4 gap-6">
          {/* Quienes Somos Section */}
          <div className="flex flex-col gap-6 justify-center mb-8">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="flex flex-col justify-center items-center text-center w-full sm:w-5/12">
                <h2 className="text-3xl font-bold text-[#000f40] mb-6">
                  Quienes Somos
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  GOMMIR es una empresa con una gran responsabilidad social y
                  ambiental dedicada a la construcción, urbanización, y
                  promoción de servicios para el sector inmobiliario, cuyo
                  espíritu empresarial está orientado al servicio y a la
                  competitividad, fomentando y propendiendo por el
                  fortalecimiento en sus diferentes manifestaciones, apoyando la
                  ejecución de los planes y programas de desarrollo económico y
                  social.
                </p>
              </div>
              <div className="w-full sm:w-1/2 mb-4">
                <div className="other-images">
                  <Image src={"/somos.jpg"} fill alt="team" />
                </div>
              </div>
            </div>
          </div>

          {/* Nuestra Misión Section */}
          <div className="flex flex-col-reverse sm:flex-row gap-6 items-center justify-center mb-8">
            <div className="w-full sm:w-1/2 mb-4">
              <div className="other-images">
                <Image src={"/mission.jpg"} fill alt="mission" />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center text-center w-full sm:w-5/12">
              <h2 className="text-3xl font-bold text-[#000f40] mb-6">
                Nuestra Misión
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Crear valor para nuestros accionistas y colaboradores, aportando
                bienestar a la sociedad, con pleno respeto hacia el medio
                ambiente, para cumplir el triple propósito sostenible.
              </p>
            </div>
          </div>

          {/* Nuestra Visión Section */}
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
            <div className="flex flex-col justify-center items-center text-center w-full sm:w-5/12">
              <h2 className="text-3xl font-bold text-[#000f40] mb-6">
                Nuestra Visión
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Ser en 2.025 una empresa destacada en el sector inmobiliario por
                ofrecer servicios innovadores, caracterizada por la excelencia y
                la honestidad en sus procesos, como medios para ganar la
                confianza y el compromiso de sus asociados.
              </p>
            </div>
            <div className="w-full sm:w-1/2">
              <div className="other-images">
                <Image src={"/goals.jpg"} fill alt="goals" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  );
};

export default Nosotros;
