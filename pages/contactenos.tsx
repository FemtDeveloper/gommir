import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Typography from "@mui/material/Typography";
import ContactForm from "../Components/contact/ContactForm";
import Layout from "../layouts/Layout";

const Contactenos = () => {
  return (
    <>
      <Layout
        pageDescription="Formulario de contacto de Gommit"
        title="Gommir - Contáctanos"
      >
        <Grid2
          display={"flex"}
          justifyContent="center"
          alignItems={"center"}
          flexDirection="column"
          mt={2}
        >
          {/* <Typography variant="h2">Contáctenos</Typography> */}
          <ContactForm />
        </Grid2>
      </Layout>
    </>
  );
};

export default Contactenos;
