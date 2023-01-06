import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    text: {
      primary: "#000823",
    },
    primary: {
      main: "#f5f5f5",
      dark: "#000232",
      light: "#2800db",
    },
    secondary: {
      main: "#000823",
      // main: "#e8e8e8",
      dark: "#484848",
      light: "#ff79b0",
    },
    error: {
      main: "#f44336",
    },
    background: {
      default: "#ffffff",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 16,
    fontWeightBold: 700,

    h1: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      color: "#000f40",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: "bold",
      color: "#000f40",
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: "bold",
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: "bold",
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: "bold",
    },
    h6: {
      fontSize: "1rem",
      fontWeight: "bold",
    },
  },
  spacing: 8,

  transitions: {
    easing: {
      // Custom easing function
      easeInOut: "cubic-bezier(0.4, 0,3)",
    },
  },
});
