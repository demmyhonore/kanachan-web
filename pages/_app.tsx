import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const customTheme = {
  fonts: {
    heading: `'Noto Sans', sans-serif`,
    body: `'Noto Sans', sans-serif`,
  },
  colors: {
    brand: {
      olive: "#b8e0d2",
      orange: "#ffd6a5",
      purple: "#bdb2ff",
      // blue: "#9bf6ff",
      // brokenWhite: "#fffffc",
      // darkBlue: "#a0c4ff",
      // darkGrey: "#666666",
      // green: "#caffbf",
      // red: "#ffadad",
      // violet: "#ffc6ff",
      // yellow: "#fdffb6",
    },
  },
};

const theme = extendTheme({ ...customTheme });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
