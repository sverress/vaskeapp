import { ThemeProvider } from "styled-components";
import { AppProps } from "next/app";
import theme from "../styles/theme";
import "../styles/style.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
