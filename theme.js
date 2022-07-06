import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    50: "#FFFFFF",
    100: "#C03A83",
    200: "#276B6B",
    300: "#0ABCBC",
  },
  dark: {
    50: "#212020",
  },
};

const theme = extendTheme({
  colors,
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `Quicksand, sans-serif`,
  },
});

export default theme;
