import React from "react";
import { NextPage } from "next";
import { Typography, Box } from "@mui/material";
import Layout from "../layouts/Layout";

const Nuevosproyectos: NextPage = () => {
  return (
    <Layout
      pageDescription="Nuevos proyectos en Cartagena de la empresa Gommir"
      title="Nuevos proyectos"
    >
      <Box sx={{ marginY: 20, marginX: 5 }} component="section">
        <Typography variant="h1">Nuevos proyectos </Typography>
        <Typography variant="h2">
          Esta es la página dónde se muestran los Nuevos NuevosProyectos
        </Typography>
      </Box>
    </Layout>
  );
};

export default Nuevosproyectos;
