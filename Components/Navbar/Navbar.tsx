import React, { useContext } from "react";
import { AppBar, Button } from "@mui/material";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import { UiContext } from "../../context/ui";
import Link from "next/link";

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
      <div
        className="main-logo"
        style={{ width: "320px", position: "relative", marginTop: "10px" }}
      >
        <Link href={"/"}>
          <Image
            src="/main-logo.png"
            alt="navbar-logo"
            fill
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
        </Link>
      </div>
      <Button color="secondary" onClick={toggleSideMenu}>
        <MenuIcon fontSize="large" />
      </Button>
    </AppBar>
  );
};

export default Navbar;
