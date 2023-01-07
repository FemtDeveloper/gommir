import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AppBar, Box, Button, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import PhoneIcon from "@mui/icons-material/Phone";

const Footer = () => {
  return (
    <AppBar
      sx={{
        display: "flex",
        position: "relative",
        bottom: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingX: 2,
        paddingY: 4,
        // height: "80px",
        margin: 0,
        // backgroundColor: "gold",
        width: "100%",
      }}
      component={"footer"}
    >
      <Box
        display={"flex"}
        flexDirection={{ xs: "column", sm: "row" }}
        justifyContent="center"
        alignItems={"center"}
      >
        <Grid2 xs={6}>
          <div
            className="main-logo"
            style={{ width: "320px", position: "relative", marginTop: "10px" }}
          >
            <Link href={"/"}>
              <Image
                src="/footer-logo.png"
                alt="footer-logo"
                fill
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
            </Link>
          </div>
        </Grid2>
        {/* <Typography variant="h3" component={"h3"}>
          Datos de contacto
        </Typography> */}
        <Grid2 container gap={2} mt={2} justifyContent="center">
          <Grid2 xs={12} sm={6} justifyContent="center" display={"flex"}>
            <Typography variant="h3" component={"h3"}>
              Datos de contacto
            </Typography>
          </Grid2>
          <Grid2 xs={12} sm={6}>
            <Box
              display="flex"
              flexDirection={"row"}
              justifyContent="center"
              alignItems={"center"}
              gap={3}
            >
              <LocationOnIcon color="secondary" />
              <Box>
                <Typography variant="subtitle2">
                  Bogotá D.C, Colombia
                </Typography>
                <Typography variant="subtitle2">Calle 94 # 13 - 00</Typography>
              </Box>
            </Box>
          </Grid2>
          <Grid2 xs={12} sm={6}>
            <Box
              display="flex"
              flexDirection={"row"}
              justifyContent="center"
              alignItems={"center"}
              gap={3}
            >
              <EmailIcon color="secondary" />
              <Typography variant="subtitle2">contacto@gommir.com</Typography>
            </Box>
          </Grid2>
          <Grid2 xs={12} sm={6}>
            <Box
              display="flex"
              flexDirection={"row"}
              justifyContent="center"
              alignItems={"center"}
              gap={3}
            >
              <PhoneIcon color="secondary" />
              <Typography variant="subtitle2">(+57) 318-XXX-XXXX</Typography>
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </AppBar>
  );
};

export default Footer;
