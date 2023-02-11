import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { NextPage } from "next";
import Image from "next/image";
import Layouts from "../layouts";

const Servicios: NextPage = () => {
  return (
    <Layouts
      pageDescription="Servicios ofrecidos por Gommir. Saneamiento de tierras, adecuación de terreno y Ejecución de proyectos"
      title={"Gommir - Servicios"}
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
        <Grid2 container m={4} gap={3} justifyContent={"center"}>
          <Grid2
            container
            gap={3}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Grid2 justifyContent={"center"} xs={12} sm={5} alignItems="center">
              <Typography
                variant="h2"
                component={"h2"}
                textAlign={"center"}
                mb={6}
              >
                Saneamiento de tierras
              </Typography>
              <Typography variant="body2" component={"p"}>
                GOMMIR es una empreza que se encarga de realizar los tramites
                necesarios para que el terreno deseado cumpla con todos los
                tramites necesarios para su posterior utilización dentro de
                cualquier proyecto.
              </Typography>
            </Grid2>
            <Grid2 xs={12} sm={6} mb={4}>
              <div className="other-images">
                <Image src={"/saneamiento.jpg"} fill alt="team" />
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
                <Image src={"/adecuacion.jpg"} fill alt="team" />
              </div>
            </Grid2>
            <Grid2 justifyContent={"center"} xs={12} sm={5} alignItems="center">
              <Typography
                variant="h2"
                component={"h2"}
                textAlign={"center"}
                mb={6}
              >
                Adecuación de terrenos
              </Typography>
              <Typography variant="body2" component={"p"}>
                Se hace un trabajo operativo en el terreno con maquinaria y
                personal especializado, adecuando y dejándolo apto para la
                ejecución de cualquier proyecto inmobiliario que se requiera
              </Typography>
            </Grid2>
          </Grid2>
          <Grid2
            container
            gap={3}
            alignItems="center"
            justifyContent={"center"}
          >
            <Grid2 justifyContent={"center"} xs={12} sm={5} alignItems="center">
              <Typography
                variant="h2"
                component={"h2"}
                color="secundary"
                textAlign={"center"}
                mb={6}
              >
                Ejecución De Proyectos
              </Typography>
              <Typography variant="body2" component={"p"}>
                En Gommir nos enorgullecemos de nuestra capacidad para ejecutar
                proyectos de manera experta de principio a fin. Con un equipo de
                profesionales calificados y un compromiso con la excelencia,
                tenemos un historial comprobado de brindar resultados de alta
                calidad a tiempo y dentro del presupuesto. Ya sea que esté
                buscando construir una casa nueva, renovar una propiedad
                existente o desarrollar un proyecto comercial, tenemos la
                experiencia y los recursos para hacer realidad su visión.
              </Typography>
            </Grid2>
            <Grid2 xs={12} sm={6}>
              <div className="other-images">
                <Image src={"/ejecucion.jpg"} fill alt="team" />
              </div>
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>
    </Layouts>
  );
};

export default Servicios;
