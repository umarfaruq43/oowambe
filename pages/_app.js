import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import "../styles/globals.css";
import "@fontsource/quicksand/400.css";
import "@fontsource/quicksand/500.css";
import theme from "../theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
