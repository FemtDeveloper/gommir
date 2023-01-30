import React, { useContext } from "react";
import { AppBar, Button, Box, Typography } from "@mui/material";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import { UiContext } from "../../context/ui";
import Link from "next/link";
import LinkList from "../LinkList";

const Navbar = () => {
  const { toggleSideMenu } = useContext(UiContext);

  return (
    <AppBar
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingX: 1,
        paddingY: 1,
        height: "70px",
        margin: 0,
      }}
    >
      <Link href={"/"}>
        <Box display={"flex"} alignItems="center" gap={1}>
          <div
            className="logo-header"
            style={{ position: "relative", display: "flex", zIndex: 10 }}
          >
            <Image
              src="/logo.png"
              alt="navbar-logo"
              fill
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            />
          </div>
          <Typography
            variant="h2"
            component={"span"}
            color="#001660"
            fontWeight={500}
          >
            GOMMIR
          </Typography>
        </Box>
      </Link>
      <Box display={{ xs: "none", sm: "flex" }}>
        <LinkList />
      </Box>
      <Button
        color={"secondary"}
        onClick={toggleSideMenu}
        sx={{ padding: 0, display: { sm: "none" } }}
      >
        <MenuIcon fontSize="large" sx={{ color: "#001e85" }} />
      </Button>
    </AppBar>
  );
};

export default Navbar;
