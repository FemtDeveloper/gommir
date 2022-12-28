import React, { useContext } from "react";
import { Drawer } from "@mui/material";
import { UiContext } from "../../context/ui";
import LinkList from "../LinkList";

const SideMenu = () => {
  const { isMenuOpen, toggleSideMenu } = useContext(UiContext);

  return (
    <Drawer
      anchor="top"
      open={isMenuOpen}
      onClose={toggleSideMenu}
      ModalProps={{
        keepMounted: true,
      }}
      PaperProps={{
        sx: {
          width: "100%",
          backgroundColor: "rgba( 340, 340, 340, 0.92 )",
          boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
          backdropFilter: "blur( 11.5px )",
          borderRadius: "5px",
          border: "1px solid rgba( 255, 255, 255, 0.18 )",
        },
      }}
    >
      <span
        onClick={toggleSideMenu}
        style={{
          position: "absolute",
          right: "10px",
          fontSize: "28px",
          fontWeight: "bolder",
          zIndex: 1,
        }}
      >
        X
      </span>
      <LinkList openMenu={toggleSideMenu} />
    </Drawer>
  );
};

export default SideMenu;
