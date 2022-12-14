import { Button, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Image from "next/image";
import Slider from "../Components/Slide";
import Layout from "../layouts";

export default function Home() {
  return (
    <Layout title="Inicio" pageDescription="This is the home of our page">
      <Slider />
      <Grid2
        container
        m={5}
        gap={1}
        display={"flex"}
        justifyContent={"center"}
        alignItems="center"
      >
        <Grid2
          xs={12}
          gap={3}
          display={"flex"}
          flexDirection={{ xs: "column", sm: "row" }}
          justifyContent="center"
        >
          <Grid2 xs={12} sm={6} mb={2}>
            <Typography variant="h2">Gommir</Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              odit molestias ratione ab excepturi itaque corporis dicta id. Id,
              error reiciendis. Placeat quam possimus assumenda alias asperiores
              amet! Est, fugit. Consequuntur similique soluta quia. A ipsam ab,
              voluptas porro soluta adipisci dignissimos earum ipsum laborum
              laudantium laboriosam impedit exercitationem quae! Distinctio
              dolor earum exercitationem eligendi optio maxime, necessitatibus
              repudiandae tempore? Provident, voluptatem aliquam perferendis, ab
              facilis natus recusandae enim voluptatibus adipisci fuga at unde
              commodi! Esse culpa eaque officia expedita, at ex id porro nihil
              possimus ratione corporis aspernatur temporibus.
            </Typography>
          </Grid2>
          <Grid2 xs={12} sm={6} mb={4}>
            <div className="other-images">
              <Image src={"/team.jpg"} fill alt="team" />
            </div>
          </Grid2>
        </Grid2>
        <Typography variant="h2" mb={2}>
          Servicios
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
            // sm={6}
            display="flex"
            justifyContent={"center"}
            alignItems="center"
            gap={2}
            flexDirection={{ xs: "column", sm: "row" }}
          >
            <Grid2
              xs={12}
              sm={6}
              mb={2}
              gap={2}
              display={"flex"}
              flexDirection={{ xs: "column" }}
            >
              <Typography variant="h3">Saneamiento</Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                odit molestias ratione ab excepturi itaque corporis dicta id.
                Id, error reiciendis. Placeat quam possimus assumenda alias
                asperiores amet! Est, fugit. Consequuntur similique soluta quia.
                A ipsam ab, voluptas porro
              </Typography>
            </Grid2>
            <Grid2 xs={12} sm={6} mb={4}>
              <div className="other-images">
                <Image src={"/team.jpg"} fill alt="team" />
              </div>
            </Grid2>
          </Grid2>
          <Grid2
            xs={12}
            // sm={6}
            display="flex"
            justifyContent={"center"}
            alignItems="center"
            gap={2}
            flexDirection={{ xs: "column", sm: "row" }}
          >
            <Grid2
              xs={12}
              sm={6}
              mb={2}
              gap={2}
              display={"flex"}
              flexDirection={{ xs: "column" }}
            >
              <Typography variant="h3">Adecuación de terreno</Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                odit molestias ratione ab excepturi itaque corporis dicta id.
                Id, error reiciendis. Placeat quam possimus assumenda alias
                asperiores amet! Est, fugit. Consequuntur similique soluta quia.
                A ipsam ab, voluptas porro
              </Typography>
            </Grid2>
            <Grid2 xs={12} sm={6} mb={4}>
              <div className="other-images">
                <Image src={"/team.jpg"} fill alt="team" />
              </div>
            </Grid2>
          </Grid2>
          <Grid2
            xs={12}
            // sm={6}
            display="flex"
            justifyContent={"center"}
            alignItems="center"
            gap={2}
            flexDirection={{ xs: "column", sm: "row" }}
          >
            <Grid2
              xs={12}
              sm={6}
              mb={2}
              gap={2}
              display={"flex"}
              flexDirection={{ xs: "column" }}
            >
              <Typography variant="h3">Ejecución de proyectos</Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                odit molestias ratione ab excepturi itaque corporis dicta id.
                Id, error reiciendis. Placeat quam possimus assumenda alias
                asperiores amet! Est, fugit. Consequuntur similique soluta quia.
                A ipsam ab, voluptas porro
              </Typography>
            </Grid2>
            <Grid2 xs={12} sm={6} mb={4}>
              <div className="other-images">
                <Image src={"/team.jpg"} fill alt="team" />
              </div>
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>
    </Layout>
  );
}
