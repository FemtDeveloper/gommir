import { Typography, Box } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Image from "next/image";
import Slider from "../Components/Slide";
import Layout from "../layouts";
import ContactForm from "../Components/contact/ContactForm";
import MyMap from "../Components/Maps/Maps";
import CharacteriscticsCard from "../Components/Characteristic/CharacteristicsCard";
import NuevosProyectos from "../Components/NuevosProyectos";

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
      <Grid2
        container
        xs={12}
        gap={3}
        display={"flex"}
        flexDirection={{
          xs: "column",
          sm: "row",
        }}
        justifyContent="center"
        alignItems="center"
        marginY={{ xs: 1, sm: 10 }}
      >
        <Grid2
          xs={12}
          sm={8}
          mb={2}
          padding={{ xs: 2, sm: 0 }}
          display="flex"
          width={"100%"}
          gap={2}
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="h1" component={"h1"}>
            Gommir{" "}
          </Typography>
          <Typography variant="body1" textAlign={"center"}>
            Con años de experiencia y un equipo de profesionales dedicados,
            tenemos las habilidades y los recursos para convertir su visión
            inmobiliaria en una realidad. Desde construcciones nuevas hasta
            renovaciones y desarrollos comerciales, tenemos la experiencia para
            brindar resultados de alta calidad a tiempo y dentro del
            presupuesto. Si usted es un constructor de viviendas, dueño de una
            propiedad o desarrollador, podemos ayudarlo a hacer realidad su
            proyecto.
          </Typography>
        </Grid2>
        <Grid2 className="gommir-image" xs={12} sm={6}>
          <Image src={"/team.jpg"} fill alt="team" />
        </Grid2>
      </Grid2>

      <NuevosProyectos />
      <Box sx={{ display: { sm: "none", padding: "30px 15px" } }}>
        <Typography variant="h2" mb={2}>
          Nuestras cualidades
        </Typography>
        <CharacteriscticsCard
          cardTitle="Nuestras cualidades"
          cardText="Conoce nuestras cualidades"
          cardMedia="/characteristics.jpg"
          cardStyles={styles}
          cardLink={"cualidades"}
        />
      </Box>
      <Box
        display={{ xs: "none", sm: "flex" }}
        flexDirection="column"
        alignItems={"center"}
      >
        <Typography variant="h1" my={5}>
          Nuestras cualidades
        </Typography>
        <Grid2
          container
          xs={12}
          gap={3}
          display={"flex"}
          flexDirection={"column"}
          justifyContent="center"
          component={"section"}
        >
          <Grid2
            xs={12}
            display="flex"
            flexWrap={"wrap"}
            justifyContent={"center"}
            alignItems="center"
            gap={2}
            flexDirection={{ xs: "column", sm: "row" }}
          >
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
          </Grid2>
        </Grid2>
      </Box>

      <MyMap />
      <ContactForm />
    </Layout>
  );
}
