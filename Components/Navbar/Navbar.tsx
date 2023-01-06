import React, { useContext } from "react";
import { AppBar, Button, Box } from "@mui/material";
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
      <div className="logo-header" style={{ position: "relative" }}>
        <Link href={"/"}>
          <Image
            src="/logo.png"
            alt="navbar-logo"
            fill
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
        </Link>
      </div>
      <Box display={{ xs: "none", sm: "flex" }}>
        <LinkList />
      </Box>
      <Button
        color={"secondary"}
        onClick={toggleSideMenu}
        sx={{ padding: 0, display: { sm: "none" } }}
      >
        <MenuIcon fontSize="large" />
      </Button>
    </AppBar>
  );
};

export default Navbar;
