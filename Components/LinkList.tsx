import Link from "next/link";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";

interface Props {
  openMenu?: () => void | null;
}

const LinkList = ({ openMenu }: Props) => {
  return (
    <List
      sx={{
        display: { xs: "flex" },
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      {["Nosotros", "Servicios", "Contactenos"].map((text, index) => (
        <Link key={text} href={`${text.toLowerCase()}`} onClick={openMenu}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        </Link>
      ))}
    </List>
  );
};

export default LinkList;
