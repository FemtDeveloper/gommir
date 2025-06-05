import { NextPage } from "next";
import Layout from "../layouts/Layout";

const Nuevosproyectos: NextPage = () => {
  return (
    <Layout
      pageDescription="Nuevos proyectos en Cartagena de la empresa Gommir"
      title="Nuevos proyectos"
    >
      <section className="my-20 mx-5">
        <h1 className="text-4xl font-bold text-[#000f40] mb-8">
          Nuevos proyectos
        </h1>
        <h2 className="text-2xl font-semibold text-[#000f40]">
          Esta es la página donde se muestran los Nuevos Proyectos
        </h2>
      </section>
    </Layout>
  );
};

export default Nuevosproyectos;
