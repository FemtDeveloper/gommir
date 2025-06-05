import CharacteriscticsCard from "../Characteristic/CharacteristicsCard";

const NuevosProyectos = () => {
  const styles = {
    height: "340px",
  };
  return (
    <div className="bg-gradient-to-r from-blue-50 to-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#000f40] mb-6">
              Nuevos Proyectos
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed max-w-md mx-auto lg:mx-0">
              Descubre nuestros próximos desarrollos inmobiliarios que
              transformarán el panorama urbano.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <CharacteriscticsCard
              cardTitle="Reserva de Punta Canoa"
              cardText="Nuevo proyecto próximo a comenzar en la ciudad de Cartagena de Indias"
              cardMedia="/cartagena-via.jpg"
              cardStyles={styles}
              cardLink={"nuevos-proyectos"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuevosProyectos;
