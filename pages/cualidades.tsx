import React from "react";
import { NextPage } from "next";
import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Layout from "../layouts/Layout";
import CharacteriscticsCard from "../Components/Characteristic/CharacteristicsCard";

const Cualidades: NextPage = () => {
  return (
    <Layout
      title="Gommir - Cualidades"
      pageDescription="Cualidades destacadas dde la empresa Gommir"
    >
      <Box
        display={"flex"}
        flexDirection="column"
        alignItems={"center"}
        padding="15px"
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
    </Layout>
  );
};

export default Cualidades;
