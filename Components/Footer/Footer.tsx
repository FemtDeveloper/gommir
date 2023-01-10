import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Box, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import PhoneIcon from "@mui/icons-material/Phone";

const Footer = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={{ xs: "column", sm: "row" }}
      justifyContent="center"
      alignItems={"center"}
      pb={5}
      component={"footer"}
      sx={{ backgroundColor: "#f1f1f1" }}
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
              <Typography variant="subtitle2">Bogotá D.C, Colombia</Typography>
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
            <Typography variant="subtitle2">contacto@gommirltda.com</Typography>
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
  );
};

export default Footer;
