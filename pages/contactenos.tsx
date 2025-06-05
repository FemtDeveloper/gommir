import ContactForm from "../Components/contact/ContactForm";
import Layout from "../layouts/Layout";

const Contactenos = () => {
  return (
    <Layout
      pageDescription="Formulario de contacto de Gommir"
      title="Gommir - Contáctanos"
    >
      <div className="flex justify-center items-center flex-col mt-4">
        <ContactForm />
      </div>
    </Layout>
  );
};

export default Contactenos;
