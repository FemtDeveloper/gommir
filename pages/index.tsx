import Image from "next/image";
import CharacteriscticsCard from "../Components/Characteristic/CharacteristicsCard";
import ContactForm from "../Components/contact/ContactForm";
import MyMap from "../Components/Maps/Maps";
import NuevosProyectos from "../Components/NuevosProyectos";
import Slider from "../Components/Slide";
import Layout from "../layouts";

export default function Home() {
  const styles = {
    height: "340px",
  };
  return (
    <Layout
      title="Inicio"
      pageDescription="Página de inicio de la empresa Gommir Ltda"
    >
      <Slider />
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 my-8">
          <div className="flex flex-col items-center justify-center gap-6 w-full lg:w-2/3 text-center px-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#000f40] mb-4">
              Gommir
            </h1>
            <p className="text-lg leading-relaxed text-gray-700 max-w-4xl">
              Con años de experiencia y un equipo de profesionales dedicados,
              tenemos las habilidades y los recursos para convertir su visión
              inmobiliaria en una realidad. Desde construcciones nuevas hasta
              renovaciones y desarrollos comerciales, tenemos la experiencia
              para brindar resultados de alta calidad a tiempo y dentro del
              presupuesto. Si usted es un constructor de viviendas, dueño de una
              propiedad o desarrollador, podemos ayudarlo a hacer realidad su
              proyecto.
            </p>
          </div>
          <div className="relative w-full lg:w-1/2 h-80 lg:h-96 gommir-image">
            <Image
              src={"/team.jpg"}
              fill
              alt="team"
              className="object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>

      <NuevosProyectos />

      {/* Mobile version */}
      <div className="lg:hidden p-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-[#000f40] mb-6 text-center">
          Nuestras cualidades
        </h2>
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
      <div className="hidden lg:flex flex-col items-center py-16 bg-gray-50">
        <h1 className="text-4xl lg:text-5xl font-bold text-[#000f40] mb-12 text-center">
          Nuestras cualidades
        </h1>
        <section className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-7xl mx-auto">
            <CharacteriscticsCard
              cardTitle="Compromiso"
              cardMedia="/commitment.jpg"
              cardText="Estamos comprometidos a entregar resultados excepcionales para nuestros clientes. Trabajamos arduamente para garantizar que cada proyecto cumpla con los más altos estándares de calidad y satisfacción"
            />
            <CharacteriscticsCard
              cardTitle="Integridad"
              cardMedia="/integrity.jpg"
              cardText="Creemos en llevar a cabo nuestro negocio con el más alto nivel de integridad. Desde nuestras interacciones con los clientes hasta nuestras relaciones con los contratistas y socios, estamos comprometidos con la honestidad y la transparencia en todo lo que hacemos."
            />
            <CharacteriscticsCard
              cardTitle="Innovación"
              cardMedia="/innovation.jpg"
              cardText="Siempre estamos buscando formas de mejorar e innovar en la industria de bienes raíces. Ya sea a través de nuevas técnicas de construcción o enfoques innovadores de desarrollo, buscamos constantemente nuevas formas de aportar valor a nuestros clientes."
            />
            <CharacteriscticsCard
              cardTitle="Experticia"
              cardMedia="/expertise.jpg"
              cardText="Nuestro equipo en Gommir está formado por profesionales experimentados que tienen un profundo conocimiento de la industria inmobiliaria. Somos capaces de proporcionar orientación experta y apoyo a nuestros clientes durante todo el proceso de ejecución del proyecto."
            />
            <CharacteriscticsCard
              cardTitle="Responsabilidad"
              cardMedia="/responsiveness.jpg"
              cardText="Entendemos que el tiempo es esencial en la industria de bienes raíces. Es por eso que estamos comprometidos a ser receptivos y confiables, asegurando que las necesidades de nuestros clientes se satisfagan de manera oportuna."
            />
            <CharacteriscticsCard
              cardTitle="Satisfacción"
              cardMedia="/satisfaction.jpg"
              cardText="En Gommir, nuestro objetivo final es asegurar que nuestros clientes estén completamente satisfechos con los resultados de sus proyectos. Trabajamos en estrecha colaboración con nuestros clientes para comprender su visión y asegurarnos de que se cumplan o superen sus expectativas."
            />
          </div>
        </section>
      </div>

      <MyMap />
      <ContactForm />
    </Layout>
  );
}
