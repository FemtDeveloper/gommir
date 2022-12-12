import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../themes/theme";
import { UiProvider } from "../context/ui";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <UiProvider isMenuOpen={false}>
        <Component {...pageProps} />
      </UiProvider>
    </ThemeProvider>
  );
}
