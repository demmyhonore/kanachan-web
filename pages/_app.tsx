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
      brokenWhite: "#fffffc",
      olive: "#b8e0d2",
      orange: "#ffd6a5",
      purple: "#bdb2ff",
      yellow: "#fdffb6",
      violet: "#ffc6ff",
      // blue: "#9bf6ff",
      // darkBlue: "#a0c4ff",
      // darkGrey: "#666666",
      // green: "#caffbf",
      // red: "#ffadad",
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
