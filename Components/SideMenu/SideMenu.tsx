import React, { useContext, useState } from "react";
import { Box } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton/ListItemButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Drawer from "@mui/material/Drawer";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import { UiContext } from "../../context/ui";

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
          backgroundColor: "rgba( 300, 328, 321, 0.7 )",
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
      <List>
        {["Inicio", "Nosotros", "Servicios", "Contactenos"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </Drawer>
  );
};

export default SideMenu;
