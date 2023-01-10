import React from "react";
import { Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import CharacteriscticsCard from "../Characteristic/CharacteristicsCard";

const NuevosProyectos = () => {
  const styles = {
    height: "340px",
  };
  return (
    <Grid2
      display={"flex"}
      sx={{
        backgroundColor: "#f1f1f1",
        justifyContent: "center",
        padding: { xs: 4, sm: 8 },
      }}
      height={600}
    >
      <Grid2
        xs={12}
        gap={3}
        display={"flex"}
        flexDirection={{
          xs: "column",
          sm: "row",
        }}
        justifyContent="center"
        alignItems="center"
      >
        <Grid2
          xs={12}
          mb={2}
          display="flex"
          width={"100%"}
          gap={{ xs: 2, sm: 5 }}
          flexDirection={{
            xs: "column",
            sm: "row",
          }}
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="h1" component={"h1"}>
            Nuevos Proyectos
          </Typography>
          <CharacteriscticsCard
            cardTitle="Reserva de Punta Canoa"
            cardText="Nuevo proyecto proximo a comenzar en la ciudad de Cartagena de Indias"
            cardMedia="/cartagena-via.jpg"
            cardStyles={styles}
            cardLink={"nuevos-proyectos"}
          />
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default NuevosProyectos;
