import { Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import Layouts from "../layouts";

const Nosotros: NextPage = () => {
  return (
    <Layouts
      pageDescription="Quienes somos, Visión, Misión"
      title={"Quienes Somos"}
    >
      <Grid2
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop: 1,
          gap: 2,
        }}
      >
        <div className="slide-image">
          <Image src={"/nostros-top.jpg"} alt={"People working"} fill />
        </div>
        <Grid2 container m={4} gap={3}>
          <Grid2 container gap={3}>
            <Grid2 justifyContent={"center"} xs={12} sm={5} alignItems="center">
              <Box
                gap={3}
                display="flex"
                flexDirection={"column"}
                alignItems="center"
                justifyContent="center"
              >
                <Typography variant="h2" component={"h2"}>
                  Quienes Somos
                </Typography>
                <Typography variant="body2" component={"p"}>
                  GOMMIR es una empresa con una gran responsabilidad social y
                  ambiental dedicada a la construcción, urbanización, y
                  promoción de servicios para el sector inmobiliario, cuyo
                  espíritu empresarial está orientado al servicio y a la
                  competitividad, fomentando y propendiendo por el
                  fortalecimiento en sus diferentes manifestaciones, apoyando la
                  ejecución de los planes y programas de desarrollo económico y
                  social.
                </Typography>
              </Box>
            </Grid2>
            <Grid2 xs={12} sm={6} mb={4}>
              <div className="other-images">
                <Image src={"/somos.jpg"} fill alt="team" />
              </div>
            </Grid2>
          </Grid2>
          <Grid2
            container
            gap={3}
            sx={{ flexDirection: { xs: "column-reverse", sm: "row" } }}
            alignItems="center"
          >
            {" "}
            <Grid2 xs={12} sm={6} mb={4}>
              <div className="other-images">
                <Image src={"/mission.jpg"} fill alt="mission" />
              </div>
            </Grid2>
            <Grid2 justifyContent={"center"} xs={12} sm={5} alignItems="center">
              <Box
                gap={3}
                display="flex"
                flexDirection={"column"}
                alignItems="center"
                justifyContent="center"
              >
                <Typography variant="h2" component={"h2"}>
                  Nuestra Misión
                </Typography>
                <Typography variant="body2" component={"p"}>
                  Crear valor para nuestros accionistas y colaboradores,
                  aportando bienestar a la sociedad, con pleno respeto hacia el
                  medio ambiente, para cumplir el triple propósito sostenible.
                </Typography>
              </Box>
            </Grid2>
          </Grid2>
          <Grid2 container gap={3} alignItems="center">
            <Grid2 justifyContent={"center"} xs={12} sm={5} alignItems="center">
              <Box
                gap={3}
                display="flex"
                flexDirection={"column"}
                alignItems="center"
                justifyContent="center"
              >
                <Typography variant="h2" component={"h2"} color="secundary">
                  Nuestra Visión
                </Typography>
                <Typography variant="body2" component={"p"}>
                  Ser en 2.025 una empresa destacada en el sector inmobiliario
                  por ofrecer servicios innovadores, caracterizada por la
                  excelencia y la honestidad en sus procesos, como medios para
                  ganar la confianza y el compromiso de sus asociados.
                </Typography>
              </Box>
            </Grid2>
            <Grid2 xs={12} sm={6}>
              <div className="other-images">
                <Image src={"/goals.jpg"} fill alt="goals" />
              </div>
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>
    </Layouts>
  );
};

export default Nosotros;
