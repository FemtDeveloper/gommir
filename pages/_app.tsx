import type { AppProps } from "next/app";
import { UiProvider } from "../context/ui";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UiProvider isMenuOpen={false}>
      <Component {...pageProps} />
    </UiProvider>
  );
}
