//theme.ts
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  styles: {
    global: (props: any) => ({
      body: {
        bg: mode("#EEF6FB", "black")(props),
        fontFamily: "Quicksand",
      },
      html: { height: "100vh" },
    }),
  },
});

export default theme;
